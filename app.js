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
  '🤖🤠🌵': "Wall-E",
  '🤴🧙‍♀️👸': "The Princess Diaries",
  '🕷️🕸️👨': "Spider-Man",
  '👻🚫👫': "Ghostbusters",
  '🦇🌃🃏': "Batman",
  '👨‍🚀🌌🛸': "Close Encounters of the Third Kind",
  '🫅💍🧙‍♂️': "The Lord of the Rings",
  '🚢💏🚢': "Titanic",
  '🔎💰🏃‍♂️': "Indiana Jones",
  '🧛‍♂️🌘🍷': "Dracula",
  '👩‍🎤🕺🎸': "Bohemian Rhapsody",
  '🔬⚗️💊': "Breaking Bad (TV Series)",
  '🚢💔🏝️': "Cast Away",
  '🏚️🎈🏠': "Up",
  '🏴‍☠️🦜🌴': "Pirates of the Caribbean",
  '👻🏚️🔑': "The Others",
  '🤖🔫🕶️': "The Terminator",
  '🎭🌃🤵‍♂️': "The Dark Knight",
  '😡🚗🏜️': "Mad Max",
  '📽️🚁🏃‍♂️': "Apocalypse Now",
  '🦊📚📖': "Fantastic Mr. Fox",
  '🚗🚗🚗': "Cars",
  '🙋‍♂️🤖🤖': "I, Robot",
  '🌪️🌪️🌪️': "Twister",
  '🤵‍♂️🔫🍸': "James Bond",
  '🏰🧌💏': "Shrek",
  '🏹👧🔥': "The Hunger Games",
  '🎭🚀🏀': "Spaceballs",
  '👾🕹️👨‍🚀': "Wreck-It Ralph",
  '🍔🍟🙋‍♂️': "Super Size Me",
  '🏰👸👠': "Cinderella",
  '🚀🤖🏃‍♂️': "Blade Runner",
  '🐇🏙️🔍': "Zootopia",
  '🤖🤯🌍': "The Matrix",
  '👽🏠🚲': "E.T. the Extra-Terrestrial",
  '🕵️‍♂️📸🔎': "The Thomas Crown Affair",
  '🦹‍♂️🌎🚀': "Guardians of the Galaxy",
  '🕶️🕵️‍♂️🚫': "Mission: Impossible",
  '👧🌈🎶': "The Sound of Music",
  '🌍🌋🦖': "Jurassic World",
  '👨‍🚀🌌👽': "Alien",
  '👮‍♂️⬛👽': "Men in Black",
  '🏰👸❄️': "Frozen",
  '👴🕶️🔍': "The Grand Budapest Hotel",
  '🧍‍♂️👽🏀': "Space Jam",
  '🕵️‍♂️🚗🏁': "The Italian Job",
  '🦇👻🌌': "Beetlejuice",
  '👻👪🏚️': "Casper",
  '🤖👾🚀': "Pixels",
  '🐻🟠👸': "Brave",
  '👸😴🏰': "Sleeping Beauty",
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

