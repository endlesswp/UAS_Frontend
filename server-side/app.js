require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const API_KEY = process.env.NEWS_API_KEY || "7bac1df556254ed78b5547177b2bdeef";
const BASE_URL = "https://newsapi.org/v2";

// Get top headlines
app.get("/api/top-headlines", async (req, res) => {
  try {
    const { country = "us", category, pageSize = 10 } = req.query;
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        category,
        pageSize,
        apiKey: API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching top headlines:", error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || "Internal server error",
    });
  }
});

app.get("/api/news/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const { country = "us", pageSize = 10 } = req.query;

    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        category,
        pageSize,
        apiKey: API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || "Internal server error",
    });
  }
});

// Search news
app.get("/api/search", async (req, res) => {
  try {
    const { q, pageSize = 10 } = req.query;
    console.log("qr",JSON.stringify(q),"\t\r\n");
    if (!q) {
      return res.status(400).json({ error: "Search query is required" });
    }

    const response = await axios.get(`${BASE_URL}/everything`, {
      params: {
        q,
        pageSize,
        apiKey: API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error searching news:", error.message);
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || "Internal server error",
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(port, () => {
  console.log(`News API server running on port ${port}`);
});
