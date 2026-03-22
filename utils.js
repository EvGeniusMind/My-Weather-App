// Utility functions for temperature conversion and formatting

/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius - The temperature in Celsius.
 * @return {number} The temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit - The temperature in Fahrenheit.
 * @return {number} The temperature in Celsius.
 */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

/**
 * Formats the temperature for display, ensuring it's a number followed by the unit.
 * @param {number} temperature - The temperature value.
 * @param {string} unit - The unit of measurement ("C" for Celsius, "F" for Fahrenheit).
 * @return {string} Formatted temperature string.
 */
function formatTemperature(temperature, unit) {
    return `${temperature.toFixed(2)} °${unit}`;
}

// Exporting functions for use in other modules
module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    formatTemperature
};