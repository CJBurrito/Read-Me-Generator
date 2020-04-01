const axios = require("axios");
require("dotenv").config();

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;
    axios.get(queryUrl).catch(err => {
      console.log("Please enter a valid username.");
      process.exit(1);
    });
  }
};

module.exports = api;
