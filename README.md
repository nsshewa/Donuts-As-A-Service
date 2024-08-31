# Donuts-As-A-Service
a lightweight Node.js library that allows developers to effortlessly fetch and display random donut images from Unsplash. Whether you're building a fun web app, need placeholder images, or just love donuts, this library provides an easy way to integrate delicious-looking donut images into your projects.


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Automatically Insert a Random Donut Image](#automatically-insert-a-random-donut-image)
  - [Directly Use the Image URL](#directly-use-the-image-url)
- [API Reference](#api-reference)
  - [getDonutUrl](#getdonuturl)
  - [insertDonutImage](#insertdonutimage)
- [Examples](#examples)
  - [Example 1: Simple HTML Integration](#example-1-simple-html-integration)
  - [Example 2: Using with Express.js](#example-2-using-with-expressjs)
- [Error Handling](#error-handling)
- [License](#license)
- [Contributing](#contributing)
- [Support](#support)

## Features

- **Simple Integration**: Easily fetch and insert donut images into your web application.
- **Two Methods**: Choose between automatically inserting the image into an HTML element or manually fetching the image URL.
- **Lightweight**: Minimal dependencies ensure that the library is lightweight and fast.
- **Free**: Uses Unsplash's free image API to provide a vast collection of high-quality donut images.

## Installation

You can install the `donut-image-fetcher` library via npm:

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
  <script>
    const { insertDonutImage } = require('donut-image-fetcher');

    // On page load, insert a random donut image into the element with ID "product-image"
    window.onload = function() {
      insertDonutImage('product-image');
    };
  </script>
</head>
<body>
  <h1>Our Delicious Product</h1>
  <img id="product-image" alt="Product Image">
</body>
</html>
```

### Directly Use the Image URL

The `getDonutUrl()` function fetches a random donut image URL, which you can then use in your HTML or JavaScript code.

#### Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Product Page</title>
  <script>
    const { getDonutUrl } = require('donut-image-fetcher');

    // On page load, fetch the donut URL and set it as the src of the img tag
    window.onload = async function() {
      const donutUrl = await getDonutUrl();
      document.getElementById('product-image').src = donutUrl;
    };
  </script>
</head>
<body>
  <h1>Our Delicious Product</h1>
  <img id="product-image" alt="Product Image">
</body>
</html>
```

## API Reference

### `getDonutUrl()`

Fetches a random donut image URL from Unsplash.

#### Returns:
- **Promise<string>**: A promise that resolves to the image URL.

#### Usage:

```javascript
const { getDonutUrl } = require('donut-image-fetcher');

getDonutUrl().then((url) => {
  console.log('Random Donut Image URL:', url);
});
```

### `insertDonutImage(elementId)`

Inserts a random donut image into an HTML element by its ID.

#### Parameters:
- **elementId** (string): The ID of the HTML element where the image will be inserted.

#### Returns:
- **Promise<void>**

#### Usage:

```javascript
const { insertDonutImage } = require('donut-image-fetcher');

insertDonutImage('product-image');
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
  <script>
    const { insertDonutImage } = require('donut-image-fetcher');

    window.onload = function() {
      insertDonutImage('donut');
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
  const donutUrl = await getDonutUrl();
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
const { insertDonutImage } = require('donut-image-fetcher');

insertDonutImage('non-existent-element')
  .catch((error) => {
    console.error('Failed to insert donut image:', error);
  });
```

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request on GitHub.

### How to Contribute

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## Support

If you have any questions or need support, feel free to open an issue on the [GitHub repository](https://github.com/nsshewa/donut-image-fetcher).
