using System.Net.Http;
using System.Windows;
using Data.Shared;
using IdentityModel.Client;
using Newtonsoft.Json.Linq;

namespace WpfClient
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private DiscoveryDocumentResponse _disco;

        public MainWindow()
        {
            InitializeComponent();
        }

        private string AccessToken { get; set; }

        private async void RequestAccessToken_ButtonClick(object sender, RoutedEventArgs e)
        {
            //get user info
            var userName = UserNameInput.Text;
            var pwd = PasswordInput.Password;

            // request access token
            var client = new HttpClient();
            _disco = await client.GetDiscoveryDocumentAsync(IdsConstants.Authority);
            var tokenResponse = await client.RequestPasswordTokenAsync(new PasswordTokenRequest
            {
                Address = _disco.TokenEndpoint,
                ClientId = IdsConstants.ClientId,
                ClientSecret = IdsConstants.ClientSecret,
                UserName = userName,
                Password = pwd,
                Scope = "Sample openid profile"
            });

            if (tokenResponse.IsError)
            {
                MessageBox.Show(tokenResponse.Error);
                return;
            }

            AccessToken = tokenResponse.AccessToken;
            AccessTokenTextBlock.Text = tokenResponse.Json.ToString();
        }

        private async void RequestApi1Resource_ButtonClick(object sender, RoutedEventArgs e)
        {
            var http = new HttpClient();
            http.SetBearerToken(AccessToken);
            var apiResponse = await http.GetAsync("https://localhost:5002/identity");
            var content = await apiResponse.Content.ReadAsStringAsync();
            Api1ResponseTextBlock.Text = JArray.Parse(content).ToString();
        }

        private async void RequestIdentityResource_ButtonClick(object sender, RoutedEventArgs e)
        {
            var http = new HttpClient();
            http.SetBearerToken(AccessToken);
            var userInfo = await http.GetAsync(_disco.UserInfoEndpoint);
            var content = await userInfo.Content.ReadAsStringAsync();
            IdentityResponseTextBlock.Text = content;
        }
    }
}