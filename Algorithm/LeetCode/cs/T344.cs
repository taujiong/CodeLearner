namespace LeetCode
{
    // 反转字符串
    public class T344
    {
        public void ReverseString(char[] s)
        {
            var length = s.Length;

            for (int i = 0; i < length / 2; i++)
            {
                var temp = s[i];
                s[i] = s[length - 1 - i];
                s[length - 1 - i] = temp;
            }
        }
    }
}
