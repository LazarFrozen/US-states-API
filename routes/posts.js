const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// GET BACK ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A POST
router.post("/", async (req, res) => {
  const post = new Post({
    country: req.body.country,
    abbreviation: req.body.abbreviation,
    capital: req.body.capital,
    population: req.body.population,
    admission: req.body.admission,
    flag: req.body.flag,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// SPECIFIC POST
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete Post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { country: req.body.country } },
      { $set: { abbreviation: req.body.abbreviation } },
      { $set: { capital: req.body.capital } },
      { $set: { population: req.body.population } },
      { $set: { admission: req.body.admission } },
      { $set: { flag: req.body.flag } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
