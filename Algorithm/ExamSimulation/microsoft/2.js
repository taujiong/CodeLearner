/**
 * @param {number} A
 * @param {number} B
 */
function solution(A, B) {
  const [shortStick, longStick] = A > B ? [B, A] : [A, B];

  // if there is an answer, it should be lower than this one
  let ans = Math.floor((A + B) / 4);

  // any of the three situation can make the square
  for (; ans > 0; ans--) {
    if (shortStick >= ans * 2) return ans;
    if (shortStick >= ans && longStick >= ans * 3) return ans;
    if (longStick >= ans * 4) return ans;
  }

  return 0;
}
