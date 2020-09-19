using System;

namespace LeetCode
{
    // 验证回文串
    public class T125
    {
        public bool IsPalindrome(string s)
        {
            var length = s.Length;
            var left = 0;
            var right = length - 1;

            while (left < right)
            {
                while (left < right && !Char.IsLetterOrDigit(s[left]))
                {
                    left++;
                }

                while (left < right && !Char.IsLetterOrDigit(s[right]))
                {
                    right--;
                }

                if (Char.ToLower(s[left]) != Char.ToLower(s[right]))
                {
                    return false;
                }

                left++;
                right--;
            }

            return true;
        }
    }
}
