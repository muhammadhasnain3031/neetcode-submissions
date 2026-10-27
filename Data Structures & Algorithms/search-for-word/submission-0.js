class Solution {
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        const dfs = (r, c, index) => {
            // Base Case: Agar poora word mil gaya hai
            if (index === word.length) return true;

            // Boundary checks aur letter match check
            if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index]) {
                return false;
            }

            // Cell ko 'visited' mark karne ke liye temporary change karein
            const temp = board[r][c];
            board[r][c] = '#';

            // 4 directions ma check karein (Up, Down, Left, Right)
            const found = dfs(r + 1, c, index + 1) ||
                          dfs(r - 1, c, index + 1) ||
                          dfs(r, c + 1, index + 1) ||
                          dfs(r, c - 1, index + 1);

            // Backtrack: Cell ko wapas uski purani halat ma le aayein
            board[r][c] = temp;

            return found;
        };

        // Poore board par loop chala kar starting letter dhoondein
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === word[0] && dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}

// --- CODE KO CHALANE KA TAREEQA (TEST CASE) ---

const solver = new Solution();

// Hum ne aik chota sa grid banaya
const myBoard = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

// Jo word dhoondna hai
const myWord = "ABCCED";

// Code run kiya aur result print karwaya
const result = solver.exist(myBoard, myWord);
console.log("Kya word grid ma majood hai? ->", result); 
// Output: True aana chahye
