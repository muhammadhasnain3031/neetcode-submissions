class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
           // for making rows and cols
            let rows = grid.length;
            let cols = grid[0].length;
            // for storing rotten fruits
            let queue = [];
            // for storing 1 means fresh  fruits
            let freshFruits = 0;
            // loop for getting fresh and rotten fruits
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
            // if all fruits is rotten than return 0
            if(freshFruits===0) return 0;
            // starting time is zero
            let minutes = 0;
            // setting directions
            const directions = [
                [-1,0],
                [1,0],
                [0,-1],
                [0,1]
            ]
            // loop will run untill rotten fruits and fresh fruits is zero
            while(queue.length > 0 && freshFruits > 0){
                let size = queue.length;
                for(let i=0;i<size;i++){
                    // getting location of rotten fruits
                    let [r,c]=queue.shift();
                    // now moving in all direction of rotten fruits
                    for(let [dr,dc ] of directions){
                        let nr = r + dr;
                        let nc = c + dc;
                        // conditions for making fresh fruits to rotten fruits
                        if(nr>=0 && nr < rows && nc >=0 && nc<cols && grid[nr][nc]===1                    ){
                            grid[nr][nc] = 2;
                            freshFruits--;
                            queue.push([nr,nc])
                        }}
                }
                // after converting each fresh fruit we increase time by one 
                minutes ++
            }
            // if there is no fresh fruit than return -1
            return freshFruits === 0 ? minutes : -1;
    }
}
