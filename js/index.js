window.addEventListener('load', init);

// GLOBALS
//levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 2,
    veryhard: 1
}

const currentLevel = levels.hard;

let time = currentLevel;
let score = 0;
let isPlaying;


//DOM ELEMENTS
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition',
  'Utsav'
];

// Initalize Game
function init(){
    //show Number of seconds
    seconds.innerHTML = currentLevel;
    // LOAD WORD FROM ARRAY
    showWord(words);
    //START MATCHING ON WORD INPUT
    wordInput.addEventListener('input', startMatch)
    // CAll countdown every second
    setInterval(countdown, 1000);
    // CHECK GAME STATUS
    setInterval(checkStatus, 50);

}

function startMatch(){
    if (matchwords()) {
     isPlaying = true;
     time = currentLevel + 1;
     showWord(words);
     wordInput.value = '';
     score++;
        }


        //if score is -1, display 0
        if(score === -1){
                scoreDisplay.innerHTML = 0;
        } else {
        scoreDisplay.innerHTML = score;
        }
    }


function matchwords(){
        if(wordInput.value === currentWord.innerHTML) {
            message.innerHTML = 'corrrect!!!!!';
            return true;
        } else {
            message.innerHTML = '';
            return false
        }
}

// PICK & show random word
function showWord(words){
    const randIndex = Math.floor(Math.random() * words.length);
        // output random word
        currentWord.innerHTML = words[randIndex];
}

function countdown() {
    if(time > 0){
        time--;
    }else if(time === 0) {
        isPlaying = false;
    }
    //Showtime
    timeDisplay.innerHTML = time;
}


function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'GAME OVER!!!'
        score = -1;
    }
}