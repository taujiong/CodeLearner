/**
 * https://www.nowcoder.com/practice/a3ded747e3884a3c86d09d88d1652e10
 * 获取 url 参数
 * @param {string} sUrl
 * @param {string} sKey
 */
function getUrlParam(sUrl, sKey) {
  const o = {};
  const queryString = sUrl.substring(sUrl.indexOf("?") + 1, sUrl.indexOf("#"));
  const params = queryString.split("&");
  for (const param of params) {
    const [key, value] = param.split("=");
    if (o[key] === undefined) {
      o[key] = value;
    } else {
      o[key] = [].concat(o[key], value);
    }
  }

  return sKey === undefined ? o : o[sKey] || "";
}
