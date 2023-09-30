Console.WriteLine("Exemplos de uso de Stack");

Stack<int> pilha = new Stack<int>();

pilha.Push(4);
pilha.Push(6);
pilha.Push(8);
pilha.Push(10);
pilha.Push(11);
pilha.Push(12);
pilha.Push(13);
pilha.Push(14);


foreach(int item in pilha)
{
  Console.WriteLine(item);
}

pilha.Peek();

Console.WriteLine($"Removendo o elemento : {pilha.Pop()}");
Console.WriteLine($"Removendo o elemento : {pilha.Pop()}");
Console.WriteLine($"Removendo o elemento : {pilha.Pop()}");

foreach(int item in pilha)
{
  Console.WriteLine(item);
}