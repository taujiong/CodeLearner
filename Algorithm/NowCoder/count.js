/**
 * https://www.nowcoder.com/practice/72c661d926494bd8a50608506915268c
 * 计时器
 * @param {number} start
 * @param {number} end
 */
function count(start, end) {
  console.log(start);
  let timer = setInterval(() => {
    start++;
    if (start <= end) {
      console.log(start);
    } else {
      clearInterval(timer);
    }
  }, 100);

  return {
    cancel() {
      clearInterval(timer);
    },
  };
}
