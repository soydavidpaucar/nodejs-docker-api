const express = require("express");
const { getAllPosts, createPost, getPostById, updatePost, deletePost } = require("../controllers/post.controller");

const router = express.Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getPostById).patch(updatePost).delete(deletePost);

module.exports = router;
