export const showPalettes = (palettes) => {
  Object.values(palettes).forEach(addPaletteToList);
};

export const addPaletteToList = (palette) => {
  const li = document.createElement("li");
  const palettesContainer = document.querySelector("ul#palette-list");
  palettesContainer.append(li);

  li.textContent = palette.title;
  li.dataset.uuid = palette.uuid;
};

export const renderPalette = () => {
  // grab the ul inside of our index.html
  const palleteList = document.querySelector("ul");
};
