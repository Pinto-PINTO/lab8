// twitterModel.js
const { TwitterApi } = require("twitter-api-v2");

class TwitterModel {
  constructor() {
    this.client = new TwitterApi({
      appKey: "SUzCnbjwWtk2dnkzyWugsszwu",
      appSecret: "IY2g4rt0fVH82CRzZWmwm2IQMrSUquCKrcIZCgrk7yvFgVrGUX",
      accessToken: "1770974586009419776-ueY1yFh7FlikVkUlSM7RX4AgKi9Fm8",
      accessSecret: "9hfYcENfd95VA54g1NXTIfsNrXeVqglaGhF8hgg9ZP02E",
      bearerToken: "AAAAAAAAAAAAAAAAAAAAAD6%2BswEAAAAAmltPokoMfCA1PtuS3YBfy0wLzwQ%3DUIdmrQUcL06yLTNYT1IYAo32YqbL5St8oXAUTqzVLZbReNct7s",
    });

    this.rwClient = this.client.readWrite;
  }

  async tweet(text) {
    try {
      // Check if the tweet already exists
      const existingTweets = await this.rwClient.v2.searchTweets(text);
      if (existingTweets && existingTweets.data && existingTweets.data.length > 0) {
        console.log("Tweet already exists:", text);
        return; // Exit function if tweet already exists
      }

      // If tweet doesn't exist, create it
      await this.rwClient.v2.tweet(text);
      console.log("Tweet created successfully");
    } catch (error) {
      console.error("Error creating tweet:", error);
      throw error;
    }
  }
}

module.exports = TwitterModel;
