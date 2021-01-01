/**
 * https://leetcode-cn.com/problems/can-place-flowers/
 * 简单，贪心算法
 */
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  for (let i = 0; i < flowerbed.length && n > 0;) {
    if (flowerbed[i] == 1) {
      i += 2;
    } else if (i == flowerbed.length - 1 || flowerbed[i + 1] == 0) {
      n--;
      i += 2;
    } else {
      i += 3;
    }
  }
  return n <= 0;
};

function officialSolution(flowerbed: number[], n: number): boolean {
  let prev = -1;
  let len = flowerbed.length;

  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 1) {
      if (prev < 0) {
        n -= Math.floor(i / 2);
      } else {
        n -= Math.floor((i - prev - 2) / 2);
      }

      if (n <= 0) {
        return true;
      }

      prev = i;
    }
  }

  if (prev < 0) {
    n -= (len + 1) / 2;
  } else {
    n -= (len - prev - 1) / 2;
  }

  return n <= 0;
}
