import "./style.css";
import {
  getPalettes,
  initializePalettesIfEmpty,
  addPalette,
  deletePaletteByID,
} from "./local-storage.js";
import { showPalettes, addPaletteToList } from "./dom-helpers.js";

const renderPalettes = () => {
  // grab the url inside of our index.html
  const palleteList = document.querySelector("ul");

  // empty the ul
  palleteList.innerHTML = "";

  // get object of palettes from localStorage
  const palettes = getPalettes();
  console.log(palettes);
  // for each palette in the object, make it an li and append it to the ul
  for (const [key, value] of Object.entries(palettes)) {
    const li = document.createElement("li");

    const { uuid, title, colors, temperature } = value;

    li.innerHTML = `
    <div class="palette-box">
      <h2>${title}</h2>
      <div></div>
      <div class="palette-temp-color">
        <p>${temperature}</p>
      </div>
    `;
    palleteList.append(li);
  }
};

const handleFormSubmit = (e) => {
  // prevent the default action
  e.preventDefault();

  // grab the form data
  const newPaletteTitle = e.target.title.value;
  const newPaletteColorOne = e.target.color1.value;
  const newPaletteColorTwo = e.target.color2.value;
  const newPaletteColorThree = e.target.color3.value;
  const newPaletteTemp = e.target.temp.value;

  // create new palette
  const newPalette = {
    uuid: crypto.randomUUID(),
    title: newPaletteTitle,
    colors: [newPaletteColorOne, newPaletteColorTwo, newPaletteColorThree],
    temperature: newPaletteTemp,
  };

  // stores palette in localStorage
  addPalette(newPalette);

  // re-renders the whole list
  renderPalettes();

  // reset the form
  e.target.reset();
};

const main = () => {
  // the very first time the user loads this, add palattes to localStorage
  initializePalettesIfEmpty();
  // render the exisiting palettes
  renderPalettes();
  // attach the form event handler to listen for the submit event
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
};

main();
