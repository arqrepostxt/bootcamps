using IntroTuplas.Models;

Console.WriteLine("Exemplos de Tuplas \n");

// (int, string, string, decimal) tupla = (1, "Minicarro", "500e", 226.99M);

// Console.WriteLine($"Id: {tupla.Item1}");
// Console.WriteLine($"Categoria: {tupla.Item2}");
// Console.WriteLine($"Modelo: {tupla.Item3}");
// Console.WriteLine($"Autonomia: {tupla.Item4} \n");


// ValueTuple<int, string, string, decimal> kombi = (2014, "Van", "Kombi", 256.99M );

// Console.WriteLine($"Ano Modelo: {kombi.Item1}");
// Console.WriteLine($"Categoria: {kombi.Item2}");
// Console.WriteLine($"Modelo: {kombi.Item3}");
// Console.WriteLine($"Autonomia Urbana: {kombi.Item4} \n");


// var brasiliaAmarela = Tuple.Create("ABC-0000", "Brasilia", "Amarela", 9.3M);
// Console.WriteLine($"Placa: {brasiliaAmarela.Item1}");
// Console.WriteLine($"Modelo: {brasiliaAmarela.Item2}");
// Console.WriteLine($"Cor: {brasiliaAmarela.Item3}");
// Console.WriteLine($"Consumo km / L: {brasiliaAmarela.Item4} \n");


(int Serial, string Fabricante , string Modelo, decimal Velocidade) hoverboard = (12324, "Hoverboard", "Hoverboard", 15.99M);

Console.WriteLine($"Serial: {hoverboard.Serial}");
Console.WriteLine($"Fabricante: {hoverboard.Fabricante}");
Console.WriteLine($"Modelo: {hoverboard.Modelo}");
Console.WriteLine($"Velocidade Limite : {hoverboard.Velocidade} \n");


Console.WriteLine("Leitura de Arquivo \n");

LeituraArquivo arquivo = new LeituraArquivo();

var (sucesso, linhasArquivo, quantidadeLinhas) = arquivo.LerArquivo("Arquivos/hello.txt");

if(sucesso)
{
    Console.WriteLine("Quantidade de linhas do arquivo :" + quantidadeLinhas + "\n");
    foreach(string linha in linhasArquivo)
    {
        Console.WriteLine(linha);
    }
}
else
{
    Console.WriteLine("Não foi possível ler o arquivo");
}