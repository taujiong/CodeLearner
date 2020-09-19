using System.Linq;

namespace LeetCode
{
    // 买卖股票的最佳时机 II
    public class T122
    {
        public static int MaxProfit(int[] prices)
        {
            var length = prices.Length;
            if (length == 0) return 0;

            for (var i = 1; i < length; i++)
            {
                var res = prices[i] - prices[i - 1];
                prices[i - 1] = res > 0 ? res : 0;
            }

            prices[length - 1] = 0;

            return prices.Sum();
        }
    }
}
