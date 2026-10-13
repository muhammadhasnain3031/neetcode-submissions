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
     * @return {number}
     */
    goodNodes(root,maxSoFar = Number.MIN_SAFE_INTEGER) {
        // if root is null
       if(!root) return 0;
       // to find good nodes we check if current root value is greater than or equal to maxSoFar
       let isGood = root.val >= maxSoFar;
       // we get currentMax by comparing both current root value and maxSoFar
       let currentMax = Math.max(root.val, maxSoFar);

       return isGood + this.goodNodes(root.left,currentMax)+this.goodNodes(root.right, currentMax)
       }
}
