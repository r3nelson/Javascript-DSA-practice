// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)

function validAnagram(str1, str2) {
  // check length is the same
  if (!(str1.length === str2.length)) return false;

  // check if string is the same
  if (str1 === str2) return true;

  // check frequency of letters in each string
  frequency_str1 = {};
  frequency_str2 = {};

  for (const char of str1) {
    const value = (frequency_str1[char] || 0) + 1;
    frequency_str1[char] = value;
  }

  // console.log(frequency_str1);

  for (const char of str2) {
    const value = (frequency_str2[char] || 0) + 1;
    frequency_str2[char] = value;
  }

  // console.log(frequency_str2);

  const sortedKeys1 = Object.keys(frequency_str1).sort();
  const sortedKeys2 = Object.keys(frequency_str2).sort();

  if (sortedKeys1.length !== sortedKeys2.length) return false;

  for (const key in sortedKeys1) {
    if (sortedKeys1[key] !== sortedKeys2[key]) return false;

    console.log(`${str1} and ${str2} are anagrams!:`);
    return true;
  }
}

validAnagram("amanaplanacanalpanama", "acanalmanplanpamana");
validAnagram("rat", "car");
validAnagram("anagram", "nagaram");
