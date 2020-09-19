using System.Collections.Generic;

namespace LeetCode
{
    // 二叉树的层序遍历
    public class T102
    {
        public IList<IList<int>> LevelOrder(TreeNode root)
        {
            var result = new List<IList<int>>();
            if (root == null) return result;

            var queue = new Queue<TreeNode>();
            queue.Enqueue(root);

            while (queue.Count != 0)
            {
                var size = queue.Count;
                var tempList = new List<int>();

                for (var i = 0; i < size; i++)
                {
                    var node = queue.Dequeue();
                    tempList.Add(node.val);

                    if (node.left != null) queue.Enqueue(node.left);
                    if (node.right != null) queue.Enqueue(node.right);
                }

                result.Add(new List<int>(tempList));
            }

            return result;
        }
    }
}
