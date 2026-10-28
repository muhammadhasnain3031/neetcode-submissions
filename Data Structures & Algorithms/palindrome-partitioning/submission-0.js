class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let result = [];
        let subSet = [];
        function backTrack(start){
            if(start===s.length){
                result.push([...subSet])
                return;
            }
            for(let end = start;end<s.length;end++){
                let str = s.slice(start,end+1);
                if(isPalindrome(str)){
                    subSet.push(str)
                    backTrack(end+1);
                    subSet.pop()
                }
            }
        }
        function isPalindrome(str){
            return str===str.split('').reverse().join('')
        }
        backTrack(0);
        return result;
    }
}
