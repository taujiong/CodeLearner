using System.Collections.Generic;

namespace LeetCode
{
    // 钥匙和房间
    public class T841
    {
        public bool CanVisitAllRooms(IList<IList<int>> rooms)
        {
            var length = rooms.Count;
            var visitedList = new bool[length];
            Dfs(0, ref visitedList, rooms);

            foreach (var visited in visitedList)
            {
                if (!visited)
                {
                    return false;
                }
            }
            return true;
        }

        private void Dfs(int currentRoom, ref bool[] visitedList, in IList<IList<int>> rooms)
        {
            if (visitedList[currentRoom]) return;

            visitedList[currentRoom] = true;
            for (int i = 0; i < rooms[currentRoom].Count; i++)
            {
                Dfs(rooms[currentRoom][i], ref visitedList, rooms);
            }
        }
    }
}
