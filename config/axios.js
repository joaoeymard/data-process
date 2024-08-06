const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.BASEURL, // Adjust to your base URL
  timeout: 1000 * 60 * 5, // 5 minutes timeout
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

module.exports = instance;
