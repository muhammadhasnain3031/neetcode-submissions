class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a,b)=>a-b);
        let result = [];
        function backTrack(i,subSet){
            if(i===nums.length){
                result.push([...subSet])
                return;
            }
            subSet.push(nums[i]);
            backTrack(i+1,subSet);
            subSet.pop();
            while(i+1<nums.length && nums[i]===nums[i+1]){
                i++
            }
            backTrack(i+1,subSet)
        }
        backTrack(0,[]);
        return result;
    }
}
