// const express = require("express");
// const app = express();
// const port = 3000;
// app.listen(port, () => {
//     console.log(`listening on port ${port}`);
// });

// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 3000;

// // Setting EJS as the template engine
// app.set("view engine", "ejs");
// app.set("views",path.join(__dirname,"/view"));

// // Route for the homepage
// app.get("/", (req, res) => {
//     res.render("home");
// });
// app.get("/", (req, res) => {
//     res.render("home");
// });
// app.get("/roodic", (req, res) => {
//     res.render("hello");
// });
// app.get("/roodic", (req, res) => {
//     res.render("rooldic.ejs");
// });

// // Starting the server
// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });
// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 3000;

// // Setting EJS as the template engine
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "view"));

// // Route for the homepage
// app.get("/", (req, res) => {
//     res.render("home");
// });

// // Route for /roodic
// app.get("/roodic", (req, res) => {
//     res.render("rooldic");
// });

// // Starting the server
// app.listen(port, () => {
//     console.log(`Listening on port ${port}`);
// });
// const express = require("express");
// const app = express();
// const path = require("path");
// const  port = 3000;
// app.set("view engine ","ejs");
// app.set("views",path.join(__dirname,"/view"));
// app.get("/ig/:username",(req , res )=>{
//     let {username} = req.params;
//     res.render("inrtagram.ejs",{username});
// })
// app.listen(port,()=>{
//     console.log
// })
const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// Setting up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

// Route to display Instagram-like profile
app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
    res.render("instagram", { username });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
