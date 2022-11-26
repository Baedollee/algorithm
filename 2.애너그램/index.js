const stringA = 'listen';
const stringB = 'silent';

// 1. split(), sort(), and join()
// 'listen' -> split() -> sort() -> join()

const isAnagram = (strA, strB) => {
  if (strA.length !== strB.length) {
    return false;
  }
  return strA.split('').sort().join() === strB.split('').sort().join();
};
console.log(isAnagram(stringA, stringB));

//2. map()

const isAnagram2 = (strA, strB) => {
  if (strA.length !== strB.length) {
    return false;
  }
  const hashMap = {};
  for (const char of strA) {
    //{l:1, i:1, s:1}
    hashMap[char] = hashmap[char] ? hashMap[char] + 1 : 1;
  }
  for (const char of strB) {
    if (!hashMap[char]) {
      return false;
    }
    hashMap[char]--;
  }
  return true;
};
console.log(isAnagram2(stringA, stringB));
