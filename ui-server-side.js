const Next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const uiApp = Next({ dev });

module.exports = { uiApp };
