using System.Text;
using Hospedagem.Models;

Console.OutputEncoding = Encoding.UTF8;

// Cria os modelos de hóspedes e cadastra na lista de hóspedes
List<Pessoa> hospedes = new List<Pessoa>();

Pessoa p1 = new Pessoa(nome: "Hóspede 1");
Pessoa p2 = new Pessoa(nome: "Hóspede 2");

hospedes.Add(p1);
hospedes.Add(p2);

// Cria a suíte
Suite suite = new Suite(tipoSuite: "Premium", capacidade: 2, valorDiaria: 30);

// Cria uma nova reserva, passando a suíte e os hóspedes
Reserva reserva = new Reserva(diasReservados: 5);
reserva.CadastrarSuite(suite);
reserva.CadastrarHospedes(hospedes);

// Exibe a quantidade de hóspedes e o valor da diária
Console.WriteLine($"Hóspedes: {reserva.ObterQuantidadeHospedes()}");
Console.WriteLine($"Valor diária: {reserva.CalcularValorDiaria()}");


Console.WriteLine("\n\nReserva 2 : Exemplo com Desconto : ");
List<Pessoa> hospedes2 = new List<Pessoa>();

Pessoa p3 = new Pessoa(nome: "Hóspede 3");
Pessoa p4 = new Pessoa(nome: "Hóspede 4");

hospedes2.Add(p3);
hospedes2.Add(p4);

Suite suite2 = new Suite(tipoSuite: "Deluxe", capacidade: 2, valorDiaria: 100);
Reserva reserva2 = new Reserva(diasReservados: 12);
reserva2.CadastrarSuite(suite2);
reserva2.CadastrarHospedes(hospedes2);

Console.WriteLine($"Hóspedes 2: {reserva2.ObterQuantidadeHospedes()}");
Console.WriteLine($"Valor diária: {reserva2.CalcularValorDiaria()}");


Console.WriteLine("\n\nReserva 3 : Exemplo com Exception : ");
List<Pessoa> hospedes3 = new List<Pessoa>();

Pessoa p5 = new Pessoa(nome: "Hóspede 5");
Pessoa p6 = new Pessoa(nome: "Hóspede 6");
Pessoa p7 = new Pessoa(nome: "Hóspede 7");
Pessoa p8 = new Pessoa(nome: "Hóspede 8");


hospedes3.Add(p5);
hospedes3.Add(p6);
hospedes3.Add(p7);
hospedes3.Add(p8);

Suite suite3 = new Suite(tipoSuite: "Deluxe", capacidade: 2, valorDiaria: 100);
Reserva reserva3 = new Reserva(diasReservados: 12);
reserva2.CadastrarSuite(suite3);
reserva2.CadastrarHospedes(hospedes3);

Console.WriteLine($"Hóspedes 3: {reserva3.ObterQuantidadeHospedes()}");
Console.WriteLine($"Valor diária: {reserva3.CalcularValorDiaria()}");