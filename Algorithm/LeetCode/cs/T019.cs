namespace LeetCode
{
    // 删除链表的倒数第 N 个节点
    public class T19
    {
        public ListNode RemoveNthFromEnd(ListNode head, int n)
        {
            var dummyNode = new ListNode(0) {next = head};
            var frontNode = dummyNode;
            var endNode = dummyNode;

            for (var i = n - 1; i >= 0; i--)
            {
                endNode = endNode.next;
            }

            while (endNode.next != null)
            {
                frontNode = frontNode.next;
                endNode = endNode.next;
            }

            frontNode.next = frontNode.next.next;

            return dummyNode.next;
        }
    }
}
