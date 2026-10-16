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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) 
    {
        let inMap = new Map();
        inorder.forEach((val,i)=>inMap.set(val,i));
        let preIdx = 0;
        function build(left,right){
            if(left > right ) return null;
            const rootVal = preorder[preIdx++];
            const root = new TreeNode(rootVal);
            const mid = inMap.get(rootVal);
            root.left = build(left,mid -1);
            root.right = build(mid+1,right)
            return root;
        }
        return build(0, inorder.length-1)
        
    }
}
