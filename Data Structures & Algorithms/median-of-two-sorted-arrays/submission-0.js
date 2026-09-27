class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;
        if(A.length > B.length){
            A = nums2;
            B = nums1;
        }
        let left = 0;
        let right = A.length;
        const total = A.length + B.length;
        const half = Math.floor((total + 1 )/2);
        
        while(left<=right){
            let i = Math.floor((left + right )/2);
            let j = half - i;
            const Aleft = (i>0)?A[i-1]: -Infinity;
            const Aright = (i<A.length)?A[i]:Infinity;

            const Bleft = (j>0)?B[j-1]:-Infinity;
            const Bright = (j<B.length)?B[j]:Infinity;
            if(Aleft<=Bright && Bleft <= Aright){
                if(total % 2 !==0){
                    return Math.max(Aleft,Bleft)
                }
                return (Math.max(Aleft, Bleft)+Math.min(Aright , Bright))/2
            }
            else if (Aleft > Bright){
                right = i -1;
            }
            else{
                left = i +1;
            }
        }
        return 0.0;
    }
}
