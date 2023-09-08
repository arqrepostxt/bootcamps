package com.smdesenvolvimento.gof_facade_java;

public class TestFacade {
	
	public static void main(String[] args) {
		
		Facade facade =  new Facade();
		facade.migrateClient("Jhon doe", "12345678");
	}	
}
