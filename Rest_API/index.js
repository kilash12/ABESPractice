// const express = require("express");
// const app = express();
// const path = require("path");
// app.use(express.urlencoded({extended:true}));
// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));
// //app.set(express.static(path.join(__dirname,"public")));
// app.use(express.static(path.join(__dirname,"public")));

// // let posts = [
// //     {
// //         username:"kailsh",
// //         content:"i love coding"
// //     },
// //     {
// //         username:"kapil",
// //         content:"you will pay rent"
// //     },
// //     {
// //         username:"heeresh",
// //         content:"calling me shedule for a train which are going aligarh to delhi"
// //     },
// // ];
// let posts = [
//     {
//         id:1,
//         username:"kailsh",
//         content:"i love coding"
//     },
//     {
//         id:2,
//         username:"kapil",
//         content:"you will pay rent"
//     },
//     {
//         id:3,
//         username:"heeresh",
//         content:"calling me shedule for a train which are going aligarh to delhi"
//     },
// ];
// app.get("/posts/new",(req,res)=>{
//     res.render("new.ejs");

// });
// // app.post("/posts",(req , res)=>{
// //     console.log(req.body);
// //     res.send("post request working");

// // });
// // app.post("/posts",(req , res)=>{
// //     let {username , content} = req.body;
// //     posts.push({username , content});
// //     res.send("post request working");


// // });
// app.post("/posts",(req , res)=>{
//     let {username , content} = req.body;
//     posts.push({username , content});
//     res.redirect("/posts");
    

// });
// // app.get("/posts/:id", (req, res) => {
// //     let { id } = req.params;
// //     console.log(id);
// //     res.send("Request working");
// // });
// // app.get("/posts/:id", (req, res) => {
// //     let { id } = req.params;
// //     let post = posts.find((p)=>id ===p.id);
// //     console.log(post);
// //     res.send("Request working");
// // });

// app.get("/posts/:id",(req,res)=>{
//     let { id } = req.params;
    
//     let post =posts.find((p)=>id===p.id);
//     res.render("show.ejs", {post});
// })

// app.get("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((p) => id === p.id);
//     console.log(post);
//     if (post) {
//         res.send(post);
//     } else {
//         res.status(404).send("Post not found");
//     }
// });


// // app.get("/posts",(req , res )=>{
// //   res.send("server working well");
// // });
// app.get("/posts",(req , res )=>{
//     res.render("index.ejs",{posts});
//   });
// app.listen(3000,()=>{
//     console.log("listing to port : 3000");
// });
// // const express = require("express");
// // const app = express();
// // const path = require("path");

// // app.use(express.urlencoded({ extended: true }));
// // app.set("view engine", "ejs");
// // app.set("views", path.join(__dirname, "views"));
// // app.use(express.static(path.join(__dirname, "public")));

// // let posts = [
// //     {
// //         username: "kailash",
// //         content: "I love coding"
// //     },
// //     {
// //         username: "kapil",
// //         content: "You will pay rent"
// //     },
// //     {
// //         username: "heeresh",
// //         content: "Calling me schedule for a train which is going from Aligarh to Delhi"
// //     },
// // ];

// // // Show the form
// // app.get("/posts/new", (req, res) => {
// //     res.render("new.ejs");
// // });

// // // Handle form submission and add new post
// // app.post("/posts", (req, res) => {
// //     const { username, content } = req.body;
// //     posts.push({ username, content });
// //     res.redirect("/posts");
// // });

// // // Display all posts
// // app.get("/posts", (req, res) => {
// //     res.render("index.ejs", { posts });
// // });

// // app.listen(3000, () => {
// //     console.log("Listening on port: 3000");
// // });








// const express = require("express");
// const app = express();
// const path = require("path");


// import { v4 as uuidv4 } from 'uuid';
// //uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));

// let posts = [
//     {
//         id: uuidv4(),
//         username: "kailash",
//         content: "I love coding"
//     },
//     {
//         id: uuidv4(),
//         username: "kapil",
//         content: "You will pay rent"
//     },
//     {
//         id: uuidv4(),
//         username: "heeresh",
//         content: "Calling me schedule for a train which is going from Aligarh to Delhi"
//     },
// ];

// // Show form to create new post
// app.get("/posts/new", (req, res) => {
//     res.render("new.ejs");
// });

// // Handle form submission and add new post
// app.post("/posts", (req, res) => {
//     let { username, content } = req.body;
//     let newId = posts.length + 1;
//     posts.push({ id: newId, username, content });
//     res.redirect("/posts");
// });

// // Display all posts
// app.get("/posts", (req, res) => {
//     res.render("index.ejs", { posts });
// });

// // Display a specific post
// app.get("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     id = parseInt(id); // Convert id to number
//     let post = posts.find((p) => p.id === id);
//     if (post) {
//         res.render("show.ejs", { post });
//     } else {
//         res.status(404).send("Post not found");
//     }
// });

// app.listen(3000, () => {
//     console.log("Listening on port 3000");
// });






// const express = require("express");
// const app = express();
// const path = require("path");
// const { v4: uuidv4 } = require('uuid');

// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(path.join(__dirname, "public")));

// let posts = [
//     {
//         id: uuidv4(),
//         username: "kailash",
//         content: "I love coding"
//     },
//     {
//         id: uuidv4(),
//         username: "kapil",
//         content: "You will pay rent"
//     },
//     {
//         id: uuidv4(),
//         username: "heeresh",
//         content: "Calling me schedule for a train which is going from Aligarh to Delhi"
//     },
// ];

// // Show form to create new post
// app.get("/posts/new", (req, res) => {
//     res.render("new.ejs");
// });

// // Handle form submission and add new post
// app.post("/posts", (req, res) => {
//     let { username, content } = req.body;
//     let newId = uuidv4();
//     posts.push({ id: newId, username, content });
//     res.redirect("/posts");
// });

// // Display all posts
// app.get("/posts", (req, res) => {
//     res.render("index.ejs", { posts });
// });

// // Display a specific post
// app.get("/posts/:id", (req, res) => {
//     let { id } = req.params;
//     let post = posts.find((p) => p.id === id);
//     if (post) {
//         res.render("show.ejs", { post });
//     } else {
//         res.status(404).send("Post not found");
//     }
// });
// // app.patch("/posts/:id",(req,res)=>{
// //     let { id } = req.params;
// //     let newContent = req.body.content;
    
// //     console.log(newContent);
// //     res.send("patch request working");
// // });

// app.patch("/posts/:id",(req,res)=>{
//     let { id } = req.params;
//     let newContent = req.body.content;
//     let post = posts.find((p) => p.id === id);
//     post.content = newContent; 
//     console.log(post);
//     res.send("patch request working");
// });

// app.listen(3000, () => {
//     console.log("Listening on port 3000");
// });







const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // Enables PATCH and DELETE from forms
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "kailash",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "kapil",
        content: "You will pay rent"
    },
    {
        id: uuidv4(),
        username: "heeresh",
        content: "Calling me schedule for a train which is going from Aligarh to Delhi"
    },
];

// Show form to create new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// Handle form submission and add new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let newId = uuidv4();
    posts.push({ id: newId, username, content });
    res.redirect("/posts");
});

// Display all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// Display a specific post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (post) {
        res.render("show.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

// Show edit form for a specific post
app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => p.id === id);
    if (post) {
        res.render("edit.ejs", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

// Handle PATCH request to update a post
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => p.id === id);
    if (post) {
        post.content = newContent;
        res.redirect("/posts");
    } else {
        res.status(404).send("Post not found");
    }
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});




