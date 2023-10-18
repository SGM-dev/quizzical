# Quizzical - Trivia Game in React

## Overview

Quizzical is a fun and engaging trivia game built using React. This simple game consists of two screens: one for starting the quiz and the other for answering trivia questions. It pulls trivia questions from the Open Trivia Database (OTDB) API, tallies correct answers when the "Check answers" button is clicked, and provides a user-friendly interface to select answers.

## Features

- **Two Screens**: Quizzical offers a two-screen user interface. The first screen displays a "Start Quiz" button, while the second screen shows the quiz questions.

- **Trivia Questions**: The app fetches 5 trivia questions from the Open Trivia Database API, providing users with a variety of topics to test their knowledge.

- **Answer Tally**: After completing the quiz, users can click the "Check answers" button to see how many questions they answered correctly.

- **HTML Entities Decoding**: Quizzical uses a library to decode HTML entities within the trivia questions and answer choices, ensuring a clean and readable user experience.

- **Randomized Answer Choices**: The app randomly inserts the correct answer into an array alongside incorrect answers, providing a challenging and varied set of answer choices for each question.

- **Limited Answer Choices**: Quizzical limits the answer choices to just one, helping users select their answers and making the game more engaging.

- **Styled Selected Answer**: When users select an answer, it is styled to provide visual feedback, making the selection clear and improving the user experience.

## Getting Started

1. Clone the repository to your local machine:

   ```shell
   git clone https://https://github.com/SGM-dev/quizzical.git
   ```

2. Install the required dependencies using npm:

   ```shell
   cd quizzical
   npm install
   ```

3. Start the development server:

   ```shell
   npm run dev
   ```

4. Open your web browser and navigate to `http://localhost:5173` to play Quizzical.

## Technologies Used

- React
- Open Trivia Database API
- HTML Entities Decoder Library (e.g., `he` , `html-entities`)
- CSS for styling

## License

This project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.
