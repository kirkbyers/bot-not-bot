import * as Next from 'next';

// TODO: figure out prod mode when not using next default server
const dev = process.env.NODE_ENV !== 'production';
const uiApp = Next({ dir: './dist', dev });

export { uiApp };
