const Next = require('next');

const dev = process.env.NODE_ENV !== 'production';
console.log(dev);
const uiApp = Next({ dev });

module.exports = { uiApp };
