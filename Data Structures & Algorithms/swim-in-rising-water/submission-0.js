class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid) {
        const n = grid.length;
        const visited = Array.from({ length: n }, () => Array(n).fill(false));
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        
        // Yeh hamara main Min-Heap array hai jis mein saare raste save honge
        const heap = [];

        // Yeh hamara apna custom push function hai jo 'heap' array mein value daalta hai
        const push = (val) => {
            heap.push(val);
            let i = heap.length - 1;
            while (i > 0) {
                const p = Math.floor((i - 1) / 2);
                if (heap[p][0] <= heap[i][0]) break;
                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        };

        // Yeh hamara custom pop function hai jo 'heap' se sab se chota time nikalta hai
        const pop = () => {
            if (heap.length === 1) return heap.pop();
            const top = heap[0];
            heap[0] = heap.pop();
            let i = 0;
            while (true) {
                let left = 2 * i + 1;
                let right = 2 * i + 2;
                let smallest = i;

                if (left < heap.length && heap[left][0] < heap[smallest][0]) smallest = left;
                if (right < heap.length && heap[right][0] < heap[smallest][0]) smallest = right;
                if (smallest === i) break;

                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
            return top;
        };

        // Yahan hum apne custom push() function ko call kar ke 'heap' mein start point daal rahe hain
        push([grid[0][0], 0, 0]);
        visited[0][0] = true;

        while (heap.length > 0) {
            const [time, r, c] = pop();

            if (r === n - 1 && c === n - 1) {
                return time;
            }

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    // Yahan bhi custom push() function 'heap' array mein naya rasta daal raha hai
                    push([Math.max(time, grid[nr][nc]), nr, nc]);
                }
            }
        }
    }
}
