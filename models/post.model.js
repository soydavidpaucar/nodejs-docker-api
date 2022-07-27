const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: [true, "title required"] },
  body: {
    type: String,
    required: [true, "body required"],
  },
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
