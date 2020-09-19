using System.Collections.Generic;

namespace LeetCode
{
    // 字符串中的第一个唯一字符
    public class T387
    {
        public int FirstUniqChar(string s)
        {
            int[] arr=new int[26];  //26个字母的数组
            for(int i=0;i<s.Length;i++)
            {
                arr[s[i]-'a']+=1;  //a--0 b--1………… 对应位置数字+1
            }
            for(int i=0;i<s.Length;i++)
            {
                if(arr[s[i]-'a']==1)  //当该位置数字为1
                {
                    return i;
                }
            }


            return -1;
        }
    }
}
