namespace LeetCode
{
    // 机器人能否返回原点
    public class T657
    {
        public bool JudgeCircle(string moves)
        {
            var x = 0;
            var y = 0;
            foreach (var direction in moves)
            {
                switch (direction)
                {
                    case 'U':
                        y++;
                        break;
                    case 'D':
                        y--;
                        break;
                    case 'L':
                        x--;
                        break;
                    case 'R':
                        x++;
                        break;
                }
            }

            return x==0 && y==0;
        }
    }
}
