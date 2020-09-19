using System.Collections.Generic;

namespace LeetCode
{
    // 二叉树的层次遍历 II
    public class T107
    {
        public IList<IList<int>> LevelOrderBottom(TreeNode root)
        {
            var result = new List<IList<int>>();
            var maxLevel = -1;

            Dfs(result, root, 0, ref maxLevel);

            return result;
        }

        private void Dfs(IList<IList<int>> result, TreeNode currentNode, int currentLevel, ref int maxLevel)
        {
            if (currentNode == null)
            {
                return;
            }

            if (currentLevel > maxLevel)
            {
                result.Insert(0, new List<int>());
                maxLevel++;
            }

            result[maxLevel - currentLevel].Add(currentNode.val);
            Dfs(result, currentNode.left, currentLevel + 1, ref maxLevel);
            Dfs(result, currentNode.right, currentLevel + 1, ref maxLevel);
        }
    }
}
