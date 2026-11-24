class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = new Map();
        for(const [from, to] of tickets){
            if(!adj.has(from)){
                adj.set(from,[])
            }
            adj.get(from).push(to)
        }
        for(const destinations of adj.values()){
            destinations.sort().reverse()
        }
        const result = [];
        const dfs = (airport)=>{
            const destinations = adj.get(airport);
            while(destinations && destinations.length > 0){
                const nextAirport = destinations.pop();
                dfs(nextAirport)
            }
            result.push(airport)
        }
        dfs('JFK');
        return result.reverse()
    }
}
