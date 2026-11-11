class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const noteBook = new Map();
        for(let i =0; i < nums.length; i++){
        const currentNumber = nums[i];
        const requiredNumber = target - currentNumber;
        if(noteBook.has(requiredNumber)){
            return [noteBook.get(requiredNumber), i]
        }
        noteBook.set(currentNumber,i)
        }
    }
}
