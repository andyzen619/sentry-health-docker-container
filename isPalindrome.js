/**
 * Returns true if string is pallindrome and false if otherwise.
 * @param {*} string The string to be checked.
 */
const isPallindrome = (string) => {

  //Check string type
  if (typeof string !== "string") {
    return "Not a string";
  }

  /**
   * Recusively iterates through string to check for palindrome.
   * @param {*} length This keeps track of when we need to stop.
   * @param {*} string This keeps track of our progress.
   */
  const isPallindromeRecursive = (length, string) => {
    if (length <= 1) {
      return "Is a palindrome!";
    }
    if (string[0] !== string[length - 1]) {
      return "Not a palindrome!";
    }
    const nextString = string.substring(1, length - 1);
    return isPallindromeRecursive(nextString.length, nextString);
  };

  //removes all non alphabe characters and converts to all lowercase.
  const trimmedString = string.replace(/[^0-9a-z]/gi, '').toLocaleLowerCase()
  return isPallindromeRecursive(trimmedString.length, trimmedString);
};

//Tests
const tests = [
  "madam", //true
  "Amore, Roma", //true
  "hey", //false
  "ab", //false
  "aa", //true
  "a", //true
  "", //true
  1, //not a 
];
tests.forEach((string) => {
  console.log(`${string}: ${isPallindrome(string)}`);
});
