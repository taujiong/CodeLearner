using System;
using System.Collections.Generic;

namespace LeetCode
{
    // 单词拆分II
    public class T140_1
    {
        public IList<string> WordBreak(string s, IList<string> wordDict) {
            var map = new Dictionary<int, List<List<string>>>();
            var wordBreaks = Backtrack(s, s.Length, new HashSet<string>(wordDict), 0, map);
            var result = new List<string>();
            foreach (var wordBreak in wordBreaks)
            {
                result.Add(String.Join(' ', wordBreak));
            }

            return result;
        }

        private List<List<string>> Backtrack(string s, in int sLength, HashSet<string> hashSet, int index, Dictionary<int,List<List<string>>> map)
        {
            if (!map.ContainsKey(index))
            {
                var wordBreaks = new List<List<string>>();
                if (index == sLength)
                {
                    wordBreaks.Add(new List<string>());
                }

                for (var i = index + 1; i <= sLength; i++)
                {
                    var word = s.Substring(index, i - index);
                    if (hashSet.Contains(word))
                    {
                        var nextWordBreaks = Backtrack(s, sLength, hashSet, i, map);
                        foreach (var nextWordBreak in nextWordBreaks)
                        {
                            var wordBreak = new List<string>(nextWordBreak);
                            wordBreak.Insert(0, word);
                            wordBreaks.Add(new List<string>(wordBreak));
                        }
                    }
                }

                map.Add(index, wordBreaks);
            }

            return map[index];
        }
    }
}