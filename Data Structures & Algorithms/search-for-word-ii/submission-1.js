class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        // phase 1---trie
        let root = new TrieNode();
        for (const word of words) {
            let node = root;
            for (const letter of word) {
                if (!node.children[letter]) {
                    node.children[letter] = new TrieNode();
                }
                node = node.children[letter];
            }
            node.isEnd = true;
        }

        // phase 2---dfs
        const found = new Set();
        const dfs = (row, col, node, path) => {
            if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;
            const letter = board[row][col];
            if (letter === '#') return;
            if (!node.children[letter]) return;
            node = node.children[letter];
            path = path + letter;
            if (node.isEnd) {
                found.add(path);
            }
            board[row][col] = '#';
            dfs(row + 1, col, node, path);
            dfs(row - 1, col, node, path);
            dfs(row, col + 1, node, path);
            dfs(row, col - 1, node, path);
            board[row][col] = letter;
        };

        // phase 3---har cell se dfs shuru
        for (let r = 0; r < board.length; r++) {
            for (let c = 0; c < board[0].length; c++) {
                dfs(r, c, root, "");
            }
        }

        return [...found];
    }
}