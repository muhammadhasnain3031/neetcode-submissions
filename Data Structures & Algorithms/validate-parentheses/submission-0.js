class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
    const stack = [];
    
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        
        if (char === ')' || char === '}' || char === ']') {
            
            const top = stack.pop();
            
          
            if (top !== pairs[char]) {
                return false;
            }
            
        } else {
            stack.push(char);
        }
    }
    
    
    return stack.length === 0;
}};