const keys = require("../../config/keys");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const Photo = require('../../models/Photo');
var AWS = require('aws-sdk')

var storage = multer.memoryStorage();
var upload = multer({storage: storage});

AWS.config.update({
  credentials: {
    accessKeyId: keys.AWS_ACCESS_KEY_ID,
    secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
    region: keys.AWS_REGION,
  }
});

// console.log(AWS.config)

// Get all photos 
router.get("/", (req, res, next) => {
  Photo.find(
    {},
    null,
    {
      sort: {createdAt: 1}
    },
    (err, photos) => {
      if (err) {
        return next(err);
      }
      res.status.send(photos)
    }
  )
})

//Get single GO data 

router.get("/:id", (req,res, next) => {
  Photo.findById(req.params.id, (err, go) => {
    if (err) {
      return next(err)
    }
    res.json(go)
  })
})

// Route to upload file
router.post("/upload", upload.single("file"), function(req, res) {
  const file = req.file;
  const s3FileURL = keys.AWS_Uploaded_File_URL_LINK;
  
  let s3bucket = new AWS.S3({
    accessKeyId: keys.AWS_ACCESS_KEY_ID,
    secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
    region: keys.AWS_REGION
  })
 
  // where we want to store the file

  var params = {
    Bucket: keys.AWS_BUCKET_NAME,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };

  s3bucket.upload(params, function(err, data) {
    if (err) {
      res.status(500).json({error: true, Message: err})
    } else {
      res.send({data});
      let newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };
      var photo = new Photo(newFileUploaded);
      photo.save(function(error, newFile) {
        if (error) {
          throw error
        }
      })
    }
  })
})

// Route to delete a photo file
router.delete("/:id", (req, res, next) => {
  Photo.findByIdAndRemove(req.params.id, (err, result) => {
    if (err) {
      return next(err);
    }

    // Deleting file from s3
    let s3bucket = new AWS.S3({
      accessKeyId: keys.AWS_ACCESS_KEY_ID,
      secretAccessKey: keys.AWS_SECRET_ACCESS_KEY,
      region: keys.AWS_REGION,
    });

    let params = {
      Bucket: keys.AWS_BUCKET_NAME,
      Key: result.s3_key,
    };

    s3bucket.deleteObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send({
          status: "200",
          responseType: "string",
          response: "success"
        })
      }
    })
  })
})

module.exports = router;