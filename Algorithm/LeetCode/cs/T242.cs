namespace LeetCode
{
    // 有效的字母异位词
    public class T242
    {
        public bool IsAnagram(string s, string t)
        {
            if (s.Length != t.Length)
            {
                return false;
            }

            var counter = new int[26];
            foreach (var c in s)
            {
                counter[c - 'a']++;
            }

            foreach (var c in t)
            {
                if (counter[c - 'a'] > 0)
                {
                    counter[c - 'a']--;
                    continue;
                }

                return false;
            }

            return true;
        }
    }
}
