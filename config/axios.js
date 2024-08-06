const axios = require("axios");

module.exports = axios.create({
  baseURL: process.env.BASEURL, // Adjust to your base URL
  timeout: 1000 * 60 * 5, // 5 minutes timeout
  headers: {
    "Content-Type": "application/json",
  },
});
