using System;

namespace LeetCode
{
    // 字符串转换整数 (atoi)
    public class T8
    {
        public int MyAtoi(string str)
        {
            if (string.IsNullOrEmpty(str) || string.IsNullOrEmpty(str.Trim())) { return 0; }

            str = str.Trim();
            int integerSign = 1;

            char firstChar = str[0];
            if (firstChar != '+' && firstChar != '-' && !char.IsDigit(firstChar))
            {
                return 0;
            }

            string longestIntStr = "";
            if (firstChar == '-')
            {
                integerSign *= -1;
            }
            else if (char.IsDigit(firstChar))
            {
                longestIntStr += firstChar;
            }

            for (int i = 1; i < str.Length; i++)
            {
                if (char.IsDigit(str[i]))
                {
                    longestIntStr += str[i];
                }
                else
                {
                    break;
                }
            }

            int parsedInt = 0;
            if (longestIntStr.Length > 0)
            {
                try
                {
                    parsedInt = integerSign * Int32.Parse(longestIntStr);
                }
                catch (OverflowException)
                {
                    if (integerSign > 0)
                    {
                        parsedInt = Int32.MaxValue;
                    }
                    else
                    {
                        parsedInt = Int32.MinValue;
                    }
                }
            }

            return parsedInt;
        }
    }
}
