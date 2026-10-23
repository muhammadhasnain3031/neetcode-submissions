class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = [[]];
        for(let num of nums){
            let currentLength = result.length;
            for(let i = 0;i<currentLength;i++){
                let newSubSet = [...result[i], num];
                result.push(newSubSet)
                
            }
        }
        return result;
    }
}
