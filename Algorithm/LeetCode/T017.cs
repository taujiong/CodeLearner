using System.Collections.Generic;
using System.Text;

namespace LeetCode
{
    // 电话号码的字母组合
    public class T17
    {
        private IList<string> Result { get; } = new List<string>();

        private Dictionary<char, string> Map { get; } = new Dictionary<char, string>()
        {
            {'2', "abc"},
            {'3', "def"},
            {'4', "ghi"},
            {'5', "jkl"},
            {'6', "mno"},
            {'7', "pqrs"},
            {'8', "tuv"},
            {'9', "wxyz"}
        };

        public IList<string> LetterCombinations(string digits)
        {
            if (digits.Length != 0)
            {
                var sb = new StringBuilder();

                Dfs(0, sb, digits);
            }

            return Result;
        }

        private void Dfs(int index, StringBuilder sb, string digits)
        {
            if (index == digits.Length)
            {
                Result.Add(sb.ToString());
                return;
            }

            var mapValue = Map[digits[index]];
            foreach (var c in mapValue)
            {
                sb.Append(c);
                Dfs(index + 1, sb, digits);
                sb.Remove(sb.Length - 1, 1);
            }
        }
    }
}
