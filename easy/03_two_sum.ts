/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Pattern: Frequence Counter
 * Time: O(N)
 * Space: O(N)
 */
type Index = number;
function twoSum(nums: number[], target: number): [Index, Index] | [] {
  if (nums.length < 2) return [];

  if (nums[0] + nums[1] === target) return [0, 1];

  let numIndexMap = new Map<number, Index>([
    [nums[0], 0],
    [nums[1], 1],
  ]);

  for (let i = 2; i < nums.length; i++) {
    if (numIndexMap.has(target - nums[i])) {
      return [i, numIndexMap.get(target - nums[i])!];
    }
    numIndexMap.set(nums[i], i);
  }

  return [];
}
