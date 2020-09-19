namespace LeetCode
{
    // 删除链表中的节点
    public class T237
    {
        public void DeleteNode(ListNode node)
        {
            node.val = node.next.val;
            node.next = node.next.next;
        }
    }
}
