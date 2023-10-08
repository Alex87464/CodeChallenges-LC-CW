// 1. Two Sum
// https://leetcode.com/problems/two-sum/description/

function twoSum(nums, target) {

    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in numIndices) {
            return [numIndices[complement], i];
        }

        numIndices[nums[i]] = i;
    }

    // If no solution is found, return an empty array or handle the error as needed.
    return [];
}

twoSum([2,7,11,15], 9);