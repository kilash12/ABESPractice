// const express = require('express'); 

// const app = express();

// // Middleware to log requests
// app.use((req, res, next) => {
//     console.log("Request received");
//     next(); // Pass control to the next handler
// });

// // Default route
// app.get('/', (req, res) => {
//     res.send("<h1>Welcome to Kailash's Express Server!</h1>");
// });

// // Catch-all route for other requests
// app.use((req, res) => {
//     let code = `
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Fruits List</title>
//         </head>
//         <body>
//             <h1>Fruits List</h1>
//             <ol>
//                 <li>Apple</li>
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" width="200" alt="Apple" />
                
//                 <li>Banana</li>
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" width="200" alt="Banana" />

//                 <li>Lychee</li>
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Litchi_chinensis_fruits.JPG" width="200" alt="Lychee" />

//                 <li>Mango</li>
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg" width="200" alt="Mango" />

//                 <li>Guava</li>
//                 <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Guava_ID.jpg" width="200" alt="Guava" />
//             </ol>
//         </body>
//         </html>
//     `;

//     res.send(code);
// });

// // Start the server
// app.listen(3000, () => console.log('Server running on port 3000'));




// const express  = require("express");
// const app = express();
// const port = 3000;
// app.listen(port , ()=>{
//     console.log('app is listenimg on port ${port}');
        

// });
// app.get("/",(req , res)=>{
//     res.send("you are root path");
// })
// app.get("/appele",(req , res)=>{
//     res.send("hello are apple root path");
// })
// app.get("/ orange",(req , res)=>{
//     res.send("you are  orange root path");
// })
// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// });

// app.post("/", (req, res) => {
//     res.send("This is a POST method");
// });

const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("You are at the root path");
});

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    res.send("Hello, you are at a dynamic path");
});

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("No result");
});

app.get("*", (req, res) => {
    res.send("This path does not exist");
});

app.post("/", (req, res) => {
    res.send("This is a POST method");
});
