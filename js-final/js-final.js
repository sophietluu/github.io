const numberBoxes = document.querySelectorAll(".number-box div");
const typedText = document.getElementById("typedInput");
const addButton = document.getElementById("addButton");
const submitButton = document.getElementById("submitButton");
const instructionsBoxDiv = document.getElementById("instructionsBox");
const phoneRecordedDiv = document.getElementById("phoneRecorded");
const recordedPhoneNumberSpan = document.getElementById("recordedPhoneNumber");
const numbersBox = document.getElementById("numbersBox");

function updateTypedLetters(letter) {
  typedText.value += letter;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function addNumber() {
  const numberWords = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  // Check if all number boxes are filled
  if ([...numberBoxes].every((box) => box.textContent.trim() !== "")) {
    // Display the recorded phone number
    phoneRecordedDiv.style.display = "block";
    recordedPhoneNumberSpan.textContent = typedText.value;

    // Hide the typed letters box
    document.getElementById("typedLetters").style.display = "none";

    // Show the numbers in the box
    numbersBox.style.display = "flex";

    // Clear the screen
    addButton.style.display = "none";
    submitButton.style.display = "none";
    document.getElementById("letterKeyboard").style.display = "none";
    return;
  }

  let isNumber = false;
  for (let i = 0; i < numberWords.length; i++) {
    if (typedText.value.toLowerCase().includes(numberWords[i])) {
      isNumber = true;
      // Find the next empty number box and place the number in order
      const emptyBox = [...numberBoxes].find((box) => box.textContent.trim() === "");
      if (emptyBox) {
        emptyBox.textContent = i + 1;
      }
    }
  }

  // Clear all number boxes if the typed text doesn't contain a number word
  if (!isNumber) {
    numberBoxes.forEach((box) => (box.textContent = ""));
  }

  // Shuffle the letter keyboard
  const letterButtons = document.querySelectorAll("#letterKeyboard button");
  const shuffledLetters = shuffleArray(Array.from(letterButtons));
  const letterKeyboard = document.getElementById("letterKeyboard");
  letterKeyboard.innerHTML = "";
  shuffledLetters.forEach((button) => letterKeyboard.appendChild(button));

  // Clear typed letters
  typedText.value = "";

  // Hide the directions at the end
  document.getElementById("instructionsBox").style.display = "none";
}

function submitForm() {
  // Display a message to the user if they try to submit without filling all number boxes
  if ([...numberBoxes].some((box) => box.textContent.trim() === "")) {
    alert("Please fill all number boxes before submitting.");
    return;
  }

  addNumber();
}
