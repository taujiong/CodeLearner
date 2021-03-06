﻿using System;
using System.Net.Http;
using System.Threading.Tasks;
using Data.Shared;
using IdentityModel.Client;
using Newtonsoft.Json.Linq;

namespace ConsoleClient
{
    class Program
    {
        static async Task Main(string[] args)
        {
            // discovery endpoint
            var httpClient = new HttpClient();
            var discovery = await httpClient.GetDiscoveryDocumentAsync(IdsConstants.Authority);

            if (discovery.IsError)
            {
                Console.WriteLine(discovery.Error);
                return;
            }

            // request access token
            var tokenResponse = await httpClient.RequestClientCredentialsTokenAsync(
                new ClientCredentialsTokenRequest
                {
                    Address = discovery.TokenEndpoint,
                    ClientId = IdsConstants.ClientId,
                    ClientSecret = IdsConstants.ClientSecret,
                    Scope = "Sample"
                });

            if (tokenResponse.IsError)
            {
                Console.WriteLine(tokenResponse.Error);
                return;
            }

            // request api resources
            var apiClient = new HttpClient();
            apiClient.SetBearerToken(tokenResponse.AccessToken);
            var resp = await apiClient.GetAsync("https://localhost:5002/identity");

            if (resp.IsSuccessStatusCode)
            {
                var content = await resp.Content.ReadAsStringAsync();
                Console.WriteLine(JArray.Parse(content));
            }
            else
            {
                Console.WriteLine(resp.StatusCode);
            }

            Console.ReadKey();
        }
    }
}