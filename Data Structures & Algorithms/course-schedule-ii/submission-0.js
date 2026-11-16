
class Solution {
    /**
         * @param {number} numCourses
              * @param {number[][]} prerequisites
                   * @return {number[]}
                        */
                            findOrder(numCourses, prerequisites) {

                                    // Step 1: Build adjacency list
                                            const adj = Array.from(
                                                        { length: numCourses },
                                                                    () => []
                                                                            );

                                                                                    // Step 2: Calculate indegree
                                                                                            const indegree = Array(numCourses).fill(0);

                                                                                                    for (const [course, prerequisite] of prerequisites) {
                                                                                                                adj[prerequisite].push(course);
                                                                                                                            indegree[course]++;
                                                                                                                                    }

                                                                                                                                            // Step 3: Add courses with indegree 0
                                                                                                                                                    const queue = [];

                                                                                                                                                            for (let i = 0; i < numCourses; i++) {
                                                                                                                                                                        if (indegree[i] === 0) {
                                                                                                                                                                                        queue.push(i);
                                                                                                                                                                                                    }
                                                                                                                                                                                                            }

                                                                                                                                                                                                                    // Step 4: BFS
                                                                                                                                                                                                                            const result = [];
                                                                                                                                                                                                                                    let front = 0;

                                                                                                                                                                                                                                            while (front < queue.length) {

                                                                                                                                                                                                                                                        const current = queue[front++];

                                                                                                                                                                                                                                                                    result.push(current);

                                                                                                                                                                                                                                                                                // Process dependent courses
                                                                                                                                                                                                                                                                                            for (const neighbor of adj[current]) {

                                                                                                                                                                                                                                                                                                            indegree[neighbor]--;

                                                                                                                                                                                                                                                                                                                            if (indegree[neighbor] === 0) {
                                                                                                                                                                                                                                                                                                                                                queue.push(neighbor);
                                                                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                                                            // Step 5: Cycle detection
                                                                                                                                                                                                                                                                                                                                                                                                    if (result.length === numCourses) {
                                                                                                                                                                                                                                                                                                                                                                                                                return result;
                                                                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                                                                                return [];
                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                                                                                                                                                    
