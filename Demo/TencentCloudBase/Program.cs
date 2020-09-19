using System;
using System.Threading.Tasks;
using CloudBase;

namespace TencentCloudBaseDemo
{
    class Program
    {
        static async Task Main(string[] args)
        {
            CloudBaseApp app = CloudBaseApp.Init(
              "test-9gw6gi7kedc28683",
              3000
            );

            AuthState state = await app.Auth.GetAuthStateAsync();

            if (state == null)
            {
                state = await app.Auth.SignInAnonymouslyAsync();
            }
            else
            {
                Console.WriteLine("\nAuthType");
            }

            Console.WriteLine("\nUserInfo");
            UserInfo user = await app.Auth.GetUserInfoAsync();

            // Console.WriteLine("\nUploadFile");
            // UploadFileResponse res = await app.Storage.UploadFileAsync("test.png", @"C:\Users\taujiong\Pictures\taujiong\logo.jpg");
            // Console.WriteLine(res);
        }
    }
}
