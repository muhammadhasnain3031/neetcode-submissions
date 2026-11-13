class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        let rows = heights.length;
        let cols = heights[0].length;

        let pacific = Array.from(
            { length: rows },
            () => Array(cols).fill(false)
        );

        let atlantic = Array.from(
            { length: rows },
            () => Array(cols).fill(false)
        );

        // DFS function
        function dfs(row, col, visited) {

            visited[row][col] = true;

            let directions = [
                [-1, 0],
                [1, 0],
                [0, 1],
                [0, -1]
            ];

            for (let [dr, dc] of directions) {

                let newRow = row + dr;
                let newCol = col + dc;

                if (
                    newRow < 0 ||
                    newCol < 0 ||
                    newRow >= rows ||
                    newCol >= cols
                ) {
                    continue;
                }

                if (visited[newRow][newCol]) {
                    continue;
                }

                if (
                    heights[newRow][newCol] >=
                    heights[row][col]
                ) {
                    dfs(newRow, newCol, visited);
                }
            }
        }

        // Pacific: Top row
        for (let col = 0; col < cols; col++) {
            dfs(0, col, pacific);
        }

        // Pacific: Left column
        for (let row = 0; row < rows; row++) {
            dfs(row, 0, pacific);
        }

        // Atlantic: Bottom row
        for (let col = 0; col < cols; col++) {
            dfs(rows - 1, col, atlantic);
        }

        // Atlantic: Right column
        for (let row = 0; row < rows; row++) {
            dfs(row, cols - 1, atlantic);
        }

        // Find common cells
        let result = [];

        for (let row = 0; row < rows; row++) {

            for (let col = 0; col < cols; col++) {

                if (
                    pacific[row][col] &&
                    atlantic[row][col]
                ) {
                    result.push([row, col]);
                }
            }
        }

        return result;
    }
}