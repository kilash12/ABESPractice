const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// Data storage (in-memory for simplicity)
let followersCount = 100; // Starting count for followers
let followingCount = 50;  // Starting count for following

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'view'));

app.use(express.urlencoded({ extended: true }));

// Route to display the profile
app.get("/ig/:username", (req, res) => {
    const { username } = req.params;
    res.render("instagramfoloowS", { 
        username, 
        followersCount, 
        followingCount 
    });
});

// Route to handle follow button click
app.post("/ig/:username/follow", (req, res) => {
    followersCount++;
    res.redirect(`/ig/${req.params.username}`);
});

// Route to handle unfollow button click
app.post("/ig/:username/unfollow", (req, res) => {
    if (followersCount > 0) {
        followersCount--;
    }
    res.redirect(`/ig/${req.params.username}`);
});

// Route to handle following button click
app.post("/ig/:username/following", (req, res) => {
    followingCount++;
    res.redirect(`/ig/${req.params.username}`);
});

// Route to handle unfollowing button click
app.post("/ig/:username/unfollowing", (req, res) => {
    if (followingCount > 0) {
        followingCount--;
    }
    res.redirect(`/ig/${req.params.username}`);
});

// Start the server
app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
  
