/**
 * https://www.nowcoder.com/practice/667dd00250d04d06989ed1b69102c9ab
 * 判断是否符合 USD 格式
 * @param {string} str
 */
function isUSD(str) {
  let usd = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
  return usd.test(str);
}
