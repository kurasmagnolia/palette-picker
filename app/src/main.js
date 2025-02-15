/** @format */

import './style.css';
import { getPalettes, initializePalettesIfEmpty } from './local-storage.js';
import { renderPalette, handleFormSubmit } from './dom-helpers.js';

const main = () => {
  // attach the form event handler to listen for the submit event
  document.querySelector('form').addEventListener('submit', handleFormSubmit);

  // the very first time the user loads this, add palattes to localStorage
  initializePalettesIfEmpty();
  const palettes = getPalettes();

  // render the exisiting palettes
  for (const palette in palettes) {
    const { uuid: id, title, colors, temperature } = palettes[palette];
    renderPalette(id, title, colors, temperature);
  }
};

main();
