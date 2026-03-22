// OpenWeatherMap API wrapper functions

const axios = require('axios');

const API_KEY = 'your_api_key_here'; // Replace with your actual API key

// Function to get current weather by city name
async function getCurrentWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching current weather:', error);
        throw error;
    }
}

// Function to get weather forecast by city name
async function getWeatherForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather forecast:', error);
        throw error;
    }
}

module.exports = {
    getCurrentWeather,
    getWeatherForecast,
};