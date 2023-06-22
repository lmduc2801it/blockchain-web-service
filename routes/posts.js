// const express = require("express");
// const res = require("express/lib/response")
// const router = express.Router();

// const Post = require("../model/toDo");

// const handlePageError = (res, e) => res.setStatus(500).send(e.message);

// //GET ALL THE POST
// router.get("/", (req, res) => {
//   res.send("This is the Post!");
// });

// //SAVE THE POST
// router.post('/',(req, res) => {
//     const post = new Post(req.body).save()

//     post
//     .save()
//     .then(() => {
//       res.send({
//         message: 'Created new post successfully!',
//         data: post
//       })
//     })
// });

// module.exports = router;