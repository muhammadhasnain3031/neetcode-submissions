class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points) {
        const n = points.length;
        let totalDist = 0;
        let visited = new Array(n).fill(false);
        let minDist = new Array(n).fill(Infinity);
        minDist[0] = 0;
        for(let i =0; i<n; i++){
            let currNode = -1;
            for(let j=0; j<n; j++){
                if(!visited[j] && (currNode ===-1 || minDist[j] < minDist[currNode])){
                    currNode = j;
                }
            }
            visited[currNode] = true;
        totalDist += minDist[currNode];
        
        
        for(let nextNode=0; nextNode<n; nextNode++){
            if(!visited[nextNode]){
                const dist = Math.abs(points[currNode][0] - points[nextNode][0])+ Math.abs(points[currNode][1] - points[nextNode][1])
                if(dist < minDist[nextNode]){
                    minDist[nextNode] = dist;
                }
            }
        }}
        return totalDist;
    }
}
