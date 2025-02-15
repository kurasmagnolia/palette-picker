/** @format */

import startingPalettes from './starting-palettes.json';

// 1. setLocalStorageKey - a wrapper that automatically stringifies the value and sets it to the key
const setLocalStorageKey = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

// 2.
const getLocalStorageKey = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const setPalettes = (newPalettes) =>
  setLocalStorageKey('palettes', newPalettes);

export const getPalettes = () => {
  const storedPalettes = getLocalStorageKey('palettes');
  if (!storedPalettes) {
    return {};
  }
  return storedPalettes;
};

export const initializePalettesIfEmpty = () => {
  const storedPalettes = getPalettes();
  if (!storedPalettes || Object.keys(storedPalettes).length === 0) {
    setPalettes(startingPalettes);
  }
};

export const addPalette = (newPalette) => {
  const palettes = getPalettes();
  palettes[newPalette.uuid] = newPalette;
  setPalettes(palettes);
};

export const deletePaletteByID = (id) => {
  // access the palettes, deletes the palette we want to, and sets the palettes back in localStorage
  const palettes = getPalettes();
  delete palettes[id];
  setPalettes(palettes);

  // removes palette dynamically using DOM manipulation
  const palette = document.getElementById(id);
  palette.remove();
};
