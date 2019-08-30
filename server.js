const express = require("express");
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
// const morgan = require("morgan")

// db connection
require("./mongo")

// model
require("./model/Post")

// Middleware
app.use(bodyParser.json())
	// .use(morgan)

const Post = mongoose.model("Post")

app.get("/", async (req, res) => {
	try {
		res.send({
			"message" : "its okay"
		})
	} catch(error) {
		res.status(500)
	}
})

// get post list
app.get("/posts", async (req, res) => {
	try {
		const posts = await Post.find({})
		res.send(posts)
	} catch(error) {
		res.status(500)
	}
})

// insert post
app.post("/posts", async (req, res) => {
	try {
		console.log(req.body)
		const post = new Post()
		post.title = req.body.title
		post.content = req.body.content
		await post.save()
		res.send(post)
	} catch(error) {
		console.log("error")
		console.log(error)
		res.status(500)
	}
})

// fetch post
app.get("/posts/:postId", async (req,res) => {
	try {
		const post = await Post.find({_id: req.params.postId})
		res.send(post)
	} catch(error) {
		res.status(500)
	}
}) 

app.listen(3000,() => {
	console.log("server is running on port 3000")
})