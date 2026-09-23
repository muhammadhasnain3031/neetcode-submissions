class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if(!matrix===0 || matrix.length===0 || matrix[0]===0){
            return false;
        }
        let rows = matrix.length;
        let cols = matrix[0].length;

        let left = 0;
        let right = (rows * cols ) - 1;

        while(left <= right ){
                    let mid = Math.floor((left+right)/2)
            let rowIdx = Math.floor(mid/cols);
            let colIdx = mid % cols;
            let midElement = matrix[rowIdx][colIdx];
            if(midElement === target){
                return true;
            }
            else if (midElement < target){
                left = mid +1;
            }
            else{
                right = mid -1;
            }
        } 
        return false;     

    }
}
