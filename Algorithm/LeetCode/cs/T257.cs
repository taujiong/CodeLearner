using System.Collections.Generic;
using System.Text;

namespace LeetCode
{
    // 二叉树的所有路径
    public class T257
    {
        public IList<string> BinaryTreePaths(TreeNode root)
        {
            var result = new List<string>();
            var path = new StringBuilder();
            Dfs(root, path, ref result);

            return result;
        }

        private void Dfs(TreeNode root, StringBuilder path, ref List<string> result)
        {
            if (root == null) return;

            var currentPath = new StringBuilder(path.ToString());
            currentPath.Append(root.val);
            if (root.left == null && root.right == null)
            {
                result.Add(currentPath.ToString());
                return;
            }

            currentPath.Append("->");
            Dfs(root.left, currentPath, ref result);
            Dfs(root.right, currentPath, ref result);
        }
    }
}
