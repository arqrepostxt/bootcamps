package com.smdesenvolvimento.gof_strategy_java;

public class StrategyAggressive implements Strategy {
	@Override
	public void move() {
		System.out.println("Movendo agressivamente");
	}
}

