package com.smdesenvolvimento.gof_strategy_java;

public class Robot {

	private Strategy strategy;
	
	public void setStrategy(Strategy strategy) {
		this.strategy = strategy;
	}
	
	public void move() {
		strategy.move();
	}
}
