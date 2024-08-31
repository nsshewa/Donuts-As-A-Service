const axios = require('axios');

/**
 * Fetch a random donut image URL from Pixabay.
 * @param {string} apiKey - Your Pixabay API key.
 * @returns {Promise<string>} A promise that resolves to the image URL.
 */
async function getDonutUrl(apiKey) {
  if (!apiKey) {
    throw new Error('Pixabay API key is required');
  }

  try {
    const response = await axios.get(`https://pixabay.com/api/?key=${apiKey}&q=donut&image_type=photo&per_page=50`);
    if (response.data.hits && response.data.hits.length > 0) {
      const images = response.data.hits;
      const randomImage = images[Math.floor(Math.random() * images.length)];
      return randomImage.webformatURL;
    } else {
      throw new Error('No donut images found.');
    }
  } catch (error) {
    console.error('Error fetching donut image URL from Pixabay:', error);
    throw error;
  }
}

/**
 * Insert a random donut image into an HTML element.
 * @param {string} elementId - The ID of the HTML element where the image will be inserted.
 * @param {string} apiKey - Your Pixabay API key.
 */
async function insertDonutImage(elementId, apiKey) {
  try {
    const donutUrl = await getDonutUrl(apiKey);
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