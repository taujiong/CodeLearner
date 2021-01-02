using System;

namespace LeetCode
{
    // 移动零
    public static class T283
    {
        public static void MoveZeroes(int[] nums)
        {
            var zeroCount = 0;
            var length = nums.Length;
            for (int i = 0; i < length; i++)
            {
                if (nums[i] == 0)
                {
                    zeroCount++;
                    continue;
                }

                nums[i - zeroCount] = nums[i];
            }

            for (int j = 0; j < zeroCount; j++)
            {
                nums[length - 1 - j] = 0;
            }

            Console.WriteLine(nums);
        }
    }
}
