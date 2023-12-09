const numberBoxes = document.querySelectorAll('.number-box div');
const typedText = document.getElementById('typedInput');
const addButton = document.getElementById('addButton');
const submitButton = document.getElementById('submitButton');
const phoneRecordedDiv = document.getElementById('phoneRecorded');
const recordedPhoneNumberSpan = document.getElementById('recordedPhoneNumber');
const numbersBox = document.getElementById('numbersBox');

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
    const numberWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    // Check if all number boxes are filled
    if ([...numberBoxes].every(box => box.textContent.trim() !== '')) {
        // Display the recorded phone number
        phoneRecordedDiv.style.display = 'block';
        recordedPhoneNumberSpan.textContent = typedText.value;

        // Hide the typed letters box
        document.getElementById('typedLetters').style.display = 'none';
        
        // Show the numbers in the box
        numbersBox.style.display = 'flex';

        // Clear the screen
        addButton.style.display = 'none';
        submitButton.style.display = 'none';
        document.getElementById('letterKeyboard').style.display = 'none';
        return;
    }

    for (let i = 0; i < numberWords.length; i++) {
        if (typedText.value.toLowerCase().includes(numberWords[i])) {
            // Generate a random index for the number box
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * numberBoxes.length);
            } while (numberBoxes[randomIndex].textContent.trim() !== '');

            numberBoxes[randomIndex].textContent = i + 1;
        }
    }

    // Shuffle the letter keyboard
    const letterButtons = document.querySelectorAll('#letterKeyboard button');
    const shuffledLetters = shuffleArray(Array.from(letterButtons));
    const letterKeyboard = document.getElementById('letterKeyboard');
    letterKeyboard.innerHTML = '';
    shuffledLetters.forEach(button => letterKeyboard.appendChild(button));

    // Typed letters
    typedText.value = '';
}

function submitForm() {
    // Display a message to the user if they try to submit without filling all number boxes
    if ([...numberBoxes].some(box => box.textContent.trim() === '')) {
        alert('Please fill all number boxes before submitting.');
        return;
    }

    addNumber();
}