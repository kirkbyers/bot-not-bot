/* eslint-disable no-underscore-dangle */

import { create, SheetsRegistry } from 'jss';
import preset from 'jss-preset-default';
import { createMuiTheme } from 'material-ui/styles';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import orange from 'material-ui/colors/orange';

const theme = createMuiTheme({
  pallete: {
    accent: green,
    error: orange,
    primary: blue,
  },
});

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

function createContext() {
  return {
    jss,
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
  };
}

export default function getContext() {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!(process as any).browser) {
    return createContext();
  }

  // Reuse context on the client-side
  if (!(global as any).__INIT_MATERIAL_UI__) {
    (global as any).__INIT_MATERIAL_UI__ = createContext();
  }

  return (global as any).__INIT_MATERIAL_UI__;
}
