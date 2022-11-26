// 팰린드롬 / 회문
// 앞뒤로 읽었을때 같은 문자열

//1. 추가 문자열 활용

const checkPalidrome = (str) => {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str;
};

// console.log(checkPalidrome('abba'));
// console.log(checkPalidrome('david'));
// console.log(checkPalidrome('eye'));

//2. Two pointer 활용

const checkPalidrome2 = (str) => {
  const len = str.length;
  const middle = Math.floor(len / 2);
  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(len - 1 - i)) {
      return false;
    }
  }
  return true;
};

console.log(checkPalidrome2('abba'));
console.log(checkPalidrome2('david'));
console.log(checkPalidrome2('eye'));
