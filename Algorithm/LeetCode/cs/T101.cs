namespace LeetCode
{
    // 对称二叉树
    public class T101
    {
        public bool IsSymmetric(TreeNode root)
        {
            return Check(root, root);
        }

        private bool Check(TreeNode left, TreeNode right)
        {
            if (left == null && right == null) {
                return true;
            }
            if (left == null || right == null) {
                return false;
            }

            return left.val == right.val && Check(left.left, right.right) && Check(left.right, right.left);
        }
    }
}
