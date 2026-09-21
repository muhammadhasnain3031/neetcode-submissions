class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let n = heights.length;
        let maxArea = 0;
        let stack = [];
        for(let i=0; i<=n; i++){
            let currentHeight = (i===n)?0:heights[i];
            while(stack.length>0 && heights[stack[stack.length-1]]>currentHeight){
                let height = heights[stack.pop()];
                let width = (stack.length===0)? i:i-stack[stack.length-1]-1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }
        return maxArea;
    }
}
