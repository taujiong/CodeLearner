// 给 n 个整数，和一个 k，找出一个整数满足 n 个整数中恰好有 k 个整数小于该整数
let ques = [
  [6, 6, [1, 6, 6, 2, 1, 3]],
  [6, 3, [1, 6, 5, 2, 2, 5]],
];
let times = ques.length;
let n, k;
let arr;
let ans;
for (let time = 0; time < times; time++) {
  [n, k, arr] = ques[time];
  if (arr.length !== n || k > n) {
    console.log('NO');
    continue;
  }
  arr.sort();
  ans = arr[k - 1] + 1;
  if (ans <= n && ans >= 1) {
    console.log('YES');
    console.log(ans);
  } else {
    console.log('NO');
  }
}
