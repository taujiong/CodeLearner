namespace LeetCode
{
    // 反转链表
    public class T206
    {
        public ListNode ReverseList(ListNode head)
        {
            ListNode prep = null;
            var curr = head;

            while (curr != null)
            {
                var temp = curr.next;
                curr.next = prep;
                prep = curr;
                curr = temp;
            }

            return prep;
        }
    }
}
