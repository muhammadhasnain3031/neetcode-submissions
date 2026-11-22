class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times, n, k) {
        const adj = new Map();
        for(let i =1; i<= n;i++){
            adj.set(i,[])
        };
        for(const [u,v,w] of times){
            adj.get(u).push([v,w])
        };
        const minHeap = new MinPriorityQueue((item)=>item[0]);
        minHeap.enqueue([0,k]);
        const visited = new Set();
        let maxTime = 0;
        while(!minHeap.isEmpty()){
            const [time,node] = minHeap.dequeue();
            if(visited.has(node)) continue;
            visited.add(node);
            maxTime = Math.max(maxTime, time);
            const neighbors = adj.get(node);
            for(const [nextNode, edgeTime] of neighbors){
                if(!visited.has(nextNode)){
                    minHeap.enqueue([time + edgeTime , nextNode])
                }
            }

        }
        return visited.size === n ? maxTime : -1;
    }
}
