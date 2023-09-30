using Serializacao.Models;
using Newtonsoft.Json;


List<Venda> listaVendas = new List<Venda>();

DateTime dataAtual = DateTime.Now;

Venda v1 = new Venda(1, "Bola de Futebol", 69.99M, dataAtual);
Venda v2 = new Venda(2, "Bola de Basque", 75.99M, dataAtual);

listaVendas.Add(v1);
listaVendas.Add(v2);

string serializado = JsonConvert.SerializeObject(listaVendas, Formatting.Indented);

File.WriteAllText("Arquivos/vendas.json", serializado);

Console.WriteLine(serializado);