package com.smdesenvolvimento.gof_facade_java;

import subsystem1.crm.CrmService;
import subsystem2.cep.CepApi;

public class Facade {

	public void migrateClient(String name, String cep) {
		String city = CepApi.getInstancia().retrieveCity(cep);
		String state = CepApi.getInstancia().retrieveState(cep);
		
		CrmService.saveClient(name, cep, city, state);
	}
}
