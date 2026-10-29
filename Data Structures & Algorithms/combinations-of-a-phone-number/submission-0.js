class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(!digits || digits.length ===0){
            return [];
        };
        const phoneMap = {
        '2': "abc",
        '3': "def",
        '4': "ghi",
        '5': "jkl",
        '6': "mno",
        '7': "pqrs",
        '8': "tuv",
        '9': "wxyz"
    };
    let result = [];
    function backTrack(index,currentString){
        if(currentString.length === digits.length){
            result.push(currentString)
            return;
        }
        let currentDigit = digits[index];
        let letter = phoneMap[currentDigit];
        for(let i=0;i<letter.length;i++){
            backTrack(index+1,currentString+letter[i])
        }
    }
    backTrack(0,'')
    return result;
    }
}
