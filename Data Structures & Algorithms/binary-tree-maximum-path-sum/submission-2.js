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
    maxPathSum(root) {
        let globalMax = -Infinity;
        function getGain(node){
            if(node === null) return 0;
            let leftGain = Math.max(getGain(node.left),0);
            let rightGain = Math.max(getGain(node.right),0);
            let currentMax = node.val + leftGain + rightGain;
            globalMax = Math.max(currentMax,globalMax);
            return node.val + Math.max(leftGain,rightGain)
        }
        getGain(root);
        return globalMax;
    }
}
