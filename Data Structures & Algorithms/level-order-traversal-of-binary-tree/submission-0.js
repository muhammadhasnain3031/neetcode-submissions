/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root ) return [];
        let result = [];
        let queue = [root];
        while(queue.length > 0){
            let levelSize = queue.length;
            let currentLevel = [];
            for(let i = 0; i < levelSize; i++){
                let currentNode = queue.shift();
                currentLevel.push(currentNode.val);
                currentNode.left && queue.push(currentNode.left);
            currentNode.right && queue.push(currentNode.right)
            }
            
            result.push(currentLevel);
        }
        return result;
    }
}
