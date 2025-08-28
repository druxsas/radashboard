# Public Images Directory

This directory contains image assets that can be accessed directly via URL paths.

## Structure
- Place image files that need to be publicly accessible here
- These images can be referenced using `/images/filename.ext` in the code

## Usage
Images in this directory can be referenced directly:
```javascript
const imageSrc = "/images/image-file.png";
```

## Note
For React component imports, use the `src/assets/images/` directory instead.
This directory is for images that need to be publicly accessible via URL paths.
