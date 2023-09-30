using Celulares.Models;

// TODO: Realizar os testes com as classes Nokia e Iphone
Console.WriteLine("\nTestes com Iphone");
Iphone iphone = new Iphone();
iphone.InstalarAplicativo("Google Maps");
iphone.InstalarAplicativo("Moovit");
iphone.InstalarAplicativo("Flip On");
iphone.Ligar();
iphone.ReceberLigacao();

Console.WriteLine("\nTestes com Nokia");
Nokia nokia = new Nokia();
nokia.InstalarAplicativo("Google Maps");
nokia.InstalarAplicativo("Moovit");
nokia.InstalarAplicativo("Flip On");
nokia.Ligar();
nokia.ReceberLigacao();
