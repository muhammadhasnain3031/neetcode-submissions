class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
            let rows = grid.length;
            let cols = grid[0].length;
            let queue = [];
            let freshFruits = 0;
            for (let r =0; r<rows ; r++){
                for(let c=0;c<cols;c++){
                    if(grid[r][c]===2){
                        queue.push([r,c])
                    }
                    else if(grid[r][c]===1){
                        freshFruits++
                    }
                }
            }
            if(freshFruits===0) return 0;
            let minutes = 0;
            const directions = [
                [-1,0],
                [1,0],
                [0,-1],
                [0,1]
            ]
            while(queue.length > 0 && freshFruits > 0){
                let size = queue.length;
                for(let i=0;i<size;i++){
                    let [r,c]=queue.shift();
                    for(let [dr,dc ] of directions){
                        let nr = r + dr;
                        let nc = c + dc;
                        if(nr>=0 && nr < rows && nc >=0 && nc<cols && grid[nr][nc]===1                    ){
                            grid[nr][nc] = 2;
                            freshFruits--;
                            queue.push([nr,nc])
                        }}
                }
                minutes ++
            }
            return freshFruits === 0 ? minutes : -1;
    }
}
