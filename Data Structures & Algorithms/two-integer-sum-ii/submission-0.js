class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // start with a left and right pointer
        let rightPointer = numbers.length - 1;
        let leftPointer = 0;

        while (leftPointer <= rightPointer) {
            const leftValue = numbers[leftPointer];
            const rightValue = numbers[rightPointer];

            const sum = leftValue + rightValue;

            // if the sum of left and right number is > target
            // move the right pointer to left
            if (sum > target) {
                rightPointer--
            }

            // if the sum of is < target
            // move the left pointer to right
            if (sum < target) {
                leftPointer++
            }

            if (sum === target) {
                return [leftPointer+1, rightPointer+1];
            }
        }
    }
}
