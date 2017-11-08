const Next = require('next');

// TODO: figure out prod mode when not using next default server
// const dev = process.env.NODE_ENV !== 'production';
const uiApp = Next({ dev: true });

module.exports = { uiApp };
