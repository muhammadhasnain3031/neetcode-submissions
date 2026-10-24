class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = [];
        candidates.sort((a,b)=>a-b)
        function findCombination(index,currentTarget,currentCombination)
        {
            if(currentTarget === 0 ){
                result.push([...currentCombination])
                return;
            }
            if(currentTarget < 0 || index===candidates.length) {
                return;
            }
            currentCombination.push(candidates[index])
            findCombination(index+1,currentTarget - candidates[index],currentCombination);
            currentCombination.pop();
            while(index+1 < candidates.length && candidates[index]===candidates[index+1] ){
                index ++
            }
            findCombination(index+1, currentTarget,currentCombination)
        }
        findCombination(0,target,[])
        return result;
    }
}
