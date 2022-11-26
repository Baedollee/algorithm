// Set 이용
const nums = [1, 2, 3, 6, 6, 7, 2, 2, 8, 9];

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);

console.log(mySet);

const uniqueNums = [...new Set(nums)];
console.log(uniqueNums);

// indexOf 이용

// const uniqueNums = nums.filter((item, position) => {
//   return nums.indexOf(item) === position;
// });
// console.log(uniqueNums);

// cashing / frequency map
const unique = (arr) => {
  const elements = {};
  const result = [];
  for (let element of arr) {
    if (!elements[element]) {
      result.push[element];
    }
    elements[element] = element;
  }
  return result;
};
