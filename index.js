const fs = require("fs");

/********  Day 1 **********/
//dataset: string
const data1 = fs.readFileSync("advent-of-code-2022/datasets/dataset1.txt", {
  encoding: "utf8",
  flag: "r",
});

const createArray = (str) => {
  //create an array with elements type string
  const arr = str.split("\n");
  // console.log(data1)
  let sum = 0;
  let biggestSum = 0;
  let sumCollection = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      sum = sum + parseInt(arr[i]);
    } else if (arr[i] === "" || i === arr.length - 1) {
      if (biggestSum < sum) {
        biggestSum = sum;
      }
      sumCollection.push(sum);
      sum = 0;
    }
  }
  const threeBiggest = sumCollection.sort((a, b) => b - a).splice(0, 3);
  const sumCalories = threeBiggest.reduce((acc, val) => {
    return acc + val;
  });
  // console.log(threeBiggest, sumCalories);
};

// createArray(data1);

/********  Day 2 **********/

const data2 = fs.readFileSync("advent-of-code-2022/datasets/dataset2.txt", {
  encoding: "utf8",
  flag: "r",
});

const rps = (str) => {
  const strategyArr = str.split("\n");
  let sum = 0;

  for (let i = 0; i < strategyArr.length; i++) {
    const you = strategyArr[i][2];
    const elf = strategyArr[i][0];

    if (you === "X") {
      if (elf === "A") {
        sum = sum + 3;
      } else if (elf === "B") {
        sum = sum + 1;
      } else if (elf === "C") {
        sum = sum + 2;
      }
    } else if (you === "Y") {
      sum = sum + 3;
      if (elf === "A") {
        sum = sum + 1;
      } else if (elf === "B") {
        sum = sum + 2;
      } else if (elf === "C") {
        sum = sum + 3;
      }
    } else if (you === "Z") {
      sum = sum + 6;
      if (elf === "A") {
        sum = sum + 2;
      } else if (elf === "B") {
        sum = sum + 3;
      } else if (elf === "C") {
        sum = sum + 1;
      }
    }
  }

  return sum;
};

// rps(data2);

/********  Day 3 **********/

const data3 = fs.readFileSync("advent-of-code-2022/datasets/dataset3.txt", {
  encoding: "utf8",
  flag: "r",
});

const organizeRucksacks = (str) => {
  const input = str.split("\n").filter((word) => word != "");
  let sum = 0;

  input.forEach((element) => {
    const leftCompartment = element.slice(0, element.length / 2);
    const rightCompartment = element.slice(element.length / 2);

    for (let i = 0; i < rightCompartment.length; i++) {
      if (rightCompartment.includes(leftCompartment[i])) {
        if (leftCompartment[i] == leftCompartment[i].toLowerCase()) {
          sum += leftCompartment[i].charCodeAt(0) - 96;
        } else {
          sum += leftCompartment[i].charCodeAt(0) - 38;
        }
        break;
      }
    }
  });

  console.log(sum);
};

organizeRucksacks(data3);
