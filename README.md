Film Emoji Guessing Game

![Screenshot 2023-12-14 142409](https://github.com/ivanj0rge/filmsgame/assets/143030533/4b25bdb0-401d-473f-b3e6-a393f7c27226)

Description:
I created the Film Emoji Guessing Game as a fun and interactive project for kids who enjoy guessing games, inspired by popular emoji-based games on platforms like YouTube. The game displays an emoji representing a famous film, and the player has to guess the movie title. It's designed to be a simple and engaging activity, with potential plans to introduce difficulty levels and a scoring system in the future.

Deployment link:
https://ivanj0rge.github.io/filmsgame/

Getting Started/Code Installation:
To access the code and run the project locally, follow these steps:

Clone the repository:
bash
Copy code
git clone git@github.com:ivanj0rge/filmsgame.git
Open the project folder in your preferred code editor.
Open the index.html file in your browser to start playing.

Timeframe & Working Team:
I developed this project individually in a few hours.

Technologies Used:
JavaScript
HTML
CSS

Brief:
The goal of this project was to create an entertaining Film Emoji Guessing Game using JavaScript. The focus was on providing a simple yet enjoyable experience for kids.

Planning:
In the planning stage, I envisioned the game's flow, created a wireframe for the user interface, and utilized basic pseudocode to structure the initial logic. Future plans may include additional levels to increase difficulty and a scoring system.

Build/Code Process:
The code is structured with modular functions to enhance readability and maintainability. Here's an example snippet:

javascript
function updateFilm() {
  const filmsArray = Object.entries(films)
  currentFilm = filmsArray[Math.floor(Math.random() * filmsArray.length)]

  emoji.textContent = currentFilm[0]

  answer.style.display = 'none'

  clearInterval(countdown)
  countdown = 5

  ansBtn.textContent = `See answer`
}

Challenges:
I encountered a minor challenge when resetting everything for a new film, which led to the decision to reload the page. This is an area for potential improvement in the future.

Wins:
Successfully created a mobile-friendly and visually engaging user interface. Achieved a simple and clean code structure for easy maintenance.

Key Learnings/Takeaways:
Enhanced proficiency in JavaScript and gained experience in creating interactive and visually appealing web applications. Identified areas for improvement in handling game resets.

Bugs:
No significant bugs to report.

Future Improvements:
Implement different levels to increase difficulty.
Introduce a scoring system to track accurate guesses.
Explore ways to handle game resets more smoothly.
Add animations and additional styling for a more immersive experience.
