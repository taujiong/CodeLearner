using System.Collections.Generic;

namespace LeetCode
{
    // 二叉树的中序遍历
    public class T094
    {
        public IList<int> InorderTraversal(TreeNode root) {
            if(root == null) return new List<int>();

            var result = new List<int>();
            var stack = new Stack<TreeNode>();

            while (stack.Count!=0 || root != null)
            {
                while (root!=null)
                {
                    stack.Push(root);
                    root = root.left;
                }

                root = stack.Pop();
                result.Add(root.val);
                root = root.right;
            }

            return result;
        }
    }
}
