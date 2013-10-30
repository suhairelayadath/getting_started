var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hello express");
});

app.listen(3000);
console.log("Have fun at port 3000");