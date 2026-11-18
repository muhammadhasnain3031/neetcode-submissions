class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = Array.from({length : n}, ()=>[]);
        for(const [u,v] of edges){
            adj[u].push(v);
            adj[v].push(u);
        };
        let completed = 0;
        const visited = new Array(n).fill(false);
        const dfs = (node)=>{
            visited[node] = true;
            for(let neighbor of adj[node]){
                if(!visited[neighbor]){
                    dfs(neighbor)
                }
            }
        };
        for(let i =0; i< n; i++){
            if(!visited[i]){
                completed++;
                dfs(i)
            }
        }
        return completed;

    }
}
