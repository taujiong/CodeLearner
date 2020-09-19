using System.Collections.Generic;

namespace LeetCode
{
    // 二叉树的层平均值
    public class T637
    {
        public IList<double> AverageOfLevels(TreeNode root)
        {
            var averages = new List<double>();
            var queue = new Queue<TreeNode>();

            queue.Enqueue(root);
            while (queue.Count != 0)
            {
                var sum = 0.0;
                var size = queue.Count;

                for (var i = 0; i < size; i++)
                {
                    var node = queue.Dequeue();
                    if (node.left != null)
                    {
                        queue.Enqueue(node.left);
                    }

                    if (node.right != null)
                    {
                        queue.Enqueue(node.right);
                    }

                    sum += node.val;
                }

                averages.Add(sum / size);
            }

            return averages;
        }
    }
}
