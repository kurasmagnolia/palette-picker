import "./style.css";
import { getPalettes, initializePalettes } from "./local-storage";
const newPaletteID = crypto.randomUUID();

const handleFormSubmit = (e) => {
  // prevent the default action
  e.preventDefault();

  // grab the form data
  const newPaletteTitle = e.target.title.value;
  const newPaletteColorOne = e.target.color1.value;
  const newPaletteColorTwo = e.target.color2.value;
  const newPaletteColorThree = e.target.color3.value;
  const newPaletteWarmTemp = e.target.warmTemp.value;
  const newPaletteNeutralTemp = e.target.neutralTemp.value;
  const newPaletteCoolTemp = e.target.coolTemp.value;

  // reset the form
  e.target.reset();
};

const main = () => {
  // the very first time the user loads this, add palattes to localStorage
  if (!getPalettes()) {
    initializePalettes();
  }
  // render the exisitig palettes
  renderPalettes();
  // attach the form event handler to listen for the submit event
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
};

main();
