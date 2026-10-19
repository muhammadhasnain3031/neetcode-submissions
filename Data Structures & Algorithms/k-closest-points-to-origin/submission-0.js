class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // 1. Array.sort() use karke saare points ko unke distance^2 ke hisab se sort kar do
        points.sort((a, b) => {
            let distA = a[0] * a[0] + a[1] * a[1];
            let distB = b[0] * b[0] + b[1] * b[1];
            return distA - distB; // Chote se bada order (Ascending)
        });

        // 2. .slice() ke zariye shuruat ke k sabse chote (closest) points nikal kar return kar do
        return points.slice(0, k);
    }
}
