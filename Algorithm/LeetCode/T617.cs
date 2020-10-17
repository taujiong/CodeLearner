namespace LeetCode
{
    // 合并二叉树
    public class T617
    {
        public TreeNode MergeTrees(TreeNode t1, TreeNode t2)
        {
            if (t2 == null) return t1;
            if (t1 == null) return t2;
            t1.left = MergeTrees(t1.left, t2.left);
            t1.right = MergeTrees(t1.right, t2.right);
            return t1;
        }
    }
}