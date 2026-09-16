class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for (let str of strs) {
            const count = new Array(26).fill(0);
            
         
            for (let char of str) {
               
                count[char.charCodeAt(0) - 97]++;
            }
            
          
            let key = count.join(',');
            
            map[key] = map[key] || [];
            map[key].push(str);
        }

        return Object.values(map);
    }
}
