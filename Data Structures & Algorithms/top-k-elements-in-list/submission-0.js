class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        for(let num of nums){
            map[num] = (map[num]||0) +1;
        }
        let sorted = Object.keys(map).sort((a,b)=>map[b]-map[a]);
        return sorted.slice(0, k).map(Number)
    }
}
