import "./style.css";
import { v4 as generateUUID } from "uuid";
import startingPalettes from "./starting-palettes.json";
import { getPalettes, initializePalettes } from "./local-storage";
// console.log(palettes);
const newPaletteID = generateUUID();

// // Ordinarily, you'd add these elements to index.html
// const uuidButton = document.createElement("button");
// const uuidText = document.createElement("p");
// document.body.append(uuidButton, uuidText);

// uuidButton.textContent = "Generate UUID";

// uuidButton.addEventListener("click", () => {
//   const newUUID = generateUUID();
//   uuidText.textContent = `your new uuid is: ${newUUID}`;
// });

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
  e.reset();
};

const main = () => {
  // the very first time the user loads this, add palattes to localStorage
  if (!getPalettes()) {
    initializePalettes();
  }
  // attach the form event handler to listen for the submit event
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
};

main();
