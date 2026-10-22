class MedianFinder {
    constructor() {
        this.arr = [];
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        let left = 0;
        let right = this.arr.length;
        while(left < right){
            let mid = Math.floor((left + right)/2);
            if(this.arr[mid] < num){
                left = mid +1;
            }
            else{
                right = mid;
            }
        }
        this.arr.splice(left,0,num)
    }

    /**
     * @return {number}
     */
    findMedian() {
        let len = this.arr.length;
        if(len %2!==0){
            return this.arr[Math.floor(len/2)]
        }
        else{
            return( this.arr[(len/2 - 1)] + this.arr[len/2]) / 2;
        }
    }
}
