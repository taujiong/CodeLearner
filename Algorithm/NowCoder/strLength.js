/**
 * https://www.nowcoder.com/practice/e436bbc408744b73b69a8925fac26efc
 * @param {string} s
 * @param {boolean} bUnicode255For1
 */
function strLength(s, bUnicode255For1) {
  if (bUnicode255For1) return s.length;

  let ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.codePointAt(i) > 255) ans += 2;
    else ans += 1;
  }

  return ans;
}
