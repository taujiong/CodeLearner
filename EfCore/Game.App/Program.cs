using System;
using Game.Data;

namespace Game.App
{
    class Program
    {
        static void Main(string[] args)
        {
            using var context = new GameContext();

            #region Add

            // var serieA = new League
            // {
            //     Country = "Italy",
            //     Name = "Serie A"
            // };
            // var serieB = new League
            // {
            //     Country = "Italy",
            //     Name = "Serie B"
            // };
            // var serieC = new League
            // {
            //     Country = "Italy",
            //     Name = "Serie C"
            // };
            // var milan = new Club
            // {
            //     Name = "AC Milan",
            //     City = "Milan",
            //     DateOfEstablishment = new DateTime(1899,12,16),
            //     League = serieA
            // };
            //
            // context.Leagues.Add(serieA);
            // context.AddRange(serieB, serieC, milan);

            #endregion

            #region query

            // var leagues = context.Leagues
            //     .Where(x =>
            //         EF.Functions.Like(x.Country, "%l%")
            //     )
            //     .ToList();
            //
            // var league = context.Leagues.Find(8);
            //
            // var last = context.Leagues
            //     .OrderBy(x => x.Id)
            //     .LastOrDefault(x => x.Name.Contains("e"));

            #endregion

            #region delete

            // efcore 只能删除被追踪的数据，所以要想删除，可以先查询出来
            // var leagueB = context.Leagues.Single(x => x.Id == 8);
            //
            // context.Leagues.Remove(leagueB);
            // context.Leagues.RemoveRange(leagueB, leagueB);
            // context.Remove(leagueB);
            // context.RemoveRange(leagueB, leagueB);

            #endregion

            #region update

            // 同上，先查后改
            // var leagueC = context.Leagues.OrderBy(x => x.Id).Last();
            //
            // leagueC.Name = "Another League Name";

            #endregion

            var count = context.SaveChanges();
            Console.WriteLine(count);
        }
    }
}