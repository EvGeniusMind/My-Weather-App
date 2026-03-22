const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

app.use(express.json());

app.get('/weather', async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).send('City is required.');

    try {
        const response = await axios.get(WEATHER_API_URL, {
            params: {
                q: city,
                appid: WEATHER_API_KEY,
                units: 'metric',
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error retrieving weather data.');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
