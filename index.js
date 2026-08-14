// Assignment 1: Promise Chaining (Recruitment Process Evaluation System)


function codingScoreCheck(marks, cutoff) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let sum = 0;
      for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
      }
      let average = sum / marks.length;

      if (average >= cutoff) {
        resolve(average);
      } else {
        reject("Sorry, you have not cleared the Coding Assessment.");
      }
    }, 2000);
  });
}



function technicalInterviewCheck(marks, cutoff) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let sum = 0;
      for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
      }
      let average = sum / marks.length;

      if (average >= cutoff) {
        resolve(average);
      } else {
        reject("Sorry, you have not cleared the Technical Interview.");
      }
    }, 2000);
  });
}



function finalSelectionCheck(codingAverage, technicalAverage, cutoff) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let finalAverage = (codingAverage + technicalAverage) / 2;

      if (finalAverage >= cutoff) {
        resolve(finalAverage);
      } else {
        reject("Sorry, you have not cleared the final selection cutoff.");
      }
    }, 2000);
  });
}



let codingMarks = [75, 98, 80];
let technicalMarks = [45, 35, 20];

codingScoreCheck(codingMarks, 60)
  .then(function (codingAvg) {
    console.log("Coding Assessment passed. Average: " + codingAvg);

    technicalInterviewCheck(technicalMarks, 65)
      .then(function (technicalAvg) {
        console.log("Technical Interview passed. Average: " + technicalAvg);

        finalSelectionCheck(codingAvg, technicalAvg, 70)
          .then(function (finalAvg) {
            console.log("Final Selection passed. Final Average: " + finalAvg);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  })
  .catch(function (error) {
    console.log(error);
  });
