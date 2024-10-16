const { OpenAI } = require("openai");

const baseURL = "https://api.aimlapi.com/v1";
const apiKey = "b6f7221b9ad942b0b0ea2f4fcfb25c9b";

const openai = new OpenAI({
  apiKey,
  baseURL,
});

module.exports = openai;