// Assignment 1 | COMP1073 Client-Side JavaScript
// Name: Matthew Antonis
// Student Number: 200373088
// Due Date: 2023/10/04

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const chosenNoun1 = document.getElementById('chosenNoun1');
const chosenVerb = document.getElementById('chosenVerb');
const chosenAdjective = document.getElementById('chosenAdjective');
const chosenNoun2 = document.getElementById('chosenNoun2');
const chosenSetting = document.getElementById('chosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyPara = document.getElementById('story');

// Variables for pre-defined arrays
const nouns = ['Turkey', 'Mom', 'Dad', 'Dog', 'Teacher', 'Elephant', 'Cat'];
const verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
const adjectives = ['funny', 'scary', 'goofy', 'slimy', 'barking', 'fat'];
const settings = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    const chosenWord = nouns[Math.floor(Math.random() * nouns.length)];
    chosenNoun1.textContent = chosenWord;
}

function verb_on_click() {
    const chosenWord = verbs[Math.floor(Math.random() * verbs.length)];
    chosenVerb.textContent = chosenWord;
}

function adjective_on_click() {
    const chosenWord = adjectives[Math.floor(Math.random() * adjectives.length)];
    chosenAdjective.textContent = chosenWord;
}

function noun2_on_click() {
    const chosenWord = nouns[Math.floor(Math.random() * nouns.length)];
    chosenNoun2.textContent = chosenWord;
}

function setting_on_click() {
    const chosenWord = settings[Math.floor(Math.random() * settings.length)];
    chosenSetting.textContent = chosenWord;
}

function playback_on_click() {
    storyPara.textContent = `${chosenNoun1.textContent} ${chosenVerb.textContent} a ${chosenAdjective.textContent} ${chosenNoun2.textContent} ${chosenSetting.textContent}.`;
}

function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

function displayStudentInfo() {
    const studentInfo = "Student ID: 12345, Name: John Doe";
    document.getElementById('200373088').innerText = studentInfo;
}

/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
document.body.addEventListener('click', displayStudentInfo);
