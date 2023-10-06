using System.Collections.Specialized;
using System.ComponentModel;
using System.Runtime.InteropServices;
using calculadora;

namespace testes;

public class UnitTest1
{
    public Calculadora construirClasse()
    {
        Calculadora calc = new Calculadora("05/10/2023");
        return calc;
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(4, 5, 9)]
    public void Somar_InserindoNum1Num2_DeveRetornarSomaDeNum1ComNum2(int num1, int num2, int resultadoEsperado)
    {
        // Assign
        Calculadora calc = construirClasse();
        
        // Act
       int resultadoAtual = calc.Somar(num1,num2);

       // Assert
       Assert.Equal(resultadoEsperado, resultadoAtual);

    }

    [Theory]
    [InlineData(6, 2, 4)]
    [InlineData(5, 3, 2)]
    public void Subtrair_InserindoNum1Num2_DeveRetornarDiferencaDeNum1ENum2(int num1, int num2, int resultadoEsperado)
    {
        // Assign
        Calculadora calc = construirClasse();
        
        // Act
       int resultadoAtual = calc.Subtrair(num1,num2);

       // Assert
       Assert.Equal(resultadoEsperado, resultadoAtual);

    }

    [Theory]
    [InlineData(1, 2, 2)]
    [InlineData(4, 5, 20)]
    public void Multiplicar_InserindoNum1Num2_DeveRetornarProdutoDeNum1ENum2(int num1, int num2, int resultadoEsperado)
    {
        // Assign
        Calculadora calc = construirClasse();

        // Act
       int resultadoAtual = calc.Multiplicar(num1,num2);

       // Assert
       Assert.Equal(resultadoEsperado, resultadoAtual);

    }

    [Theory]
    [InlineData(6, 2, 3)]
    [InlineData(5, 5, 1)]
    public void Dividir_InserindoNum1Num2_DeveRetornarQuocienteDeNum1ENum2(int num1, int num2, int resultadoEsperado)
    {
        // Assign
        Calculadora calc = construirClasse();
        // Act
       double resultadoAtual = calc.Dividir(num1,num2);

       // Assert
       Assert.Equal(resultadoEsperado, resultadoAtual);

    }


    [Fact]
    public void Dividir3Por0_DeveRetornarException()
    {
        // Assign
        Calculadora calc = construirClasse();
        
       // Assert
       Assert.Throws<DivideByZeroException>(() => calc.Dividir(3,0));

    }

    [Fact]
    public void Historico_InserindoStrings_DeveRetornarUltimas3Strings()
    {
        // Assign
        Calculadora calc = construirClasse();
        
        // Act
        calc.Somar(1, 2);
        calc.Somar(3, 5);
        calc.Somar(1, 6);
        calc.Somar(2, 7);
        calc.Somar(4, 7);
        List<string> resultadoAtual = calc.Historico();


       // Assert
       Assert.NotEmpty(resultadoAtual);
       Assert.Equal(3, resultadoAtual.Count);

    }
}