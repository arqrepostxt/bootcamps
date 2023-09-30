using System.Globalization;

int numeroFormatado = 123457;
Console.WriteLine(numeroFormatado.ToString("##-##-##"));

DateTime dataFixa = DateTime.Now;

Console.WriteLine(dataFixa.ToString(""));

Console.WriteLine(dataFixa.ToString("dd - MM - yyyy HH:mm"));

Console.WriteLine(dataFixa.ToShortTimeString());


DateTime dataSalva = DateTime.Parse("17/01/2022 15:00");

Console.WriteLine(dataSalva.ToString());

string dataString = "15/01/2023 15:30";


// DateTime dataAntiga = DateTime.Parse(dataString);
// Console.WriteLine(dataAntiga);


DateTime.TryParseExact(dataString,
"yyyy-MM-dd HH:mm",
 CultureInfo.InvariantCulture,
 DateTimeStyles.None, out DateTime data);


Console.WriteLine(data);
