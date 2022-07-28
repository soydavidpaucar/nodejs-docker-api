const express = require("express");
const { getAllPosts, createPost, getPostById, updatePost, deletePost } = require("../controllers/post.controller");
const protect = require("../middlewares/auth.middleware");

const router = express.Router();

router.route("/").get(protect, getAllPosts).post(protect, createPost);
router.route("/:id").get(protect, getPostById).patch(protect, updatePost).delete(protect, deletePost);

module.exports = router;
