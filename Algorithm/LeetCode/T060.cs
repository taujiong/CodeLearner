using System.Collections.Generic;
using System.Linq;

namespace LeetCode
{
    // 第 k 个排列
    public class T60
    {
        public string GetPermutation(int n, int k)
        {
            List<int> list = new List<int>();
            int all = 1;//得到排列组合的总数和初始的1-n的list
            for(int i=1;i<=n;i++){
                all *= i;
                list.Add(i);
            }

            return FindP(0, all,"",list);


            string FindP(int x,int can,string path,List<int> choose){
                if(!choose.Any()) return path;//递归的终止
                can = can / (n - x);
                int temp1 = k / can;
                int temp2 = k % can;
                if(temp2 ==0)//对于两种情况，不同处理
                {
                    path += choose[temp1 - 1];
                    choose.RemoveAt(temp1 - 1);
                    k = can;
                    return FindP(x+1,can, path, choose);

                }
                else{
                    path += choose[temp1];
                    choose.RemoveAt(temp1);
                    k = temp2;
                    return FindP(x+1,can, path, choose);
                }
            }
        }
    }
}
