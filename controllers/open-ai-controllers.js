const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createImage({
      prompt: prompt,
    });
    const image_result = response.data.data;
    res.status(200).json({
      success: true,
      data: image_result,
    });
  } catch (err) {
    console.error(err);
  }
};

module.exports = generateImage;
