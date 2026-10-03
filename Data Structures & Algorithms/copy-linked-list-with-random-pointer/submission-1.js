// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(!head) return null;
        let oldToNew = new Map();
        let curr = head;
        while(curr !==null){
            oldToNew.set(curr, new Node(curr.val));
            curr = curr.next;
        }
        curr = head;
        while(curr !==null){
            let copyNode = oldToNew.get(curr);
            copyNode.next = oldToNew.get(curr.next) || null;
            copyNode.random = oldToNew.get(curr.random) || null;
            curr = curr.next;

        }
        return oldToNew.get(head);
    }
}
