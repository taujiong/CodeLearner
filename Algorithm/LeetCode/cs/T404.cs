namespace LeetCode
{
    // 左叶子之和
    public class T404
    {
        public int SumOfLeftLeaves(TreeNode root)
        {
            return SumOfLeaves(root, 0);
        }

        private int SumOfLeaves(TreeNode node, int mul)
        {
            if (node == null) return 0;
            if (node.left == null && node.right == null) return node.val * mul;
            return SumOfLeaves(node.left, 1) + SumOfLeaves(node.right, 0);
        }
    }
}