const express = require("express");
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(5100, {
	cors: {
		origin: "http://localhost:8080",
		methods: ["GET", "POST"],
		allowedHeaders: ["*"],
		credentials: true
	}
});

http.listen(5000, async () => {
	console.log("Server running at port 5000.")
}); 