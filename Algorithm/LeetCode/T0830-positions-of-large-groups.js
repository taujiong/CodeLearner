/**
 * https://leetcode-cn.com/problems/positions-of-large-groups/
 * 简单
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    const ret = [];
    const n = s.length;
    let sameCount = 1;
    for (let i = 0; i < n; i++) {
        if (i === n - 1 || s[i] !== s[i + 1]) {
            if (sameCount >= 3) {
                ret.push([i - sameCount + 1, i]);
            }
            sameCount = 1;
        } else {
            sameCount++;
        }
    }
    return ret;
};
