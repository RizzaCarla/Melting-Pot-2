const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI; 
const bodyParser = require("body-parser");
const passport = require("passport");

// Add require routes here
const users = require("./routes/api/users");
const recipes = require("./routes/api/recipes");
const events = require("./routes/api/events");
const likes = require("./routes/api/likes");
const comments = require('./routes/api/comment');
// End add require routes here 



if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Connected to MongoDB successfully!!"))
.catch((err) => console.log(err))
;

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(passport.initialize());
require("./config/passport")(passport);

// ADD BACKEND ROUTES HERE
app.use("/api/users", users);
app.use('/api/recipes', recipes);
app.use('/api/events', events);
app.use('/api/likes', likes);
app.use('/api/comments, comments');
// ADD BACKEND ROUTES HERE

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));