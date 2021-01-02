using System.Collections.Generic;

namespace LeetCode
{
    // 组合
    public class T77
    {
        List<IList<int>> Result = new List<IList<int>>();
        List<int> CurrentList = new List<int>();

        public IList<IList<int>> Combine(int n, int k)
        {
            Dfs(n, k, 1);

            return Result;
        }

        private void Dfs(int n, int k, int current)
        {
            if (CurrentList.Count + n - current + 1 < k)
            {
                return;
            }

            if (CurrentList.Count == k)
            {
                Result.Add(new List<int>(CurrentList));
                return;
            }

            CurrentList.Add(current);
            Dfs(n, k, current + 1);
            CurrentList.Remove(current);
            Dfs(n, k, current + 1);
        }
    }
}
