package com.smdesenvolvimento.gof_singleton_java;

/**
*  SingletonLazyHolder para JVM iniciar InstanceHolder 
*  quando for realmente usado
*  
*/
public class SingletonLazyHolder {

	private static class InstanceHolder {
		public static SingletonLazyHolder instancia = new SingletonLazyHolder();
	}
	
	private SingletonLazyHolder() {
		super();
	}
	
	public static SingletonLazyHolder getInstancia() {

		return InstanceHolder.instancia;
	}
}
