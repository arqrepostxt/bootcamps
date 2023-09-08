package com.smdesenvolvimento.gof_singleton_java;

/**
*  Singleton tem instância única na Java Virtual Manchine
*  public static getInstancia torna a instancia exposta
*/
public class SingletonLazy {

	private static SingletonLazy instancia;
	
	private SingletonLazy() {
		super();
	}
	
	public static SingletonLazy getInstancia() {
		if (instancia == null) {
			instancia = new SingletonLazy();
		}
		return instancia;
	}
}
