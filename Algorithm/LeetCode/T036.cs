using System.Collections.Generic;

namespace LeetCode
{
    // 有效的数独
    public static class T36
    {
        public static bool IsValidSudoku(char[][] board)
        {
            var row = new HashSet<char> [9];
            var column = new HashSet<char> [9];
            var box = new HashSet<char> [9];

            for (int i = 0; i < 9; i++)
            {
                row[i] = new HashSet<char>();
                column[i] = new HashSet<char>();
                box[i] = new HashSet<char>();
            }

            for (int i = 0; i < 9; i++)
            {
                for (int j = 0; j < 9; j++)
                {
                    var num = board[i][j];
                    var boxNum = i / 3 * 3 + j / 3;
                    if (num != '.')
                    {
                        if (row[i].Contains(num) || column[j].Contains(num) || box[boxNum].Contains(num))
                        {
                            return false;
                        }

                        row[i].Add(num);
                        column[j].Add(num);
                        box[boxNum].Add(num);
                    }
                }
            }
            return true;
        }
    }
}
