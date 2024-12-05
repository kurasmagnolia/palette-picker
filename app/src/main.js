import "./style.css";
import { v4 as generateUUID } from "uuid";
import startingPalettes from "./starting-palettes.json";
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
};

const main = () => {
  // attach the form event handler to listen for the submit event
  document.querySelector("form").addEventListener("submit", handleFormSubmit);
};

main();
