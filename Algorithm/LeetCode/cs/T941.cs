namespace LeetCode
{
    // 有效的山脉数组
    public class T941
    {
        public bool ValidMountainArray(int[] A)
        {
            var len = A.Length;
            var left = 0;
            var right = len - 1;

            while (left + 1 < len && A[left] < A[left + 1])
            {
                left++;
            }

            while (right > 0 && A[right] < A[right - 1])
            {
                right--;
            }

            return left > 0 && right < len - 1 && left == right;
        }
    }
}