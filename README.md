# Promise-based Recruitment Evaluation System

A simple JavaScript project that simulates a three-stage recruitment process, **Coding Assessment**, **Technical Interview**, and **Final Selection Review** — using native JavaScript **Promises**, `setTimeout`, `.then()`, and `.catch()`.

## Overview

The recruitment process has three sequential stages. A candidate must clear each stage's cutoff score to move on to the next:

1. **Coding Assessment** — average of coding marks must meet the cutoff.
2. **Technical Interview** — average of technical interview marks must meet the cutoff.
3. **Final Selection Review** — average of the coding and technical interview averages must meet the final cutoff.

Each stage is modeled as an asynchronous operation that resolves or rejects after a **2-second delay**, simulating a real evaluation process.

## Features

- Three independent Promise-returning functions, one per stage.
- Average calculation and cutoff comparison logic for each stage.
- Sequential execution using `.then()` chaining each stage only runs if the previous one is cleared.
- Clear success and failure messages via `.then()` and `.catch()`.

## Functions

### `codingScoreCheck(marks, cutoff)`

Accepts an array of coding assessment marks and a cutoff score. Resolves with the average score if it meets the cutoff; otherwise rejects with:
`Sorry, you have not cleared the Coding Assessment.`

### `technicalInterviewCheck(marks, cutoff)`

Accepts an array of technical interview marks and a cutoff score. Resolves with the average score if it meets the cutoff; otherwise rejects with:
`Sorry, you have not cleared the Technical Interview.`

### `finalSelectionCheck(codingAverage, technicalAverage, cutoff)`

Accepts the coding average, technical interview average, and final cutoff. Resolves with the final average if it meets the cutoff; otherwise rejects with:
`Sorry, you have not cleared the final selection cutoff.`

## Project Structure

```
├── recruitment.js          # Chained .then() version
├── recruitment_simple.js   # Beginner-friendly nested version
└── README.md
```

## How to Run

1. Make sure [Node.js](https://nodejs.org/) is installed.
2. Clone or download this repository.
3. Run either file from the terminal:

```bash
node recruitment.js
# or
node recruitment_simple.js
```

4. Wait a few seconds (each stage takes 2 seconds) — the results will print to the console in order.

## Sample Output

```
Coding Assessment passed. Average: 71.67
Technical Interview passed. Average: 71.67
Final Selection passed. Final Average: 71.67
```

If a candidate doesn't meet a cutoff at any stage, the corresponding rejection message is printed and the chain stops there.

## Customizing

Edit the sample data at the bottom of either file to test different outcomes:

```js
let codingMarks = [70, 65, 80];
let technicalMarks = [75, 68, 72];
```

Lower a cutoff value (e.g., set the coding cutoff to `90`) to see the rejection path in action.

## Tech Stack

- JavaScript (ES6+)
- Node.js runtime
- Native Promises, `setTimeout`, `.then()`, `.catch()`

## Author

Bhaumikk Keer			Larry Page				150096725030

## License

This project was created for academic/assignment purposes.
