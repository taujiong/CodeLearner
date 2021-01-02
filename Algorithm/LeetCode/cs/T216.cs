using System.Collections.Generic;

namespace LeetCode
{
    // 组合总和 III
    public class T216
    {
        public IList<IList<int>> CombinationSum3(int k, int n)
        {
            var result = new List<IList<int>>();
            var tempList = new List<int>();

            Dfs(1, k, n, tempList, result);

            return result;
        }

        private void Dfs(int i, int k, int n, List<int> tempList, List<IList<int>> result)
        {
            if (n == 0 && tempList.Count == k)
            {
                result.Add(new List<int>(tempList));
                return;
            }

            if (tempList.Count == k || n - i < 0 || i >= 10) return;

            tempList.Add(i);
            Dfs(i + 1, k, n - i, tempList, result);
            tempList.RemoveAt(tempList.Count - 1);
            Dfs(i + 1, k, n, tempList, result);
        }
    }
}
