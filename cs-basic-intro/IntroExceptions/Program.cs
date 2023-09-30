

using IntroExceptions.Models;

try {
string[] linhas = File.ReadAllLines("Arquivos/logs.txt");


foreach (string line in linhas)
{
  Console.WriteLine(line);
}

}
catch (FileNotFoundException ex)
{
  Console.WriteLine($"Erro na leitura de arquivo. {ex.Message}");
}
catch (DirectoryNotFoundException ex)
{
  Console.WriteLine($"Ocorreu um erro. Caminho não encontrado. {ex.Message}");
}
catch (Exception ex)
{
  Console.WriteLine($"Ocorreu uma Exception genérica. {ex.Message}");
}
finally
{
  Console.WriteLine("Chegou até aqui!");
}

Console.WriteLine("Exemplo com Throw Exception \n");

new ExemploExcecao().Metodo1();


