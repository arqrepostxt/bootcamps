import model.Conta;
import model.ContaCorrente;
import model.ContaPoupanca;
import model.Correntista;

public class Main {
	
	
	public static void main(String[] args) {
		Correntista cliente = new Correntista();
		cliente.setNome("Nome do Correntista");
		
		Conta cc = new ContaCorrente(cliente);
		Conta poupanca = new ContaPoupanca(cliente);
		
		cc.depositar(13000);
		cc.transferir(100, poupanca);
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
	}

}
