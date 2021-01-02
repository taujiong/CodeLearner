using System.Collections.Generic;

namespace LeetCode
{
    // 两个数组的交集
    public class T349
    {
        public int[] Intersection(int[] nums1, int[] nums2)
        {
            var num1Set = new HashSet<int>(nums1);
            var num2Set = new HashSet<int>(nums2);

            return GetIntersection(num1Set, num2Set);
        }

        private int[] GetIntersection(HashSet<int> set1, HashSet<int> set2)
        {
            if (set1.Count > set2.Count)
            {
                return GetIntersection(set2, set1);
            }

            HashSet<int> intersection = new HashSet<int>();
            foreach (int num in set1)
            {
                if (set2.Contains(num))
                {
                    intersection.Add(num);
                }
            }

            int[] answer = new int[intersection.Count];
            int i = 0;
            foreach (var num in intersection)
            {
                answer[i] = num;
                i++;
            }

            return answer;
        }
    }
}