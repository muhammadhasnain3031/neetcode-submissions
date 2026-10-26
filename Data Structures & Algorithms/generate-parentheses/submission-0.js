class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let result = [];
        function backTrack(currentString,openCount,closeCount){
            if(currentString.length === 2 * n){
                result.push(currentString)
                return;
            }
            if(openCount < n){
                backTrack(currentString+'(',openCount+1,closeCount)
            }
            if(closeCount < openCount){
                backTrack(currentString+')',openCount,closeCount+1)
            }
        }
        backTrack('',0,0)
        return result;
    }
}
