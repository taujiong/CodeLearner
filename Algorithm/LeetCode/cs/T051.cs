using System.Collections.Generic;
using System.Linq;

namespace LeetCode
{
    // N 皇后
    public class T51
    {
        public IList<IList<string>> SolveNQueens(int n)
        {
            var result = new List<IList<string>>();
            var column = new HashSet<int>();
            var diagonals1 = new HashSet<int>();
            var diagonals2 = new HashSet<int>();
            var queens = new int[n]; // 记录皇后的位置（行列数）

            Dfs(0, in n, ref column, ref diagonals1, ref diagonals2, ref queens, ref result);

            return result;
        }

        private void Dfs(int row, in int n, ref HashSet<int> column, ref HashSet<int> diagonals1,
            ref HashSet<int> diagonals2, ref int[] queens, ref List<IList<string>> result)
        {
            if (row == n)
            {
                var board = GenerateBoard(queens);
                result.Add(board);
            }
            else
            {
                for (var j = 0; j < n; j++)
                {
                    if (column.Contains(j) || diagonals1.Contains(row - j) || diagonals2.Contains(row + j))
                    {
                        continue;
                    }

                    queens[row] = j;
                    column.Add(j);
                    diagonals1.Add(row - j);
                    diagonals2.Add(row + j);
                    Dfs(row + 1, in n, ref column, ref diagonals1, ref diagonals2, ref queens, ref result);
                    column.Remove(j);
                    diagonals1.Remove(row - j);
                    diagonals2.Remove(row + j);
                }
            }
        }

        private List<string> GenerateBoard(int[] queens)
        {
            var board = new List<string>();
            for (int i = 0; i < queens.Length; i++)
            {
                var row = Enumerable.Repeat('.', queens.Length).ToArray();
                row[queens[i]] = 'Q';
                board.Add(new string(row));
            }

            return board;
        }
    }
}
