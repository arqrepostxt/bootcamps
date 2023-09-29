string opcao;
bool exibirMenu = true;

while(exibirMenu)
{
    // Console.Clear(); Limpa o console
    Console.WriteLine("Digite uma opção");
    Console.WriteLine("1 - Imprimir Hello World!");
    Console.WriteLine("2 - Imprimir Welcome!");
    Console.WriteLine("3 - Encerrar");
    
    opcao = Console.ReadLine();

  switch(opcao)
  {
    case "1":
        Console.WriteLine("Hello World!");
        break;

    case "2":
        Console.WriteLine("Welcome!");
        break;

    case "3":
        exibirMenu = false;
        break;

    default:
        Console.WriteLine("Opção inválida");
        break;
  }
}
Console.WriteLine("O Programa foi encerrado!");