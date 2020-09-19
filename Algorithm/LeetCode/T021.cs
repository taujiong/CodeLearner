namespace LeetCode
{
    // 合并两个有序链表
    public class T021
    {
        public ListNode MergeTwoLists(ListNode l1, ListNode l2)
        {
            var l = new ListNode(0);
            var currentNode = l;

            while (l1 != null && l2 != null)
            {
                if (l1.val > l2.val)
                {
                    currentNode.next = l2;
                    l2 = l2.next;
                }
                else
                {
                    currentNode.next = l1;
                    l1 = l1.next;
                }

                currentNode = currentNode.next;
            }

            currentNode.next = l1 ?? l2;

            return l.next;
        }
    }
}
