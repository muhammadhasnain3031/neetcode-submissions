class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !==n-1)
        return false;
        const adj = Array.from({length : n}, ()=>[]);
        for(let [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u)
        }
        const visited = new Set();
        const dfs = (node)=>{
            visited.add(node);
            for(const neighbor of adj[node]){
                if(!visited.has(neighbor)){
                    dfs(neighbor)
                }
            }
        }
        dfs(0);
        return visited.size===n;
    }
}
