const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was a sunny day, with a temperature of :temperature:, so :insertx: decided to go on an adventure. They packed their bags and headed to :inserty:. Along the way, they encountered many exciting things and met new friends. At one point, they even had a picnic with :insertz:. It was a memorable journey, and they returned home with wonderful memories. :insertx: couldn't wait to share their stories with their other stuffed animal friends.";
const insertX = ['Teddy the Bear', 'Lily the Bunny', 'Max the Dog'];
const insertY = ['the beach', 'the mountains', 'a bustling city'];
const insertZ = ['a friendly squirrel', 'a wise owl', 'a playful kitten'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replace(/they/g, name + " and their friends");
    }

    if(document.getElementById("uk").checked) {
      const temperature = Math.round((94 - 32) * 5/9);
      newStory = newStory.replace(/:temperature:/g, temperature + " degrees celsius");
    } else {
      newStory = newStory.replace(/:temperature:/g, "94 degrees fahrenheit");
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}