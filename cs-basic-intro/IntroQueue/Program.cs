Queue<int> fila = new Queue<int>();

fila.Enqueue(1);
fila.Enqueue(3);
fila.Enqueue(4);
fila.Enqueue(6);

foreach(int item in fila)
{
  Console.WriteLine(item);
}

Console.WriteLine($"Removendo o item : {fila.Dequeue()}");
Console.WriteLine($"Removendo o item : {fila.Dequeue()}");
Console.WriteLine($"Removendo o item : {fila.Dequeue()}");
