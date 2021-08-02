/**
 * 变量命名方式的转换，Pascal，大驼峰转换成小驼峰
 * @param {string} name
 */
function format(name) {
  const arr = split(name);
  if (arr.length <= 1) return arr.join();
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let str = arr[i];
    ans = ans + str[0].toUpperCase() + str.slice(1);
  }
  return ans;
}

function split(name) {
  let ans = [];
  if (name.indexOf('_') != -1) {
    ans = name.split('_');
  } else {
    let temp = name[0];
    for (let i = 1; i < name.length; i++) {
      let char = name[i];
      temp += char;
      if (char >= 'A' && char <= 'Z') {
        ans.push(temp.slice(0, -1));
        temp = char;
      }
    }
    ans.push(temp.slice());
  }
  return ans.map((s) => s.toLowerCase());
}
