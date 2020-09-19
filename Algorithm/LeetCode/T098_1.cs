using System.Collections.Generic;

namespace LeetCode
{
    // 验证二叉搜索树
    public class T98
    {
        public bool IsValidBST(TreeNode root)
        {
            var st = new Stack<TreeNode>();
            int? cur = null;
            var currentNode = root;
            while (st.Count > 0 || currentNode != null)
            {
                if (currentNode != null)
                {
                    st.Push(currentNode);
                    currentNode = currentNode.left;
                }
                else
                {
                    currentNode = st.Pop();
                    if (cur == null)
                    {
                        cur = currentNode.val;
                    }
                    else
                    {
                        if (currentNode.val <= cur)
                        {
                            return false;
                        }

                        cur = currentNode.val;
                    }

                    currentNode = currentNode.right;
                }
            }

            return true;
        }
    }
}
