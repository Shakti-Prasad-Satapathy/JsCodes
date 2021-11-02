// Reverse of the cherector of roeds of a scentence
let str = "abcde uvwxyz";
let countOfWords = str.split(" ");
let reverseStr = "";
for (i = 0; i < countOfWords.length; i++) {
  for (j = countOfWords[i].length - 1; j >= 0; j--) {
    reverseStr = reverseStr + countOfWords[i].charAt(j);
  }
  reverseStr = reverseStr + " ";
}
console.log("Original String:", str, "Reversed str is:", reverseStr);

// ======================================================
// Friquency of char in a String
let str = "apple";
let count = 0;
const friquencyCount = (char) => {
  for (j = 0; j < str.length; j++) {
    str.charAt(j) === char ? count++ : null;
  }
};
friquencyCount("p");
console.log("Original String:", str, "Friquency of p :", count);
// ====================================================================================================
// Capitalizing 1st later of each word of a scentence
let str = "apple is red";
let countOfWords = str.split(" ");

for (j = 0; j < countOfWords.length; j++) {
  str = str.replace(
    countOfWords[j],
    countOfWords[j].charAt(0).toUpperCase() + countOfWords[j].slice(1)
  );
}
console.log("Original String:", str, "Friquency of p :", str);
//   ================================================================================================================
// remove selected char from a string
let str = "apple is red";
console.log("Before :", str);
const removeChar = (char) => {
  for (j = 0; j < str.length; j++) {
    if (str.charAt(j) === char) str = str.replace(str.charAt(j), "");
  }
};
removeChar("e");
console.log("After :", str);
//   ===================================================================================================================
// Friquency of vowel in a string
let str = "apple is red";
let count = 0;
for (j = 0; j < str.length; j++) {
  if (
    str.charAt(j) === "a" ||
    str.charAt(j) === "e" ||
    str.charAt(j) === "i" ||
    str.charAt(j) === "o" ||
    str.charAt(j) === "u"
  )
    count++;
}
console.log("number of vowels :", count);

// ====================================================================================
// swapping of 2 string without using 3rd variable
let str1 = "apple";
let str2 = "ball";
console.log("Before =>> str1: ", str1, "str2: ", str2);
str1 = str1 + str2;
str2 = str1.substring(0, str1.length - str2.length);
str1 = str1.substring(str2.length);
console.log("After =>> str1: ", str1, "str2: ", str2);
// ================================================================================
// cont occurance of each char of a String
let str = "I am Shakti";
let tempStr = str.toLowerCase().replace(/\s/g, "");
let count = 0;

while (tempStr.length) {
  for (let i = 0; i < tempStr.length; i++) {
    if (tempStr.charAt(0) === tempStr.charAt(i)) count = count + 1;
  }
  console.log("Occurance of", tempStr.charAt(0), "is", count);
  tempStr = tempStr.replace(tempStr.charAt(0), "");
  count = 0;
}
// =======================================================================
// sortinga String in alphabetical order
let str = "shakti";
let charArr = [];
// charArr = str.toCharArray();
// str.split('').join(',')
// str.split('');
// [...str];
// Array.from(str);
// Object.assign([], str);
for (let i = 0; i < str.length; i++) {
  charArr[i] = str.charAt(i);
}
for (let i = 0; i < charArr.length; i++) {
  for (let j = 0; j < charArr.length; j++) {
    if (charArr[j] > charArr[i]) {
      let temp = charArr[i];
      charArr[i] = charArr[j];
      charArr[j] = temp;
    }
  }
}
console.log("The sorted string is : ");
for (let i = 0; i < charArr.length; i++) {
  console.log(charArr[i]);
}
// without using Array

for (let i = 1; i < str.length; i++) {
  let temp = str.charAt(i);
  let j = i - 1;

  while (j >= 0 && temp <= str.charAt(j)) {
    /* Move the elements greater than temp to one position ahead from their current position*/
    str = str.replace(str.charAt(j + 1), str.charAt(j));
    str = str.replace(str.charAt(j + 1), str.charAt(j));

    j = j - 1;
  }
  str = str.replace(str.charAt(j + 1), temp);
}

console.log("The sorted string is :========= ", str);

