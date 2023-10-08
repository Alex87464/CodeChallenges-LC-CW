// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/description/

function anagrams(s, t) {
  const text1 = s.split("").sort().join("");
  const text2 = t.split("").sort().join("");

  console.log(text1 == text2);
  return text1 == text2;
}

anagrams("anagram", "nagaram");
