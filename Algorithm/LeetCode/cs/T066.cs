namespace LeetCode
{
    // 加一
    public class T66
    {
        public int[] PlusOne(int[] digits)
        {
            var length = digits.Length;
            for (int i = length - 1; i >= 0; i--)
            {
                digits[i]++;
                digits[i] %= 10;
                if (digits[i] != 0)
                {
                    return digits;
                }
            }

            digits = new int[length + 1];
            digits[0] = 1;
            return digits;
        }
    }
}
