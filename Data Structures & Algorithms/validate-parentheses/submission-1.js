class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // Stack

        const openings = ["{", "[", "("];
        const closings = ["}", "]", ")"];

        const map = {
            "{": "}",
            "[": "]",
            "(": ")",
        };

        const stack = [];

        // "[]"

        const sArray = s.split("");

        for (let i = 0; i < sArray.length; i++) {
            const element = sArray[i];
            console.log(stack);
            if (openings.includes(element)) {
                console.log("is opening");
                stack.push(element);
                // If it an opening, push it in stack
            } else if (closings.includes(element)) {
                console.log("is closing");
                // if it is a closing, check the stack and validate
                const elementAtLast = stack.pop();
                console.log({ elementAtLast });
                // need a way to ensure that it matches this element
                if (map[elementAtLast] === element) {
                    continue;
                } else {
                    return false;
                }
            }
        }

        console.log(sArray);
                return stack.length === 0;

    }
}
