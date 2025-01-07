import { setPalettes, getPalettes, deletePaletteByID } from "./local-storage";

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

export const renderPalette = (
  id,
  title,
  colors = [colorOne, colorTwo, colorThree],
  temperature
) => {
  // select the ul in our html -> the palette list
  const paletteList = document.querySelector("ul");

  // create li for palettte
  const palette = document.createElement("li");

  palette.id = id;
  palette.className = "palette-item";

  paletteList.appendChild(palette);

  // palette content (div)
  const paletteContent = document.createElement("div");

  paletteContent.className = "palette";

  palette.appendChild(paletteContent);

  // palette title
  const paletteTitle = document.createElement("h3");

  paletteTitle.className = "palette-title";
  paletteTitle.textContent = title;

  paletteContent.appendChild(paletteTitle);

  // palette colors -> first color
  const paletteColorRow = document.createElement("div");
  paletteColorRow.className = "color-row";
  paletteContent.appendChild(paletteColorRow);

  const paletteOuterBoxOne = document.createElement("div");
  paletteOuterBoxOne.className = "outer-box";
  paletteColorRow.appendChild(paletteOuterBoxOne);

  const paletteColorBoxOne = document.createElement("div");
  paletteColorBoxOne.className = "color-box-1";
  paletteColorBoxOne.style.backgroundColor = colors[0];
  paletteOuterBoxOne.appendChild(paletteColorBoxOne);

  const paletteColorBoxOneText = document.createElement("div");
  paletteColorBoxOneText.className = "color-box-text";
  paletteColorBoxOne.appendChild(paletteColorBoxOneText);

  const colorBoxOneFirstWord = document.createElement("p");
  colorBoxOneFirstWord.className = "first-word";
  colorBoxOneFirstWord.textContent = "Text";
  paletteColorBoxOneText.appendChild(colorBoxOneFirstWord);

  const colorBoxOneSecondWord = document.createElement("p");
  colorBoxOneSecondWord.className = "second-word";
  colorBoxOneSecondWord.textContent = "Example";
  paletteColorBoxOneText.appendChild(colorBoxOneSecondWord);

  const colorBoxOneCopyBtn = document.createElement("button");
  colorBoxOneCopyBtn.className = "copy-btn";
  colorBoxOneCopyBtn.textContent = `Copy ${colors[0]}`;
  paletteColorRow.appendChild(colorBoxOneCopyBtn);

  // palette colors -> second color
  const paletteColorRowTwo = document.createElement("div");
  paletteColorRowTwo.className = "color-row";
  paletteContent.appendChild(paletteColorRowTwo);

  const paletteOuterBoxTwo = document.createElement("div");
  paletteOuterBoxTwo.className = "outer-box";
  paletteColorRowTwo.appendChild(paletteOuterBoxTwo);

  const paletteColorBoxTwo = document.createElement("div");
  paletteColorBoxTwo.className = "color-box-2";
  paletteColorBoxTwo.style.backgroundColor = colors[1];
  paletteOuterBoxTwo.appendChild(paletteColorBoxTwo);

  const paletteColorBoxTwoText = document.createElement("div");
  paletteColorBoxTwoText.className = "color-box-text";
  paletteColorBoxTwo.appendChild(paletteColorBoxTwoText);

  const colorBoxTwoFirstWord = document.createElement("p");
  colorBoxTwoFirstWord.className = "first-word";
  colorBoxTwoFirstWord.textContent = "Text";
  paletteColorBoxTwoText.appendChild(colorBoxTwoFirstWord);

  const colorBoxTwoSecondWord = document.createElement("p");
  colorBoxTwoSecondWord.className = "second-word";
  colorBoxTwoSecondWord.textContent = "Example";
  paletteColorBoxTwoText.appendChild(colorBoxTwoSecondWord);

  const colorBoxTwoCopyBtn = document.createElement("button");
  colorBoxTwoCopyBtn.className = "copy-btn";
  colorBoxTwoCopyBtn.textContent = `Copy ${colors[1]}`;
  paletteColorRowTwo.appendChild(colorBoxTwoCopyBtn);

  // palette colors -third color
  const paletteColorRowThree = document.createElement("div");
  paletteColorRowThree.className = "color-row";
  paletteContent.appendChild(paletteColorRowThree);

  const paletteOuterBoxThree = document.createElement("div");
  paletteOuterBoxThree.className = "outer-box";
  paletteColorRowThree.appendChild(paletteOuterBoxThree);

  const paletteColorBoxThree = document.createElement("div");
  paletteColorBoxThree.className = "color-box-3";
  paletteColorBoxThree.style.backgroundColor = colors[2];
  paletteOuterBoxThree.appendChild(paletteColorBoxThree);

  const paletteColorBoxThreeText = document.createElement("div");
  paletteColorBoxThreeText.className = "color-box-text";
  paletteColorBoxThree.appendChild(paletteColorBoxThreeText);

  const colorBoxThreeFirstWord = document.createElement("p");
  colorBoxThreeFirstWord.className = "first-word";
  colorBoxThreeFirstWord.textContent = "Text";
  paletteColorBoxThreeText.appendChild(colorBoxThreeFirstWord);

  const colorBoxThreeSecondWord = document.createElement("p");
  colorBoxThreeSecondWord.className = "second-word";
  colorBoxThreeSecondWord.textContent = "Example";
  paletteColorBoxThreeText.appendChild(colorBoxThreeSecondWord);

  const colorBoxThreeCopyBtn = document.createElement("button");
  colorBoxThreeCopyBtn.className = "copy-btn";
  colorBoxThreeCopyBtn.textContent = `Copy ${colors[2]}`;

  paletteColorRowThree.appendChild(colorBoxThreeCopyBtn);

  // delete button
  const paletteDeleteBtn = document.createElement("button");
  paletteDeleteBtn.className = "delete-btn";
  paletteDeleteBtn.textContent = "Delete Palette";
  paletteDeleteBtn.addEventListener("click", () => {
    deletePaletteByID(id);
  });
  paletteContent.appendChild(paletteDeleteBtn);

  // temperature banner / footer
  const paletteTempBanner = document.createElement("div");
  paletteTempBanner.className = "palette-footer";
  paletteTempBanner.textContent = temperature;
  if (temperature === "neutral") {
    paletteTempBanner.style.backgroundColor = "#555555";
  } else if (temperature === "cool") {
    paletteTempBanner.style.backgroundColor = "#121e43";
  } else if (temperature === "warm") {
    paletteTempBanner.style.backgroundColor = "#431212";
  }
  paletteContent.appendChild(paletteTempBanner);

  // copy button -> Clipboard API
  document.querySelectorAll(".copy-btn").forEach((item) => {
    item.addEventListener("click", async (event) => {
      if (!navigator.clipboard) {
        // Clipboard API is not available
        return;
      }
      try {
        const copyBtnTest = document.querySelector(".copy-btn").innerText;
        await navigator.clipboard.writeText(event.target.innerText.slice(5));
        event.target.textContent = "Copied hex!";

        setTimeout(() => {
          event.target.textContent = copyBtnTest;
        }, 1000);
      } catch (err) {
        console.error("Failed to copy!", err);
      }
    });
  });
};

export const handleFormSubmit = (e) => {
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
  const colors = [newPaletteColorOne, newPaletteColorTwo, newPaletteColorThree];

  // creates new palette using object of objects structure
  palettes[uuid] = {
    uuid,
    title: newPaletteTitle,
    colors,
    temperature: newPaletteTemp,
  };

  // stores palette in localStorage
  setPalettes(palettes);
  // renders and adds palette dynamically to the palettes section
  renderPalette(uuid, newPaletteTitle, colors, newPaletteTemp);

  // reset the form
  e.target.reset();
};
