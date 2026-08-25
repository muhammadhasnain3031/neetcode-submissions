class Solution {
    isValidSudoku(board) {
        let seen = new Set();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let num = board[r][c];

                if (num !== '.') {
                    let rowKey = `row-${r}-${num}`;
                    let colKey = `col-${c}-${num}`;
                    let boxKey = `box-${Math.floor(r / 3)}-${Math.floor(c / 3)}-${num}`;

                    if (seen.has(rowKey) || seen.has(colKey) || seen.has(boxKey)) {
                        return false;
                    }

                    seen.add(rowKey);
                    seen.add(colKey);
                    seen.add(boxKey);
                }
            }
        }

        return true;
    }
}
