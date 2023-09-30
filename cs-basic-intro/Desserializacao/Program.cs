using Desserializacao.Models;
using Newtonsoft.Json;

string conteudoDoArquivo = File.ReadAllText("Arquivos/vendas.json");

List<Venda> listaVenda = JsonConvert.DeserializeObject<List<Venda>>(conteudoDoArquivo);

foreach (Venda venda in listaVenda)
{
  Console.WriteLine($"Id: {venda.Id}, Produto: {venda.Produto} {venda.Preco}, \n Data: {venda.DataVenda}");
}