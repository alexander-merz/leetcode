/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Pattern: Frequence Counter
 * Time: O(N)
 * Space: O(N)
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let counter = {};

  for (let i = 0; i < s.length; i++) {
    counter[s[i]] = (counter[s[i]] || 0) + 1;
  }

  for (let j = 0; j < t.length; j++) {
    if (!counter[t[j]]) return false;
    counter[t[j]] -= 1;
  }

  return true;
}
