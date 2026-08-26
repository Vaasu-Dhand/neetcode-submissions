class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seenArray = [];

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            console.log(num);
            if (seenArray.includes(num)) {
                return true;
            } else {
                seenArray.push(num);
            }
        }

        return false
    }
}
