const express = require("express");
const app = express()

require("./mongo")

app.get("/posts", (req, res) => {
	res.send({
		name: "Avinash"
	})
})

app.get("/posts/fetch", (req, res) => {
	res.send({
		name: "post fetch"
	})
})

app.listen(3000,() => {
	console.log("server is running on port 3000")
})