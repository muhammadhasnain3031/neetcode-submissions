class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        let freq = new Array(26).fill(0);
        for(let task of tasks){
            freq[task.charCodeAt(0)-65]++
        };
        let maxFreq = 0;
        for(let f of freq){
            maxFreq = Math.max(maxFreq,f)
        };
        let maxFreqCount = 0;
        for(let f of freq){
            if(f===maxFreq){
                maxFreqCount ++
            }
        }
        const minCycles = (maxFreq -1)*(n+1)+maxFreqCount;
        return Math.max(tasks.length,minCycles)
    }
}
