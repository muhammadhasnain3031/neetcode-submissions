class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let s of strs) {
            // Har string ki length + "#" + string khud
            res += s.length + "#" + s;
        }
        return res;
    }

    /**
     * @param {string} s
     * @returns {string[]}
     */
    decode(s) {
        let res = [];
        let i = 0;

        while (i < s.length) {
            let j = i;
            while (s[j] !== '#') {
                j++;
            }

            let length = parseInt(s.substring(i, j));

            let startOfWord = j + 1;
            let endOfWord = startOfWord + length;
            res.push(s.substring(startOfWord, endOfWord));

            i = endOfWord;
        }

        return res;
    }
}

