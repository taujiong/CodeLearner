using System.Collections.Generic;

namespace LeetCode
{
    // 环形链表
    public class T141
    {
        public bool HasCycle(ListNode head)
        {
            if (head?.next == null) return false;

            var slow = head;
            var fast = head.next;

            while (slow!=fast)
            {
                if (fast?.next == null) return false;

                slow = slow.next;
                fast = fast.next.next;
            }

            return true;
        }
    }
}
