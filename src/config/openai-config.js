const dotenv = require('dotenv');
dotenv.config();

module.exports = {
     APIKEY: process.env.OPENAI_API_KEY,
}