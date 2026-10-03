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
        let current = head;
        while(current){
            oldToNew.set(current, new Node(current.val));
            current = current.next;
        }
        current = head;
        while(current){
            let copyNode = oldToNew.get(current);
            copyNode.next = oldToNew.get(current.next) || null;
            copyNode.random = oldToNew.get(current.random) || null;
            current = current.next;
        }
        return oldToNew.get(head)
    }
}
