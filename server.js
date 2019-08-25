const express = require("express");
const app = express()
const mongoose = require("mongoose")

// db connection
require("./mongo")

// model
require("./model/Post")

const Post = mongoose.model("Post")

app.get("/posts", async (req, res) => {
	try {
		const posts = await Post.find({})
		res.send(posts)
	} catch(error) {
		res.status(500)
	}
})

app.listen(3000,() => {
	console.log("server is running on port 3000")
})