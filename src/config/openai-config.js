const dotenv = require('dotenv');
dotenv.config();

module.exports = {
     APIKEY: process.env.OPENAI_API_KEY,
     TEMPERATURE:process.env.OPENAI_TEMPERATURE,
     TOKENS:process.env.OPENAI_MAX_TOKENS,
     OPENAIMODEL:process.env.OPENAI_MODEL,
}