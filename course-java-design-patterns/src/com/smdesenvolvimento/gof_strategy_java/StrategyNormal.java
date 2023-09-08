package com.smdesenvolvimento.gof_strategy_java;

public class StrategyNormal implements Strategy {
	@Override
	public void move() {
		System.out.println("Movendo normalmente");
	}
}

