const keys = require("../../config/keys");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const Photo = require('../../models/Photo');
var AWS = require('aws-sdk')

var storage = multer.memoryStorage();
var upload = multer({storage: storage});

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

//