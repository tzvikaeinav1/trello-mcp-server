require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: ['https://claude.ai', 'https://app.claude.ai'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

const TRELLO_API_BASE = 'https://api.trello.com/1';
const API_KEY = process.env.TRELLO_API_KEY;
const API_TOKEN = process.env.TRELLO_API_TOKEN;

const mcpConfig = {
  schema_version: "v1",
  server_name: "Trello MCP Server",
  server_version: "1.0.0",
  tools: []
};

app.get('/', (req, res) => {
  res.json(mcpConfig);
});

app.listen(PORT, () => {
  console.log(`✅ MCP Server running on http://localhost:${PORT}`);
});
