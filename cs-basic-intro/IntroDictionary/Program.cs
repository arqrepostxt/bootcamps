using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;

Console.WriteLine("Exemplo de uso de Dictionary \n");

Dictionary<string, string> veiculos = new Dictionary<string, string>();

veiculos.Add("carro", "Veiculo com 4 rodas");
veiculos.Add("moto", "Veiculo com 2 rodas");
veiculos.Add("tuk-tuk", "Veiculo com 3 rodas");

foreach (var veiculo in veiculos)
{
  Console.WriteLine($"Chave: {veiculo.Key}, Valor: {veiculo.Value} \n");
}

veiculos.Remove("moto");
veiculos["carro"] = "Um carro costuma ter 4 rodas na parte inferior";
foreach (var veiculo in veiculos)
{
  Console.WriteLine($"Chave: {veiculo.Key}, Valor: {veiculo.Value}");
}

Console.WriteLine("");

string chave = "tuk-tuk";
Console.WriteLine($"Verificar elemento: {chave}");

if (veiculos.ContainsKey(chave))
{
  Console.WriteLine($"Valor existente: {chave}");
}
else
{
  Console.WriteLine($"Valor não existente. É seguro adicionar a chave: {chave}");
}
