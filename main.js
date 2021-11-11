console.log(arrowTitle)
/* START CODE UNDER THIS LINE */

let age = 25;
if (true) {
  age = 30;
}
age; // ? (30) we modify the value in if statment

const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; // ? (John) (the value in if statment is local variables we use const)


//////////////////////////////////////////////////////////////////////////////////////
let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

func1(); // ? (15)

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); // ?  (10)

/////////////////////////////////////////////////////////////////////////////////////////////
let num=5;
const countDown = function () {
    // TODO: Your code here
   num--;

if(num>=0){
    return num;

}else {
    return "ihijp";
}
  };
  
//   countDown(); // => 4
//   countDown(); // => 3
//   countDown(); // => 2
//   countDown(); // => 1
//   countDown(); // => 0
//   countDown(); // => "count down is over"

////////////////////////////////////////////////////////////////////////////////////////

let numup=4;
const countUp = function () {
  // TODO: Your code here
  return numup++;

}
 /* countUp(); // => 4
  countUp(); // => 5
  countUp(); // => 6
  countUp(); // => 7
  countUp(); // => 8*/

  /////////////////////////////////////////////////////////////////////////////////////

  const resetCount = function (start) {
    // TODO: Your code here
    return ++start;
  };
  /*
  resetCount(0); // => "the count has been reset"
  countUp(); // => 1
  resetCount(10); // => "the count has been reset"
  countUp(); // => 11*/

  /////////////////////////////////////////////////////////////////////////

let str;
  const addToList = function (toDo) {
    // TODO: Your code here
    return toDo;
  };
  str=toDo;
  
  /*
  addToList("Eat"); // => 'Eat'
  addToList("Play"); // => 'Eat Play'
  addToList("Sleep"); // => 'Eat Play Sleep'
  addToList("repeat"); // => 'Eat Play Sleep repeat'*/