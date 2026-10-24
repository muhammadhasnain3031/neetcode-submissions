class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let result = [];
        function findCombination(index,currentTarget,currentCombination)
        {
            if(currentTarget === 0){
                result.push([...currentCombination])
                return;
            }
            if(currentTarget < 0 || index === nums.length)  {
                return;
            }
            currentCombination.push(nums[index])
            findCombination(index, currentTarget - nums[index],currentCombination);
            currentCombination.pop();
            findCombination(index+1,currentTarget,currentCombination)


        }

        findCombination(0,target,[]);
        return result;
    }
}
