class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = Array.from({ length: numCourses }, () => []);
        const inDegree = new Array(numCourses).fill(0);

        for (const [course, prereq] of prerequisites) {
            adj[prereq].push(course);
            inDegree[course]++;
        }

        const queue = [];
        for (let i = 0; i < numCourses; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        let completedCourses = 0;
        let head = 0;

        while (head < queue.length) {
            const curr = queue[head++];
            completedCourses++;

            for (const nextCourse of adj[curr]) {
                inDegree[nextCourse]--;
                if (inDegree[nextCourse] === 0) {
                    queue.push(nextCourse);
                }
            }
        }

        return completedCourses === numCourses;
    }
}
