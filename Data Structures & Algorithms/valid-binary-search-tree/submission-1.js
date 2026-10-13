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
    isValidBST(root) {
        return this.validate(root,null,null)
    }
    validate(node,min,max){
        if(!node) return true;
        if((min !==null && node.val <=min)|| (max !== null && node.val >= max)) return false;
        return this.validate(node.left,min,node.val) &&
        this.validate(node.right,node.val,max)
    }
}
