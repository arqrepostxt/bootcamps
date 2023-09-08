package com.smdesenvolvimento.gof_strategy_java;

public class TestStrategy {
	
	public static void main(String[] args) {
	Strategy defensive = new StrategyDefensive();
	Strategy normal = new StrategyNormal();
	Strategy aggressive = new StrategyAggressive();
	
	Robot robot = new Robot();
	robot.setStrategy(normal);
	
	robot.move();
	robot.move();
	robot.setStrategy(defensive);
	robot.move();
	robot.move();
	robot.setStrategy(aggressive);
	
	}
}