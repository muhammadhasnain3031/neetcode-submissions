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
     * @return {boolean}
     */
    isBalanced(root) {
        function check(node){
            if(node === null){
                return 0;
            }
            let leftH = check(node.left);
            let rightH = check(node.right);
            if(leftH === -1 || rightH === -1 || Math.abs(leftH-rightH)>1){
                return -1;
            }
            return Math.max(leftH,rightH)+1
        }
        return check(root) !== -1;
    }
}
