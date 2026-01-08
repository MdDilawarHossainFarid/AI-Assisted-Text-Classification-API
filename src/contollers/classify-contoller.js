const { StatusCodes } = require("http-status-codes");

const { ClassifyService } = require("../services");

async function createClassify(req, res) {
  try {
    const classify = await ClassifyService.createClassifyText({
      text: req.body.text,
    });
    return res.status(StatusCodes.CREATED).json({
  success: true,
  message: "Text classified successfully",
  data: {
    category: classify.choices[0].message.content,
    confidence: null,
  }
});
  } catch (error) {
     console.error('OpenAI Error:', error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createClassify
};