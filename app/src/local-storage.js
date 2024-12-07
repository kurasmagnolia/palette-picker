import startingPalettes from "./starting-palettes.json";
console.log(startingPalettes);

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
  setLocalStorageKey("palettes", newPalettes);

export const getPalettes = () => {
  const storedPalettes = getLocalStorageKey("palettes");
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
console.log(initializePalettes);

export const addPalette = (newPalette) => {
  const storedPalettes = getPalettes();

  storedPalettes[newPalette.uuid] = newPalette;

  setPalettes(storedPalettes);

  return newPalette;
};

export const deletePaletteByID = (paletteToRemove) => {
  const palettes = getPalettes();
  const filteredPalettes = palettes.filter(
    (palette) => palette !== paletteToRemove
  );
  setLocalStorageKey("palettes", filteredPalettes);
};
