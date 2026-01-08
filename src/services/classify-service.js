const {OpenAiConfig } = require("../config");
const { OpenAI } = require('openai');

const openai = new OpenAI({apiKey: OpenAiConfig.APIKEY});

async function createClassifyText(text) {
    const systemPrompt =  `You are a classification assistant. Analyze the user's message and classify it.
        Respond ONLY with valid JSON in this exact format:
        {
          "category": "complaint" OR "query" OR "feedback" OR "Other",
          "confidence": 0.95,
          "text": "${JSON.stringify(text)}"
        }
        
        Classification guidelines:
        - Complaint: User is reporting a problem or expressing dissatisfaction
        - Query: User is asking a question or seeking information
        - Feedback: User is providing suggestions or opinions (not complaints)
        - Other: Doesn't fit the above categories
        
        Important: The "text" field should contain the EXACT original text provided.`;

    const completion = await openai.chat.completions.create({
      model: OpenAiConfig.OPENAI_MODEL,
      messages: [    {
      role: "system", 
      content: systemPrompt 
    },{ role: "user", content: text }],
      temperature: OpenAiConfig.TEMPERATURE,
      max_tokens: OpenAiConfig.TOKENS,
      response_format: { type: "json_object" }
    });
  return completion;
}

module.exports = {createClassifyText};