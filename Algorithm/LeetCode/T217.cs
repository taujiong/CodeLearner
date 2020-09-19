using System.Collections.Generic;

namespace LeetCode
{
    // 存在重复元素
    public class T217
    {
        public bool ContainsDuplicate(int[] nums)
        {
            var set = new HashSet<int>();
            foreach (var num in nums)
            {
                if (set.Contains(num))
                {
                    return true;
                }

                set.Add(num);
            }

            return false;
        }
    }
}

