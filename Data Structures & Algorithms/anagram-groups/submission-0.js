class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        
        for (let str of strs) {
            let sortedStr = str.split('').sort().join('');
            
            if (!map[sortedStr]) {
                map[sortedStr] = [];
            }
            
            
            map[sortedStr].push(str); 
        } 

        return Object.values(map);
    }
}

