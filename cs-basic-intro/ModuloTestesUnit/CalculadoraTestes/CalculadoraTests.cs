using Calculadora.Services;

namespace CalculadoraTestes;

public class CalculadoraTests
{
    private CalculadoraImpl _calc;

    public CalculadoraTests()
    {
        _calc = new CalculadoraImpl();
    }
    
    [Fact]
    public void DeveSomar5Com10ERetornar15()
    {
        // Arrange
        int num1 = 5;
        int num2 = 10;
        
        // Act
        int resultado = _calc.Somar(num1, num2);

        // Acert
        Assert.Equal(15, resultado);
    }

    [Fact]
    public void DeveSomar10Com10ERetornar20()
    {
        // Arrange
        int num1 = 10;
        int num2 = 10;
        
        // Act
        int resultado = _calc.Somar(num1, num2);

        // Acert
        Assert.Equal(20, resultado);
    }


    [Fact]
    public void DeveVerificar42ComoParERetornarTrue()
        {

            // Arrange
            int num = 42;
            
            // Act
            bool resultado = _calc.VerificarPar(num);

            // Acert
            Assert.True(resultado);
        }

        [Theory]
        [InlineData(2)]
        [InlineData(4)]
        [InlineData(6)]
        [InlineData(8)]
        [InlineData(10)]
        public void DeveVerificarONumeroComoParERetornarTrue(int numero)
        {

            // Act
            bool resultado = _calc.VerificarPar(numero);

            // Acert
            Assert.True(resultado);
        }

        [Theory]
        [InlineData(new int[] {2, 4})]
        [InlineData(new int[] {6, 8, 10})]
        public void DeveVerificarSeOsNumerosSaoParesERetornarTrue(int[] numeros)
        {

            // Acert
            Assert.All(numeros, num => Assert.True(_calc.VerificarPar(num)));
        }

         
}