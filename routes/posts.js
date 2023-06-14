const express = require("express");
const res = require("express/lib/response")
const router = express.Router();

const Post = require("../model/Post");

//GET ALL THE POST
router.get("/", (req, res) => {
  res.send("This is the Post!");
});

//SAVE THE POST
router.post("/",  (req, res) => {
  const post = new Post({
    title : req.body.title,
    description : req.body.description,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message : err });
    });
});

module.exports = router;