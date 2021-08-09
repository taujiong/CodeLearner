// 给定一个整数序列 A，对于每一个索引 i，找出满足条件的序列 prev，满足
// 1 <= j < i, A[j] < A[i] 条件下最大的 A[j]
// 计算 prev[i] * i 的和
const numLen = read_line();
const arr = read_line().split(' ').map(Number);
let ans = 0;
for (let i = 1; i < numLen; i++) {
  let mx = -Infinity;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i] && mx < arr[j]) mx = arr[j];
  }
  ans += mx * (i + 1);
}
print(ans);
