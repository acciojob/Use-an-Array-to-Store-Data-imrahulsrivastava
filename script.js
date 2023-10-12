// Write your code here

const simpleArray = [];

simpleArray.push("start");
simpleArray.push(true);
simpleArray.push(1);
simpleArray.push(false);
simpleArray.push("end");
console.log(simpleArray);

const complexArray = [];

const updateArray = function (keyA, valueA, keyB, valueB) {
  const myObject = {};
  myObject[keyA] = valueA;
  myObject[keyB] = valueB;
  complexArray.push(myObject);
};

updateArray("one", 1, "two", 2);
updateArray("three", 3, "four", 4);
updateArray("a", "a", "b", "b");
updateArray("c", "c", "d", "d");

console.log(complexArray);
