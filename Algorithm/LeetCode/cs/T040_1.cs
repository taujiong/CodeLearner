using System;
using System.Collections.Generic;

namespace LeetCode
{
    // 组合总和 II
    public class T040
    {
        public IList<IList<int>> CombinationSum2(int[] candidates, int target)
        {
            var result = new List<IList<int>>();
            var tempList = new List<int>();
            Array.Sort(candidates);

            Dfs(0, false, target, in candidates, tempList, result);

            return result;
        }

        private void Dfs(int idx, bool cut, int target, in int[] candidates, List<int> tempList,
            List<IList<int>> result)
        {
            if (target == 0)
            {
                result.Add(new List<int>(tempList));
                return;
            }

            if (idx == candidates.Length) return;

            if (target - candidates[idx] < 0) return;

            if (idx == 0 || candidates[idx] != candidates[idx - 1] || !cut)
            {
                tempList.Add(candidates[idx]);
                Dfs(idx + 1, false, target - candidates[idx], in candidates, tempList, result);
                tempList.RemoveAt(tempList.Count - 1);
            }

            Dfs(idx + 1, true, target, in candidates, tempList, result);
        }
    }
}
