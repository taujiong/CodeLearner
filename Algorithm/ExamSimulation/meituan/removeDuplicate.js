// 给定一个字符串，删除空格以及重复的数
let str = read_line();
let ans = '';
let prev = str[0];
for (let i = 1; i < str.length; i++) {
  if (str[i] === prev || str[i] === '') continue;
  ans += str[i];
  prev = str[i];
}
print(ans);
