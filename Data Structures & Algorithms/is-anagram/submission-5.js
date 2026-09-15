class Solution {
    isAnagram(s, t) {
        
        if (s.length !== t.length) return false;

        const countMap = {};

        
        for (let char of s) {
            countMap[char] = (countMap[char] || 0) + 1;
        }

       
        for (let char of t) {
            if (!countMap[char]) {
                return false; 
            }
            countMap[char]--;
        }

        return true;
    }
}
