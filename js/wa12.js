const getRandomColorButton = document.querySelector('#js-random-color').addEventListener('click', getRandomColor);
const convertHexToRgbButton = document.querySelector('#js-convert-hex-rgb').addEventListener('click', convertHexToRgb);
const convertHexToHslButton = document.querySelector('#js-convert-hex-hsl').addEventListener('click', convertHexToHsl);

let randHex = "";

async function getRandomColor() {
  try {
    const response = await fetch('https://x-colors.yurace.pro/api/random');
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    randHex = data.hex;
    displayColor(randHex);
    changeBackgroundColor(randHex);
  } catch (error) {
    console.log(error);
    alert('Failed to fetch random color');
  }
}

async function convertHexToRgb() {
  hexValue = randHex.slice(1);
  console.log(hexValue)
  try {
    const response = await fetch(`https://x-colors.yurace.pro/api/hex2rgb?value=` + hexValue);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    const rgbColor = data.rgb;
    displayColor(rgbColor);
  } catch (error) {
    console.log(error);
    alert('Failed to convert color');
  }
}

async function convertHexToHsl() {
  try {
    const response = await fetch(`https://x-colors.yurace.pro/api/hex2hsl?value=` + hexValue);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    const hslColor = data.hsl;
    displayColor(hslColor);
  } catch (error) {
    console.log(error);
    alert('Failed to convert color');
  }
}

function displayColor(color) {
  const colorText = document.querySelector('#js-color-text');
  colorText.textContent = color;
}

function changeBackgroundColor(color) {
    const app = document.querySelector('.color');
    app.style.backgroundColor = color;
  }
  
  getRandomColor();
  