const express = require("express");
const cors = require('cors')
const api = require("./api");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public'))

app.use("/", api);

app.use("*", (req, res) => {
	res.status(404).json({
		error: "Requested resource " + req.originalUrl + " does not exist",
	});
});

app.listen(port, () => {
	console.log("== Server is running on port", port);
});