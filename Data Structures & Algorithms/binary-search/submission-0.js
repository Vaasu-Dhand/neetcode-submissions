class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        function binarySearch(nums, target, startIndex = 0, endIndex = nums.length - 1) {
            if (startIndex > endIndex) return -1;

            const mid = Math.floor((startIndex + endIndex) / 2);

            // Found value
            if (nums[mid] === target) {
                return mid;
            }

            // Search left side
            else if (nums[mid] > target) {
                return binarySearch(nums, target, startIndex, mid - 1);
            }

            return binarySearch(nums, target, mid + 1, endIndex);
        }

        return binarySearch(nums, target, 0, nums.length - 1);
    }
}
