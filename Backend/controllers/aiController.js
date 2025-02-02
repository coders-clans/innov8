const axios = require('axios');
require('dotenv').config();
const api=process.env.Api;
// Function to handle the goal path request
const getGoalPath = async (req, res) => {
    const { goal, totalDays, freeHoursPerDay } = req.body;

    const question = `Generate a valid JSON array where each element represents a day of my plan to achieve the goal: "${goal}" within ${totalDays} days, dedicating ${freeHoursPerDay} free hours per day. 
    Each element in the JSON array should have this structure:
    {
        "day": <day number>,
        "title": "<brief title for the day>",
        "description": "<tasks description>",
        "tasks": [
            {
                "task": "<task description>",
                "time": <estimated time in hours>
            }
        ]
    }
    Do not include any other text. Respond only with the JSON array. Ensure that the JSON is strictly valid and does not include any additional characters, such as backticks or code blocks.`;

    try {
        const response = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA58ho_64s0kqAvoBztIexzcvZFsGR9x0A",
            {
                "contents": [{ "parts": [{ "text": `${question}` }] }]
            }
        );
        // console.log("Candidates:", response.data.candidates[0].content.parts[0].text);

        // Extract the structured data
        const planData = response.data.candidates[0].content.parts[0].text;

        // Convert string to JSON if necessary
        let dailyPlan;
        try {
            dailyPlan = JSON.parse(planData);
        } catch (parseError) {
            return res.status(400).json({
                success: false,
                message: "Failed to parse the plan data. Please ensure the API returns a valid JSON format.",
                error: parseError.message,
            });
        }

        // Respond with the structured daily plan
        res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            dailyPlan, // Return the formatted daily plan
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "There was an issue analyzing your goal. Please try again later.",
            error: error.response ? error.response.data : error.message,
        });
    }
};


const getBotData = async (req, res) => {
    const { question } = req.body;
    const prompt = `${question} return the response in the proper string format of string, do not use any kind of backticksor slash or dash.`;
    try {
        // Make sure to use the appropriate structure for the request body as required by the API
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${api}`,
            {
                // Structure may vary depending on the API's requirements
                "contents": [{ "parts": [{ "text": prompt }] }]
            }
        );

        // Logging the entire response data for debugging
        const ans=response.data.candidates[0].content.parts[0].text;

        // Sending the response back to the client
        return res.status(200).json({
            success: true,
            message: "Response generated successfully",
            response: ans // Adjust this to send only the relevant part of the response
        });

    } catch (error) {
        // Error handling
        console.error("Error generating response:", error.message);
        return res.status(500).json({
            success: false,
            message: "Failed to generate response",
            error: error.message
        });
    }
}

module.exports = { getGoalPath ,getBotData};
