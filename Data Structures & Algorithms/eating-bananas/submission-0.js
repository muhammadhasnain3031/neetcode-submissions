class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = Math.max(...piles);
        while(low < high){
            let mid = Math.floor((low + high)/2);
            let totalHours = 0;
            for(let pile of piles){
                totalHours += Math.ceil(pile / mid);
            }
            if(totalHours <= h){
                high = mid
            }
            else{
                low = mid +1
            }
        }
        return low;
    }
}
