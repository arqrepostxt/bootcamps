package model;
public class ContaCorrente extends Conta {
	
	public ContaCorrente(Correntista correntista) {
		super(correntista);
	}

	@Override
	public void imprimirExtrato() {
		System.out.println("Extrato Conta Corrente");
		
		super.imprimirCommonInfo();
		
	}

	
}
