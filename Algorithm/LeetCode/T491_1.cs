using System;
using System.Collections.Generic;

namespace LeetCode
{
    // 递增子序列
    public static class T491
    {
        private static IList<int> TempList { get; set; } = new List<int>();
        private static IList<IList<int>> Result { get; set; } = new List<IList<int>>();

        public static IList<IList<int>> FindSubsequences(int[] nums)
        {
            Dfs(0, Int32.MinValue, nums);
            return Result;
        }

        private static void Dfs(int currentIndex, int lastNum, int[] nums)
        {
            if (currentIndex == nums.Length)
            {
                if (TempList.Count > 1)
                {
                    Result.Add(new List<int>(TempList));
                }

                return;
            }

            if (nums[currentIndex] >= lastNum)
            {
                TempList.Add(nums[currentIndex]);
                Dfs(currentIndex + 1, nums[currentIndex], nums);
                TempList.RemoveAt(TempList.Count - 1);
            }

            if (nums[currentIndex] != lastNum)
            {
                Dfs(currentIndex + 1, lastNum, nums);
            }
        }
    }
}
