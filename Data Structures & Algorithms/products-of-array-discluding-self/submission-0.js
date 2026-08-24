class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n);
        
        // Prefix Loop
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            output[i] = prefix;
            prefix *= nums[i];
        }
        
        // Suffix Loop
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            output[i] *= suffix;
            suffix *= nums[i];
        }
        
        return output;
    }
}


