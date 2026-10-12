class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // Prefix sum problem

        // Stores the product of numbers from left to right
        const prefixSumArray = [];

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];

            if (i === 0) {
                prefixSumArray[0] = element;
            } else {
                const lastElementFromPrefix = prefixSumArray[i - 1];
                prefixSumArray[i] = nums[i] * lastElementFromPrefix;
            }
        }

        // Stores the product of numbers from right to left
        const postfixSumArray = [];

        for (let i = nums.length - 1; i >= 0; i--) {
            const element = nums[i];


            if (i === nums.length - 1) {
                postfixSumArray[nums.length - 1] = element;
            } else {
                const lastElementFromPostFix = postfixSumArray[i + 1];
                postfixSumArray[i] = nums[i] * lastElementFromPostFix;
            }
        }

        // Loop again and then grab the left value and grab tht eight vlaue and product them
        const output = [];
        for (let i = 0; i < nums.length; i++) {
            const leftVal = prefixSumArray[i - 1] ?? 1;
            const rightVal = postfixSumArray[i + 1] ?? 1;
            const value = leftVal * rightVal;
            output.push(value);
        }

        return output;
    }
}
