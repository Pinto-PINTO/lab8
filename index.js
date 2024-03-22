const express = require('express');
const app = express();
const twitterController = require('./Controller/twitterController');

app.get("/tweet", async (req, res) => {
  try {
    const tweetText = "Tweet content"; 
    const tweetResult = await twitterController.createTweet(tweetText);
    res.send(tweetResult);
  } catch (error) {
    if (error.response && error.response.status === 403 && error.response.data.detail === 'You are not allowed to create a Tweet with duplicate content.') {
      console.error("Duplicate tweet content. Please provide a new tweet.");
      res.status(400).send("Duplicate tweet content. Please provide a new tweet.");
    } else {
      console.error("Error creating tweet:", error);
      res.status(500).send("Error creating tweet");
    }
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
