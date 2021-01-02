using System.Linq;

namespace LeetCode
{
    // 实现 strStr()
    public class T28
    {
        public int StrStr(string haystack, string needle)
        {
            var haystackCount = haystack.Count();
            var needleCount = needle.Count();
            if (needleCount == 0)
                return 0;
            var offset = haystackCount - needleCount;
            for (var i = 0; i <= offset; i++)
            {
                if (haystack[i] == needle[0])
                {
                    var index = i;
                    var subindex = 0;
                    while (haystack[i + subindex] == needle[0 + subindex])
                    {
                        subindex++;
                        if (subindex >= needleCount)
                            return index;
                    }
                }
            }

            return -1;
        }
    }
}
