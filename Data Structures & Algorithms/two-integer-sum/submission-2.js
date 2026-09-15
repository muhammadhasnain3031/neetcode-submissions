class Solution {
    twoSum(nums, target) {
        const noteBook = {}; 
        for (let i = 0; i < nums.length; i++) {
            const currentNumber = nums[i];
            const requiredNumber = target - currentNumber;
          
            if (requiredNumber in noteBook) {
                return [noteBook[requiredNumber], i];
            }
            
           
            noteBook[currentNumber] = i;
        }
    }
}
