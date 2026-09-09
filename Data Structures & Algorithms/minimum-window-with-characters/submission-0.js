class Solution {
    minWindow(s, t) {
        if (s.length < t.length) return "";

        let tMap = {};
        for (let char of t) {
            tMap[char] = (tMap[char] || 0) + 1;
        }

        let windowMap = {};
        let have = 0;
        let need = Object.keys(tMap).length;

        let res = [-1, -1];
        let resLen = Infinity;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];
            windowMap[char] = (windowMap[char] || 0) + 1;

            if (tMap[char] && windowMap[char] === tMap[char]) {
                have++;
            }

            while (have === need) {
                if ((right - left + 1) < resLen) {
                    res = [left, right];
                    resLen = right - left + 1;
                }

                let leftChar = s[left];
                windowMap[leftChar]--;

                if (tMap[leftChar] && windowMap[leftChar] < tMap[leftChar]) {
                    have--;
                }
                left++;
            }
        }

        return resLen === Infinity ? "" : s.substring(res[0], res[1] + 1);
    }
}
