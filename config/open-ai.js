const OpenAIApi = require('openai')
const readlinesSync = require('readline-sync')
const dotenv = require('dotenv')
dotenv.config()

const openai = new OpenAIApi({
  apiKey:process.env.OPENAI_SECRET_KEY
})

module.exports = openai
