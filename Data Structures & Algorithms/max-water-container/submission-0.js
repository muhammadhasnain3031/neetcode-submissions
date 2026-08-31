class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let left = 0;
        let right = heights.length - 1;
        while(left < right){
            let width = right - left;
             let currentHeight= Math.min(heights[left],heights[right]) 
            let area = width * currentHeight;
            maxArea = Math.max(maxArea,area);
            if(heights[left] < heights[right]){
                left ++;
            }
            else{
                right --;
            }
        }
        return maxArea;
    }
}
