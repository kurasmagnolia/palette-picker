import "./style.css";
import {
  getPalettes,
  initializePalettes,
  addPalette,
  deletePaletteByID,
} from "./local-storage.js";
import { showPalettes, addPaletteToList } from "./dom-helpers.js";

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

  // stores the palette in the Palettes List
  addPaletteToList(newPalette);

  // reset the form
  e.target.reset();
};

const main = () => {
  // the very first time the user loads this, add palattes to localStorage
  if (!getPalettes()) {
    initializePalettes();
  }
  // render the exisitig palettes
  //renderPalettes();
  // attach the form event handler to listen for the submit event
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
};

main();
