namespace LeetCode
{
    // 旋转数组
    public class T189
    {
        public void Rotate(int[] nums, int k)
        {
            var length = nums.Length;
            k = k % length;
            var count = 0;
            for (int start = 0; count < length; start++)
            {
                var currentIndex = start;
                var prevNum = nums[currentIndex];
                do
                {
                    var nextIndex = (currentIndex + k) % length;
                    var temp = nums[nextIndex];
                    nums[nextIndex] = prevNum;
                    prevNum = temp;
                    currentIndex = nextIndex;
                    count++;
                } while (start != currentIndex);
            }
        }
    }
}
