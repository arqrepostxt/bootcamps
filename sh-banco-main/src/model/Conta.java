package model;

public abstract class Conta implements IConta{
	
	private static final int AGENCIA_DIGITAL = 1;
	
	private static int SEQUENCIAL = 100;
	
	protected int agencia;
	protected int numero;
	protected double saldo;
	protected Correntista correntista;
	
	public Conta(Correntista correntista) {
		this.agencia = Conta.AGENCIA_DIGITAL;
		this.numero = SEQUENCIAL++;
		this.correntista = correntista;
	}
	
	@Override
	public void sacar(double valor) {
		saldo -= valor;
	}

	@Override
	public void depositar(double valor) {
		saldo += valor;
	}

	@Override
	public void transferir(double valor, Conta contaDestino) {
		this.sacar(valor);
		contaDestino.depositar(valor);
		
	}

	public int getAgencia() {
		return agencia;
	}
	
	public int getNumero() {
		return numero;
	}
	
	public double getSaldo() {
		return saldo;
	}

	protected void imprimirCommonInfo() {
		
		System.out.println(String.format("Correntista %s", this.correntista.getNome()));
		System.out.println(String.format("AGÊNCIA %d", this.agencia));
		System.out.println(String.format("CONTA %d", this.numero));
		System.out.println(String.format("SALDO %.2f", this.saldo));
		System.out.println("============" + "\n");
	}


}