const {OpenAiConfig } = require("../config");
const { OpenAI } = require('openai');

const openai = new OpenAI({apiKey: OpenAiConfig.APIKEY});

async function createClassifyText(text) {
    const prompt = `
Classify the following text into ONE category only:
- Complaint
- Query
- Feedback
- Other

Text: "${text}"

Respond with only the category name.
`;
 
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0,
      max_tokens: 100,
    });
  return completion;
}

module.exports = {createClassifyText};