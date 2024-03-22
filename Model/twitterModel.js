// twitterModel.js
const { TwitterApi } = require("twitter-api-v2");

class TwitterModel {
  constructor() {
    this.client = new TwitterApi({
      appKey: "O6FcMOpIOJcS7u9fA07NwahiB",
      appSecret: "gMOYx9NAWkaFI0DbkC5GNNfg6BxxqTg27uX91TFvLawgdpRHdM",
      accessToken: "1304198813356351491-3u0ZMcUzV4a3zUGbB64t3mZajvwtcv",
      accessSecret: "rgU4HM7mw87IuUHQyHcYiuroMm1GaCnUXJ2zsygMh75c5",
      bearerToken: "AAAAAAAAAAAAAAAAAAAAAKESswEAAAAAMVAGdOv2lsg078a6CIHFPrf%2Bjwg%3Dzqm9xPwGbgYwPZ1L5yagXZTjHERemY0I4ocGavXWYvZz7tLBBU",
    });

    this.rwClient = this.client.readWrite;
  }

  async tweet(text) {
    try {
      await this.rwClient.v2.tweet(
        text
      );
      console.log("Tweet created successfully");
    } catch (error) {
      console.error("Error creating tweet:", error);
      throw error;
    }
  }
}

module.exports = TwitterModel;
