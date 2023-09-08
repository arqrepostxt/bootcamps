package com.smdesenvolvimento.gof_strategy_java;

public class StrategyDefensive implements Strategy {
	@Override
	public void move() {
		System.out.println("Movendo defensivamente");
	}
}
