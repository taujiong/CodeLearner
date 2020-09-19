using System;
using System.Collections.Generic;

namespace LeetCode
{
    // 组合总数
    public class T39
    {
        public IList<IList<int>> CombinationSum(int[] candidates, int target)
        {
            var result = new List<IList<int>>();
            var tempList = new List<int>();
            Array.Sort(candidates);

            Dfs(in candidates, target, result, tempList, 0);

            return result;
        }

        private void Dfs(in int[] candidates, int target, List<IList<int>> result, List<int> tempList, int index)
        {
            if (target == 0)
            {
                result.Add(new List<int>(tempList));
                return;
            }

            for (var i = index; i < candidates.Length; i++)
            {
                if (target - candidates[index] < 0) break;

                tempList.Add(candidates[i]);
                Dfs(in candidates, target - candidates[i], result, tempList, i);
                tempList.RemoveAt(tempList.Count - 1);
            }
        }
    }
}
