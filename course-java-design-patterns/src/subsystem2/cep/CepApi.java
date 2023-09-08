package subsystem2.cep;

public class CepApi {

	private static CepApi instancia = new CepApi();
	
	private CepApi() {
		super();
	}
	
	public static CepApi getInstancia() {
		return instancia;
	}
	
	public String retrieveCity(String cep){
		return "Araraquara";
	}
	
	public String retrieveState(String cep) {
		return "SP";
	}
}
