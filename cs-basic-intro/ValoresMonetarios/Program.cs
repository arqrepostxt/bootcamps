using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;

Console.OutputEncoding = Encoding.UTF8;

decimal valorMonetario = 82.40M;

Console.WriteLine($"{valorMonetario:C}"); // R$ 82,40
Console.WriteLine($"{valorMonetario:C1}"); // R$ 82,4
Console.WriteLine($"{valorMonetario:C2}"); // R$ 82,40

CultureInfo.DefaultThreadCurrentCulture = new CultureInfo("en-US");

decimal valorEmDolar = valorMonetario;

Console.WriteLine($"{valorEmDolar:C}"); // $82.40


Console.WriteLine(valorMonetario.ToString("C", CultureInfo.CreateSpecificCulture("fr-FR"))); // 82,40 €

Console.WriteLine(valorEmDolar.ToString("C4")); // $82.4000
valorEmDolar = 950.3581324M;
Console.WriteLine(valorEmDolar.ToString("N2")); // 950.36
