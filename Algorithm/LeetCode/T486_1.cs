using System;

namespace LeetCode
{
    // 预测赢家
    public class T486_1
    {
        public bool PredictTheWinner(int[] nums)
        {
            var length = nums.Length;
            var dp = new int[length, length];
            for (int i = 0; i < length; i++)
            {
                dp[i, i] = nums[i];
            }

            for (int i = length - 2; i >= 0; i--)
            {
                for (int j = i + 1; j < length; j++)
                {
                    dp[i, j] = Math.Max(nums[i] - dp[i + 1, j], nums[j] - dp[i, j - 1]);
                }
            }

            return dp[0, length - 1] >= 0;
        }
    }
}
