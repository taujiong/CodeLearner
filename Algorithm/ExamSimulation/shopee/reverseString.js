/**
 * 原地反转数组
 * @param {string[]} s
 */
function reverseString(s) {
  if (s.length <= 1) return s;
  let front = 0,
    end = s.length - 1;
  while (front < end) {
    let temp = s[front];
    s[front] = s[end];
    s[end] = temp;
    front++;
    end--;
  }

  return s;
}
