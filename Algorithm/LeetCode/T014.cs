using System;

namespace LeetCode
{
    // 最长公共前缀
    public class T14
    {
        public string LongestCommonPrefix(string[] strs)
        {
            if (strs.Length == 0)
            {
                return "";
            }

            var result = strs[0];
            foreach (var str in strs[1..])
            {
                var length = Math.Min(result.Length, str.Length);
                var count = 0;
                for (int i = 0; i < length; i++)
                {
                    if (str[i] == result[i]) count++;
                    else break;
                }

                result = result[..count];
            }

            return result;
        }
    }
}
