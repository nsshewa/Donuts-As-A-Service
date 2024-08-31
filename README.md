Here’s a revamped and comprehensive README for your GitHub repository, with an emphasis on getting a Pixabay API key right at the beginning:

---

# 🍩 Donut Image Fetcher

**Donut Image Fetcher** is a lightweight Node.js library that allows developers to effortlessly fetch and display random donut images from Pixabay. Whether you're building a fun web app, need placeholder images, or just love donuts, this library provides an easy way to integrate delicious-looking donut images into your projects.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Obtain a Pixabay API Key](#obtain-a-pixabay-api-key)
  - [Installation](#installation)
- [Usage](#usage)
  - [Automatically Insert a Random Donut Image](#automatically-insert-a-random-donut-image)
  - [Fetch a Donut Image URL Directly](#fetch-a-donut-image-url-directly)
- [API Reference](#api-reference)
  - [`getDonutUrl(apiKey)`](#getdonuturlapikey)
  - [`insertDonutImage(elementId, apiKey)`](#insertdonutimageelementid-apikey)
- [Examples](#examples)
  - [Example 1: Simple HTML Integration](#example-1-simple-html-integration)
  - [Example 2: Using with Express.js](#example-2-using-with-expressjs)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Features

- **Simple Integration**: Easily fetch and insert donut images into your web application.
- **Two Main Methods**: Choose between automatically inserting the image into an HTML element or manually fetching the image URL.
- **Lightweight**: Minimal dependencies ensure that the library is lightweight and fast.
- **Powered by Pixabay**: Uses Pixabay's free image API to provide a vast collection of high-quality donut images.

## Getting Started

### Obtain a Pixabay API Key

To use Donut Image Fetcher, you must first obtain an API key from Pixabay. This key allows you to access their free image database.

1. **Sign Up**: Visit [Pixabay](https://pixabay.com/api/docs/) and sign up for a free account if you don't already have one.
2. **Get Your API Key**: After signing up, you'll be provided with an API key. Make sure to keep this key safe, as you'll need it to use the Donut Image Fetcher library.

### Installation

Install the `donut-image-fetcher` library via npm:

```bash
npm install donut-image-fetcher
```

## Usage

### Automatically Insert a Random Donut Image

The `insertDonutImage()` function allows you to automatically insert a random donut image into an HTML element by specifying the element's ID.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Page</title>
  <script type="module">
    import { insertDonutImage } from 'donut-image-fetcher';

    window.onload = function() {
      insertDonutImage('donut-image', 'YOUR_PIXABAY_API_KEY'); // Replace with your Pixabay API key
    };
  </script>
</head>
<body>
  <h1>Our Delicious Product</h1>
  <img id="donut-image" alt="Delicious Donut">
</body>
</html>
```

### Fetch a Donut Image URL Directly

If you prefer to handle the image URL yourself, use `getDonutUrl()`:

```javascript
import { getDonutUrl } from 'donut-image-fetcher';

getDonutUrl('YOUR_PIXABAY_API_KEY').then(url => {
  console.log('Random Donut Image URL:', url);
  // Use the URL in your application
});
```

## API Reference

### `getDonutUrl(apiKey)`

Fetches a random donut image URL from Pixabay.

#### Parameters:
- **apiKey** (string): Your Pixabay API key.

#### Returns:
- **Promise<string>**: A promise that resolves to the image URL.

#### Example:

```javascript
import { getDonutUrl } from 'donut-image-fetcher';

getDonutUrl('YOUR_PIXABAY_API_KEY').then(url => {
  console.log('Random Donut Image URL:', url);
});
```

### `insertDonutImage(elementId, apiKey)`

Inserts a random donut image into an HTML element by its ID.

#### Parameters:
- **elementId** (string): The ID of the HTML element where the image will be inserted.
- **apiKey** (string): Your Pixabay API key.

#### Returns:
- **Promise<void>**

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Page</title>
  <script type="module">
    import { insertDonutImage } from 'donut-image-fetcher';

    window.onload = function() {
      insertDonutImage('donut-image', 'YOUR_PIXABAY_API_KEY'); // Replace with your Pixabay API key
    };
  </script>
</head>
<body>
  <h1>Our Delicious Product</h1>
  <img id="donut-image" alt="Delicious Donut">
</body>
</html>
```

## Examples

### Example 1: Simple HTML Integration

Use `donut-image-fetcher` in a simple HTML file to automatically insert a random donut image.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Donut Image</title>
  <script type="module">
    import { insertDonutImage } from 'donut-image-fetcher';

    window.onload = function() {
      insertDonutImage('donut', 'YOUR_PIXABAY_API_KEY'); // Replace with your API key
    };
  </script>
</head>
<body>
  <h1>Enjoy Your Donut!</h1>
  <img id="donut" alt="Donut Image">
</body>
</html>
```

### Example 2: Using with Express.js

Integrate `donut-image-fetcher` into an Express.js application to serve a page with a random donut image.

```javascript
const express = require('express');
const { getDonutUrl } = require('donut-image-fetcher');
const app = express();

app.set('view engine', 'ejs');

app.get('/donut', async (req, res) => {
  const donutUrl = await getDonutUrl('YOUR_PIXABAY_API_KEY'); // Replace with your API key
  res.render('donut', { donutUrl });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

**EJS Template (`donut.ejs`):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Donut Image</title>
</head>
<body>
  <h1>Here's Your Random Donut!</h1>
  <img src="<%= donutUrl %>" alt="Random Donut Image">
</body>
</html>
```

## Error Handling

The library provides basic error handling. If an image cannot be fetched or an element cannot be found, errors will be logged to the console.

### Example:

```javascript
import { insertDonutImage } from 'donut-image-fetcher';

insertDonutImage('non-existent-element', 'YOUR_PIXABAY_API_KEY')
  .catch((error) => {
    console.error('Failed to insert donut image:', error);
  });
```

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request on GitHub.

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## Support

If you have any questions or need support, feel free to open an issue on the [GitHub repository](https://github.com/nsshewa/Donuts-As-A-Service).

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


