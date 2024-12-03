import "./style.css";
import { v4 as generateUUID } from "uuid";
import palettes from "./palettes.json";
console.log(palettes);
const newPaletteID = generateUUID();

// Ordinarily, you'd add these elements to index.html
const uuidButton = document.createElement("button");
const uuidText = document.createElement("p");
document.body.append(uuidButton, uuidText);

uuidButton.textContent = "Generate UUID";

uuidButton.addEventListener("click", () => {
  const newUUID = generateUUID();
  uuidText.textContent = `your new uuid is: ${newUUID}`;
});
