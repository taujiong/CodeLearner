namespace LeetCode
{
    // 旋转图像
    public class T48
    {
        public void Rotate(int[][] matrix) {
            var n = matrix.Length;
            for( var i = 0; i < n / 2 + n % 2; i++)
            {
                for(var j = 0; j < n / 2; j++)
                {
                    var temp = matrix[n - 1 - j][i];
                    matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
                    matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
                    matrix[j][n - 1 - i] = matrix[i][j];
                    matrix[i][j] = temp;
                }
            }
        }
    }
}
