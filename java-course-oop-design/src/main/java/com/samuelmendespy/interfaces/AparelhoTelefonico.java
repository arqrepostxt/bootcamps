package main.java.com.samuelmendespy.interfaces;

public interface AparelhoTelefonico {

  default void ligar(String numeroDiscado){}
  default void atender(){}
  default void iniciarCorreioVoz(){}

}
