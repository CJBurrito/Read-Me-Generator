const axios = require("axios");
require("dotenv").config();
const fs = require("fs");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;
    axios.get(queryUrl)
    .then((res) => {
      let userInfo = "User Name: " + res.data.login + "\n" + "![user avatar](" +
        res.data.avatar_url + ".png)" + "\n" + "User Email: " + res.data.email;

      fs.appendFile("user-README.md", "\n" + userInfo + "\n", (err) => {
        if (err) throw err;
      });
    })
  }
};

module.exports = api;
