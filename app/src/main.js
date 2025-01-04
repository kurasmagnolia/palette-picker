import "./style.css";
import {
  setPalettes,
  getPalettes,
  initializePalettesIfEmpty,
  deletePaletteByID,
} from "./local-storage.js";
import {
  showPalettes,
  addPaletteToList,
  renderPalette,
} from "./dom-helpers.js";

const handleFormSubmit = (e) => {
  // prevent the default action
  e.preventDefault();

  const palettes = getPalettes();

  // grab the form data
  const newPaletteTitle = e.target.title.value;
  const uuid = crypto.randomUUID();
  const newPaletteColorOne = e.target.color1.value;
  const newPaletteColorTwo = e.target.color2.value;
  const newPaletteColorThree = e.target.color3.value;
  const newPaletteTemp = e.target.temp.value;

  // create new palette
  palettes[uuid] = {
    uuid,
    title: newPaletteTitle,
    colors: [newPaletteColorOne, newPaletteColorTwo, newPaletteColorThree],
    temperature: newPaletteTemp,
  };

  // stores palette in localStorage
  setPalettes(palettes);

  // reset the form
  e.target.reset();
};

const handleDeleteSubmit = (e) => {
  // prevent the default action
  e.preventDefault();
};

const main = () => {
  // the very first time the user loads this, add palattes to localStorage
  initializePalettesIfEmpty();
  // render the exisiting palettes
  renderPalette();
  // attach the form event handler to listen for the submit event
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
  // attach an event listener to listen for the submit event on the delete palette button
  document
    .querySelector("#delete-pallete")
    .addEventListener("submit", handleDeleteSubmit);
};

main();
