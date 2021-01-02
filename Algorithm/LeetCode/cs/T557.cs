using System.Text;

namespace LeetCode
{
    // 反转字符串中的单词 III
    public class T557
    {
        public string ReverseWords(string s)
        {
            var sb = new StringBuilder();
            var wordLength = 0;

            for (int i = 0; i < s.Length; i++)
            {
                if (s[i] == ' ' || s[i] == '\0')
                {
                    for (int j = 0; j < wordLength; j++)
                    {
                        sb.Append(s[i - 1 - j]);
                    }

                    sb.Append(' ');
                    wordLength = 0;
                    continue;
                }

                wordLength++;
            }

            return sb.Remove(sb.Length - 1, 1).ToString();
        }
    }
}
