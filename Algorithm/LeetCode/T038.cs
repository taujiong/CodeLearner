using System.Text;

namespace LeetCode
{
    // 外观数列
    public class T38
    {
        public string CountAndSay(int n)
        {
            if (n == 1) return "1";

            var newString = CountAndSay(n - 1);
            var builder = new StringBuilder();
            var begin = newString[0];
            var count = 1;
            for (var i = 1; i < newString.Length; i++)
            {
                if (newString[i] == begin)
                {
                    count++;
                }
                else
                {
                    builder.Append("" + count + begin);
                    begin = newString[i];
                    count = 1;
                }
            }

            if (begin == newString[^1])
            {
                builder.Append("" + count + begin);
            }

            return builder.ToString();
        }
    }
}
