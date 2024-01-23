// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

const findLongestSubstring = (str) => {
  let maxLength = 0;
  let leftPointer = 0;
  let rightPointer = 0;
  distinct_chars = new Set();

  if (str.length === 0) return 0;

  while (rightPointer < str.length) {
    if (!distinct_chars.has(str[rightPointer])) {
      distinct_chars.add(str[rightPointer]);
      rightPointer++;
      maxLength = Math.max(maxLength, distinct_chars.size);
    } else {
      distinct_chars.delete(str[leftPointer]);
      leftPointer++;
    }
  }
  console.log(maxLength);
  return maxLength;
};

findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
