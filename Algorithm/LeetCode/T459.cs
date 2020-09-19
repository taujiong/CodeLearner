using System.Text;

namespace LeetCode
{
    // 重复的子字符串
    class T459
    {
        public static bool RepeatedSubstringPattern(string s)
        {
            var length = s.Length;
            for (int i = 1; i < length / 2 + 1; i++)
            {
                if (length % i == 0)
                {
                    var times = length / i;
                    var baseString = s.Substring(0, i);
                    var sb = new StringBuilder(baseString);
                    for (int j = 1; j < times; j++)
                    {
                        sb.Append(baseString);
                    }

                    if (sb.ToString().Equals(s))
                    {
                        return true;
                    }
                }
            }

            return false;
        }
    }
}
