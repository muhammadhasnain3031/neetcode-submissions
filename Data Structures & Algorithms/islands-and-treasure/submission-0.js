class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        if(!grid || grid.length ===0) return;
        const ROWS = grid.length;
        const COLS =grid[0].length;
        const queue = [];
        const INF = 2147483647
        for(let r=0;r<ROWS;r++){
            for(let c=0;c<COLS;c++){
                if(grid[r][c]===0){
                    queue.push([r,c])
                }
            }
        }
        const directions = [
           [-1, 0], [1, 0], [0, -1], [0, 1]
        ]
        while(queue.length >0){
            const [r,c] = queue.shift();
            for(const [dr,dc] of directions){
                const row = r + dr;
                const col = c + dc;
                if (row >= 0 && row < ROWS && col >= 0 && col < COLS && grid[row][col] === INF){
             grid[row][col] = grid[r][c] +1
             queue.push([row,col])  
            }
            }
            
        }
    }
}
