namespace LeetCode
{
    // 区间和的个数
    public class T327
    {
        public int CountRangeSum(int[] nums, int lower, int upper)
        {
            long s = 0;
            var sum = new long[nums.Length + 1];
            for (var i = 0; i < nums.Length; ++i)
            {
                s += nums[i];
                sum[i + 1] = s;
            }

            return CountRangeSumRecursive(sum, lower, upper, 0, sum.Length - 1);
        }

        private int CountRangeSumRecursive(long[] sum, int lower, int upper, int left, int right)
        {
            if (left == right)
            {
                return 0;
            }
            else
            {
                var mid = (left + right) / 2;
                var n1 = CountRangeSumRecursive(sum, lower, upper, left, mid);
                var n2 = CountRangeSumRecursive(sum, lower, upper, mid + 1, right);
                var ret = n1 + n2;

                // 首先统计下标对的数量
                var i = left;
                var l = mid + 1;
                var r = mid + 1;
                while (i <= mid)
                {
                    while (l <= right && sum[l] - sum[i] < lower)
                    {
                        l++;
                    }

                    while (r <= right && sum[r] - sum[i] <= upper)
                    {
                        r++;
                    }

                    ret += r - l;
                    i++;
                }

                // 随后合并两个排序数组
                var sorted = new int[right - left + 1];
                int p1 = left, p2 = mid + 1;
                var p = 0;
                while (p1 <= mid || p2 <= right)
                {
                    if (p1 > mid)
                    {
                        sorted[p++] = (int) sum[p2++];
                    }
                    else if (p2 > right)
                    {
                        sorted[p++] = (int) sum[p1++];
                    }
                    else
                    {
                        if (sum[p1] < sum[p2])
                        {
                            sorted[p++] = (int) sum[p1++];
                        }
                        else
                        {
                            sorted[p++] = (int) sum[p2++];
                        }
                    }
                }

                for (int j = 0; j < sorted.Length; j++)
                {
                    sum[left + j] = sorted[j];
                }

                return ret;
            }
        }
    }
}