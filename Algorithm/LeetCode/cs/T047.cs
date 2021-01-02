using System.Collections.Generic;

namespace LeetCode
{
    // 全排列 II
    public class T047
    {
        public IList<IList<int>> PermuteUnique(int[] nums)
        {
            var finalRes = new List<IList<int>>();
            var tempList = new List<int>();

            var t = new List<int>(nums);
            t.Sort();
            var len = t.Count;

            RecursivePermuteUnique(t, tempList, finalRes, len);
            return finalRes;
        }

        private void RecursivePermuteUnique(List<int> nums, List<int> thisRes, IList<IList<int>> finalRes, int len)
        {
            if (thisRes.Count == len)
            {
                finalRes.Add(thisRes);
                return;
            }

            for (int i = 0; i < nums.Count; i++)
            {
                if (i < nums.Count - 1 && nums[i] != nums[i + 1])
                {
                    var newNums = new List<int>(nums);
                    newNums.RemoveAt(i);
                    var newRes = new List<int>(thisRes) {nums[i]};
                    RecursivePermuteUnique(newNums, newRes, finalRes, len);
                }
                else if (i == nums.Count - 1)
                {
                    var newNums = new List<int>(nums);
                    newNums.RemoveAt(i);
                    var newRes = new List<int>(thisRes) {nums[i]};
                    RecursivePermuteUnique(newNums, newRes, finalRes, len);
                }
            }
        }
    }
}