using System.Collections.Generic;

namespace LeetCode
{
    // 回文链表
    public class T234
    {
        public bool IsPalindrome(ListNode head)
        {
            if (head == null) return true;
            var vs = new List<int>();
            while (head != null)
            {
                vs.Add(head.val);
                head = head.next;
            }
            for (int i = 0; i < vs.Count / 2; i++)
            {
                if (vs[i] != vs[vs.Count - 1 - i])
                {
                    return false;
                }
            }
            return true;
        }
    }
}
