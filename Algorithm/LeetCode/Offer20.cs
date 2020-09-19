namespace LeetCode
{
    // 表示数值的字符串
    public class Offer20
    {
        public bool IsNumber(string s)
        {
            if (string.IsNullOrEmpty(s))
            {
                return false;
            }

            //标记是否遇到相应情况
            var numSeen = false;
            var dotSeen = false;
            var eSeen = false;
            s = s.Trim();
            for (int i = 0; i < s.Length; i++)
            {
                if (char.IsDigit(s[i]))
                {
                    numSeen = true;
                }
                else if (s[i] == '.')
                {
                    //.之前不能出现.或者e
                    if (dotSeen || eSeen)
                    {
                        return false;
                    }

                    dotSeen = true;
                }
                else if (s[i] == 'e' || s[i] == 'E')
                {
                    //e之前不能出现e，必须出现数
                    if (eSeen || !numSeen)
                    {
                        return false;
                    }

                    eSeen = true;
                    numSeen = false; //重置numSeen，排除123e或者123e+的情况,确保e之后也出现数
                }
                else if (s[i] == '-' || s[i] == '+')
                {
                    //+-出现在0位置或者e/E的后面第一个位置才是合法的
                    if (i != 0 && s[i - 1] != 'e' && s[i - 1] != 'E')
                    {
                        return false;
                    }
                }
                else
                {
                    //其他不合法字符
                    return false;
                }
            }

            return numSeen;
        }
    }
}