// =================================================================================
// check the string is palindrome or not
let flag = 0;
const palindromeChecker = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      flag = 1;
    }
  }
  if (flag === 0) console.log("The String is palindrome");
  else console.log("The String is not palindrome");
};
palindromeChecker("appppba");
// =======================================================================================
// check the strings are Anagram or not
let str1 = "shakti";
let str2 = "stakij";
if (str1.length !== str2.length) {
  console.log("Not an anagram");
  return;
}
str1 = str1.split("").sort().join("");
str2 = str2.split("").sort().join("");
if (str1 === str2) {
  console.log("It is anagram");
} else {
  console.log("Not an anagram");
}
//    =============================================================================================
// Reverse of the cherector of words of a scentence using stack
let str = "abcde uvwxyz";
let countOfWords = str.split(" ");
let reverseStr = "";
let stack = [];
let stack1 = [];

for (i = 0; i < countOfWords.length; i++) {
  for (j = 0; j < countOfWords[i].length; j++) {
    stack.push(countOfWords[i].charAt(j));
  }
  for (j = 0; j < countOfWords[i].length; j++) {
    reverseStr = reverseStr + stack.pop();
  }
}

console.log(reverseStr);
// =======================================================================================
// Friquency of char in a String using stack
let str = "apple";
let stack = [];
let count = 0;
for (let j = 0; j < str.length; j++) {
  stack.push(str.charAt(j));
}
const friquencyCount = (char) => {
  for (let j = 0; j < str.length; j++) {
    stack.pop() === char ? count++ : null;
  }
};
friquencyCount("p");
console.log("Original String:", str, "Friquency of p :", count);
// ====================================================================================================

// Capitalizing 1st later of each word of a scentence
let str = "apple is red";
let result;
let countOfWords = str.split(" ");
console.log("Before:", str);
for (let j = 0; j < countOfWords.length; j++) {
  let stack = [];
  let tempStack = [];
  let tempWord = "";

  for (let i = 0; i < countOfWords[j].length; i++) {
    stack.push(countOfWords[j].charAt(i));
  }
  for (let i = 0; i < countOfWords[j].length; i++) {
    let temp = stack.pop();
    stack.isEmpty
      ? (tempWord = tempWord + temp.toUpperCase())
      : (tempWord = tempWord + temp);
  }
  str = str.replace(countOfWords[j], tempWord);
}
console.log("After:", str);
//   =========================================================================================================
// remove selected char from a string using stack

let str = "apple is red";

let result = "";
console.log("Before :", str);
let stack = [];
for (i = str.length - 1; i >= 0; i--) {
  stack.push(str[i]);
}

const removeChar = (char) => {
  for (j = 0; j < str.length; j++) {
    let poppedChar = stack.pop();
    if (poppedChar !== char || poppedChar === "") result = result + poppedChar;
  }
};
removeChar("e");
console.log("After :", result);
//   ========================================================================================
// Friquency of vowel in a string using stack
let str = "apple is red";
let stack = [];
for (i = str.length - 1; i >= 0; i--) {
  stack.push(str[i]);
}
let count = 0;
for (j = 0; j < str.length; j++) {
  let poppedChar = stack.pop();
  if (
    poppedChar === "a" ||
    poppedChar === "e" ||
    poppedChar === "i" ||
    poppedChar === "o" ||
    poppedChar === "u"
  )
    count++;
}
console.log("number of vowels :", count);
// ===================================================================================================
// swapping of 2 string using stack
let str1 = "apple";
let str2 = "ball";
console.log("Before =>> str1: ", str1, "str2: ", str2);

let stack = [];
stack.push(str1);
stack.push(str2);

str1 = stack.pop();
str2 = stack.pop();

console.log("After =>> str1: ", str1, "str2: ", str2);
// ==========================================================================================
// count occurance of each char of a String using stack
let str = "I am Shakti";
let tempStr = str.toLowerCase().replace(/\s/g, "");
let stack = [];
for (i = tempStr.length - 1; i >= 0; i--) {
  stack.push(tempStr[i]);
}

while (stack.length) {
  let tempStack = [];
  let key = stack.pop();
  let count = 1;
  let stackLength = stack.length;
  for (let i = 0; i < stackLength; i++) {
    let poppedChar = stack.pop();
    if (poppedChar !== key) tempStack.push(poppedChar);
    else count++;
  }
  console.log("Occurance of char", key, "is :", count);
  stack = tempStack;
}
// ======================================================================================================
// check the string is palindrome or not using stack
let flag = 0;
let stack = [];
const palindromeChecker = (str) => {
  for (let i = 0; i < str.length; i++) {
    stack.push(str.charAt(i));
  }
  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== stack.pop()) {
      flag = 1;
    }
  }
  if (flag === 0) console.log("The String is palindrome");
  else console.log("The String is not palindrome");
};
palindromeChecker("qwewq");
