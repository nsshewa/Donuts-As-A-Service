// src/index.js
const axios = require('axios');

/**
 * Fetch a random donut image URL from Unsplash.
 * @returns {Promise<string>} A promise that resolves to the image URL.
 */
async function getDonutUrl() {
  try {
    const response = await axios.get('https://source.unsplash.com/featured/?donut');
    return response.request.res.responseUrl;
  } catch (error) {
    throw new Error('Error fetching donut image URL');
  }
}

/**
 * Insert a random donut image into an HTML element.
 * @param {string} elementId - The ID of the HTML element where the image will be inserted.
 */
async function insertDonutImage(elementId) {
  try {
    const donutUrl = await getDonutUrl();
    const imgElement = document.getElementById(elementId);
    if (imgElement) {
      imgElement.src = donutUrl;
    } else {
      console.error(`Element with ID "${elementId}" not found.`);
    }
  } catch (error) {
    console.error('Error inserting donut image:', error);
  }
}

module.exports = {
  getDonutUrl,
  insertDonutImage,
};