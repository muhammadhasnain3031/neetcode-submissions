class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const n = edges.length;
        // 1 se n tak nodes hain, isliye n + 1 size ka array banaya
        const parent = Array.from({ length: n + 1 }, (_, i) => i);
        const rank = new Array(n + 1).fill(1);

        // Kisi bhi node ka asli root (boss) dhoondhne ka function
        const find = (node) => {
            let p = parent[node];
            while (p !== parent[p]) {
                // Path compression: tree ko chota aur fast karne ke liye
                parent[p] = parent[parent[p]];
                p = parent[p];
            }
            return p;
        };

        // Do nodes ko aapas mein jorne ka function
        const union = (n1, n2) => {
            const p1 = find(n1);
            const p2 = find(n2);

            // Agar dono ka boss pehle se same hai, to cycle ban gaya!
            if (p1 === p2) {
                return false;
            }

            // Chote group ko bare group ke neeche jor dein
            if (rank[p1] > rank[p2]) {
                parent[p2] = p1;
                rank[p1] += rank[p2];
            } else {
                parent[p1] = p2;
                rank[p2] += rank[p1];
            }
            return true;
        };

        // Har edge ko check karein
        for (const [u, v] of edges) {
            // Jahan union false return kare, wahi redundant (extra) edge hai
            if (!union(u, v)) {
                return [u, v];
            }
        }

        return [];
    }
}
