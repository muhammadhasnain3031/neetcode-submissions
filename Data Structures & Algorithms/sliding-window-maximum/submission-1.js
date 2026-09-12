class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let deque = [];

        for (let i = 0; i < nums.length; i++) {

            // 1. Window se bahar wala index remove
            if (deque.length > 0 && deque[0] < i - k + 1) {
                deque.shift();
            }

            // 2. Current value se choti values remove
            while (
                deque.length > 0 &&
                nums[deque[deque.length - 1]] < nums[i]
            ) {
                deque.pop();
            }

            // 3. Current index deque mein add
            deque.push(i);

            // 4. Window complete hone par maximum result mein add
            if (i >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result;
    }
}