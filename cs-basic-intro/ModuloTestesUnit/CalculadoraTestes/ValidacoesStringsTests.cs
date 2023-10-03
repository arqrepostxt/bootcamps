using Calculadora.Services;

namespace CalculadoraTestes
{
    public class ValidacoesStringsTests
    {

        private ValidacoesStrings _validacoes;

        public ValidacoesStringsTests()
        {
            _validacoes = new ValidacoesStrings();
        }

        [Fact]
        public void DeveConter3CaracteresEmOlaERetornar3()
        {

            // Arrange
            string texto = "Ola";
            
            // Act
            int resultado = _validacoes.ContarCaracteres(texto);

            // Acert
            Assert.Equal(3, resultado);
        }
                
    }
}