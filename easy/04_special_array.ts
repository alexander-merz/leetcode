/**
 * You are given an array nums of non-negative integers.
 * nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
 * Notice that x does not have to be an element in nums.
 * Return x if the array is special, otherwise, return -1.
 * It can be proven that if nums is special, the value for x is unique.
 *
 * Time: O(N)
 * Space: O(N)
 */
function specialArray(nums: number[]): number {
  const sorted = [...nums].sort((a, b) => a - b);

  let result = sorted.length;
  let index = sorted.length - 1;
  let counter = 0;

  while (index >= 0) {
    if (sorted[index] >= result) {
      counter++;
      index--;
      continue;
    }

    if (counter === result) {
      return counter;
    } else {
      result--;
    }
  }

  if (result === 0 || result !== counter) return -1;

  return result;
}
