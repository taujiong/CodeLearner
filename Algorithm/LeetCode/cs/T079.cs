namespace LeetCode
{
    // 单词搜索
    public class T079
    {
        public bool Exist(char[][] board, string word)
        {
            int h = board.Length, w = board[0].Length;
            var visited = new bool[h, w];

            for (var i = 0; i < h; i++)
            {
                for (var j = 0; j < w; j++)
                {
                    var flag = Check(board, word, visited, i, j, 0);
                    if (flag) return true;
                }
            }

            return false;
        }

        private bool Check(char[][] board, string word, bool[,] visited, in int i, in int j, int k)
        {
            if (board[i][j] != word[k]) return false;
            if (k == word.Length - 1) return true;

            visited[i, j] = true;
            var directions = new[] {new[] {0, 1}, new[] {0, -1}, new[] {-1, 0}, new[] {1, 0}};

            var result = false;

            foreach (var direction in directions)
            {
                int newColumn = i + direction[0], newRow = j + direction[1];
                if (newColumn >= 0 && newColumn < board.Length && newRow >= 0 && newRow < board[0].Length)
                {
                    if (!visited[newColumn, newRow])
                    {
                        var flag = Check(board, word, visited, newColumn, newRow, k + 1);
                        if (flag)
                        {
                            result = true;
                            break;
                        }
                    }
                }
            }

            visited[i, j] = false;
            return result;
        }
    }
}
