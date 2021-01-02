using System.Collections;
using System.Collections.Generic;

namespace LeetCode
{
    // 二叉树的最大深度
    public class T104
    {
        public int MaxDepth(TreeNode root)
        {
            if (root == null) return 0;

            var result = 0;
            var queue = new Queue<TreeNode>();

            queue.Enqueue(root);
            while (queue.Count!=0)
            {
                var size = queue.Count;

                for (var i = 0; i < size; i++)
                {
                    var node = queue.Dequeue();
                    if (node.left!=null)
                    {
                        queue.Enqueue(node.left);
                    }

                    if (node.right!=null)
                    {
                        queue.Enqueue(node.right);
                    }
                }

                result += 1;
            }

            return result;
        }
    }
}
