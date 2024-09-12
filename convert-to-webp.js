const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const path = require('path');

(async () => {
  const files = await imagemin(['src/assets/*.{jpg,png}'], {
    destination: 'src/assets',
    plugins: [imageminWebp({ quality: 50 })],
  });

  console.log('Images converted to WebP:', files);
})();
