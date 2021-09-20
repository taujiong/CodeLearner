/**
 * @param {number[]} A
 * @param {number} X
 * @param {number} Y
 */
function solution(A, X, Y) {
  const len = A.length;
  let ans = Infinity;
  const totalEneryCost = A.reduce((a, b) => a + b); // total energy of previous use

  /**
   * @param {number} index num index in A
   * @param {number} totalCost current total cost for the install solution from zero to index
   * @param {number} currentEnergy current total energy for the install solution from zero to index
   * @param {number} restTotalEnergy if all the others install type B, tthe amount of energy they can save
   */
  const dfs = (index, totalCost, currentEnergy, restTotalEnergy) => {
    if (index === len) {
      // now, we get a solution, check it
      if (currentEnergy > 0) return; // not situable
      if (totalCost < ans) ans = totalCost; // update the ans
      return;
    }

    // cut the branch: even if all the others install type B, it remains not suitable
    if (currentEnergy > restTotalEnergy) return;

    const energyCost = A[index];
    // not install
    dfs(index + 1, totalCost, currentEnergy + energyCost, restTotalEnergy - energyCost);
    // install type A
    dfs(index + 1, totalCost + X, currentEnergy, restTotalEnergy - energyCost);
    // install type B
    dfs(index + 1, totalCost + Y, currentEnergy - A[index], restTotalEnergy - energyCost);
  };

  dfs(0, 0, 0, totalEneryCost);
  return ans;
}
