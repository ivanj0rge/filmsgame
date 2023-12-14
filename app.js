const emoji = document.querySelector('#emojies')
const answer = document.querySelector('#answer')
const ansBtn = document.querySelector('.ans')
const reload = document.querySelector('.reload')

let currentFilm;
let countdown;

const films = {
  '🦁👑🌍': "The Lion King",
  '🕵️‍♂️🔍🕰️': "Sherlock Holmes",
  '🚀🌌🤖': "Star Wars",
  '🧙‍♂️🏰📚': "Harry Potter",
  '🚗💨🎥': "Fast and Furious",
  '🕵️‍♀️🎭🗽': "Miss Congeniality",
  '🦖🌴🌋': "Jurassic Park",
  '👨‍🚀🌌🛰️': "Apollo 13",
  '🍫🏭🎫': "Willy Wonka and the Chocolate Factory",
  '🧙‍♀️🚂🏰': "Harry Potter and the Philosopher's Stone",
  '🤖🤠🌵': "Wall-E",
  '🤴🧙‍♀️👸': "The Princess Diaries",
  '🕷️🕸️🕶️': "Spider-Man",
  '👨‍🚀🌌👾': "E.T. the Extra-Terrestrial",
  '👻🚫👫': "Ghostbusters",
  '🦇🌃🃏': "Batman: The Dark Knight",
  '👨‍🚀🌌🛸': "Close Encounters of the Third Kind",
  '🧙‍♂️📚📖': "The Lord of the Rings",
  '🚢🚢🚢': "Titanic",
  '🚁🏃‍♂️💼': "Indiana Jones: Raiders of the Lost Ark",
  '🧛‍♂️🌘🍷': "Dracula",
  '👩‍🎤🕺🎸': "Bohemian Rhapsody",
  '🔬⚗️💊': "Breaking Bad (TV Series)",
  '🚢💔🏝️': "Cast Away",
  '🏚️🎈🏠': "Up",
  '🏴‍☠️🦜🌊': "Pirates of the Caribbean",
  '👻🏚️🔑': "The Others",
  '🤖🚢🌊': "The Terminator",
  '🎭🌃🤵‍♂️': "The Dark Knight",
  '🚗🌪️👢': "Mad Max: Fury Road",
  '👦🍫🏭': "Charlie and the Chocolate Factory",
  '📽️🚁🏃‍♂️': "Apocalypse Now",
  '🦊📚📖': "Fantastic Mr. Fox",
  '🍫🏭🏭': "Willy Wonka & the Chocolate Factory",
  '🚗🚗🚗': "Cars",
  '🤖🌏🤖': "I, Robot",
  '🌪️🌪️🌪️': "Twister",
  '🤵‍♂️🚁🚢': "James Bond: Casino Royale",
  '🏰👑🐉': "Shrek",
  '🏹👧🔥': "The Hunger Games",
  '🎭🚀🌌': "Spaceballs",
  '👾🕹️👨‍🚀': "Wreck-It Ralph",
  '🍔🍟🍔': "Super Size Me",
  '🏰👸👑': "Cinderella",
  '🚀🤖🤖': "Blade Runner",
  '🕵️‍♂️🚔🔍': "Zootopia",
  '🐍🚂📚': "Harry Potter and the Chamber of Secrets",
  '🚀🌌🛸': "E.T. the Extra-Terrestrial",
  '🤖🤯🌍': "The Matrix",
  '👽🏠🚲': "E.T. the Extra-Terrestrial",
  '🕵️‍♂️📸🔎': "The Thomas Crown Affair",
  '🦹‍♂️🌎🚀': "Guardians of the Galaxy",
  '🕶️🕵️‍♂️🚁': "Mission: Impossible",
  '👧🌈🎶': "The Sound of Music",
  '👴🍫🏭': "Charlie and the Chocolate Factory",
  '🌍🌋🦖': "Jurassic World",
  '👨‍🚀🌌👽': "Alien",
  '👮‍♂️👽🌐': "Men in Black",
  '🍫🍬🏭': "Charlie and the Chocolate Factory",
  '👽🌌🚴': "E.T. the Extra-Terrestrial",
  '👑🏰👧': "Frozen",
  '👦🍫🏭': "Charlie and the Chocolate Factory",
  '👴🕶️🔍': "The Grand Budapest Hotel",
  '🚁🏃‍♂️🚢': "Indiana Jones: The Last Crusade",
  '🚢🏴‍☠️🦜': "Pirates of the Caribbean: Dead Man's Chest",
  '🌍🏀🌌': "Space Jam",
  '🤖🌐🌃': "Blade Runner 2049",
  '🕵️‍♂️🚗🏁': "The Italian Job",
  '🦇👻🌌': "Beetlejuice",
  '👻👪🏚️': "Casper",
  '🤖👾🚀': "Pixels",
  '🏴󠁧󠁢󠁳󠁣󠁴󠁿🔍🕵️‍♂️': "Brave",
  '👸👑🏰': "Sleeping Beauty",
}

function updateFilm() {
  const filmsArray = Object.entries(films)
  currentFilm = filmsArray[Math.floor(Math.random() * filmsArray.length)]

  emoji.textContent = currentFilm[0]

  answer.style.display = 'none'

  clearInterval(countdown)
  countdown = 5

  ansBtn.textContent = `See answer`
}

updateFilm()

reload.addEventListener('click', () => {
  // updateFilm()
  // startCountdown()
  window.location.reload()
})

ansBtn.addEventListener('click', ()=>{
  if (countdown > 0) {
    ansBtn.textContent = `Answer in ${countdown}`
  }else {
    answer.textContent = currentFilm[1]
    answer.style.display = 'block'
    ansBtn.style.display = 'none'
  }
})

function startCountdown() {
  countdown = 5;
  ansBtn.textContent = `${countdown}`;

  const countdownInterval = setInterval(() => {
    if (countdown > 0) {
      ansBtn.textContent = `${--countdown}`;
    } else if (countdown === 0) {
      ansBtn.textContent = `See answer`;
      clearInterval(countdownInterval);
    }
  }, 1000);
}

startCountdown();

