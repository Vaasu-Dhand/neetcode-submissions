class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const sArray = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("");

        // let left = 0
        let right = sArray.length - 1;
        for (let left = 0; left < sArray.length / 2; left++) {
            const leftValue = sArray[left];
            const rightValue = sArray[right];
            console.log({ leftValue, rightValue });
            if (leftValue !== rightValue) {
                return false;
            }
            right--
        }
        return true;
    }
}
