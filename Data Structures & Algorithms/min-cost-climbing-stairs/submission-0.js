class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let prev2 = 0; // dp[i-2]
        let prev1 = 0; // dp[i-1]

        for (let i = 2; i <= cost.length; i++) {
            const current = Math.min(
                prev1 + cost[i - 1],
                prev2 + cost[i - 2]
            );
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}