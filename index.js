// app.js
const express = require("express");
const TwitterController = require("./Controller/twitterController");

const app = express();
const PORT = 3000;

const twitterController = new TwitterController();

// Handle the route for creating a tweet
app.get("/tweet", async (req, res) => {
  try {
    const tweetResult = await twitterController.createTweet("Second tweet is created");
    res.send(tweetResult);
  } catch (error) {
    console.error("Error creating tweet:", error); // Log the error
    res.status(500).send("Error creating tweet");
  }
});

// Start your server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
