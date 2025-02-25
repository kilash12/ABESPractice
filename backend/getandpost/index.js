const express = require("express");
const path = require("path");
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Create a route
app.get("/", (req, res) => {
    res.send("Hello, World get!");
});
app.post("/", (req, res) => {
    res.send("Hello, World post !");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
