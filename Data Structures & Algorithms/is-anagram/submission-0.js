class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // early return
        if (s.length !== t.length) return false;

        const obj1 = {};
        const obj2 = {};

        // create a map of {letter: value} for both word
        s.split("").forEach((letter) => {
            if (obj1[letter]) {
                obj1[letter]++;
            } else {
                obj1[letter] = 1;
            }
        });

        t.split("").forEach((letter) => {
            if (obj2[letter]) {
                obj2[letter]++;
            } else {
                obj2[letter] = 1;
            }
        });

        console.log(obj1, obj2);

        // Sort object keys and then json.stringify compare

        const sortedObject1 = this.sortObject(obj1);
        const sortedObject2 = this.sortObject(obj2);

        const isDeepEqual = JSON.stringify(sortedObject1) === JSON.stringify(sortedObject2);
        return isDeepEqual;

       
    }

 

    sortObject(obj) {
        const objKeys = Object.keys(obj);
        const sortedObjKeys = objKeys.sort();
        const newObj = {};
        sortedObjKeys.forEach((key) => {
            newObj[key] = obj[key];
        });
        return newObj;
    }
}
