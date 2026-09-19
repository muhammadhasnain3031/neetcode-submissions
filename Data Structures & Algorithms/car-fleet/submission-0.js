class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let n = position.length;
        let cars = [];
        for(let i = 0; i < n; i++){
            cars.push({
                pos:position[i],
                time:(target-position[i])/speed[i]
            })
        }
        cars.sort((a,b)=>b.pos-a.pos)
        let stack = [];
        for(let i =0; i < n; i++){
            let currentTime = cars[i].time;
            stack.push(currentTime);
            if(stack.length >= 2 && stack[stack.length-1]<=stack[stack.length-2])
            stack.pop();
        }
        return stack.length;

    }

}