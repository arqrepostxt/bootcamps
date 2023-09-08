package main.java.com.samuelmendespy;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import main.java.com.samuelmendespy.interfaces.AparelhoTelefonico;
import main.java.com.samuelmendespy.interfaces.NavegadorInternet;
import main.java.com.samuelmendespy.interfaces.ReprodutorMusical;
import main.java.com.samuelmendespy.model.Musica;
import main.java.com.samuelmendespy.model.Pagina;

public class Iphone implements AparelhoTelefonico, ReprodutorMusical, NavegadorInternet {

  private List<Musica> listaDeMusicas = new ArrayList<>();

  private List<Pagina> listaAbas = new ArrayList<>();

  Scanner scanner = new Scanner(System.in);

  public Iphone() {
    Musica asaBranca = new Musica("Asa Branca (1947)", "Luiz Gonzaga", "Luiz Gonzaga 50 anos de chao", 360);
    listaDeMusicas.add(asaBranca);

    Pagina paginaInicial = new Pagina("http://apple.com");
    listaAbas.add(paginaInicial);

  }

  // Override AparelhoTelefonico
  @Override
  public void ligar(String numeroX) {
    System.out.println("|");
    System.out.println("Telefonando para " + numeroX);
  }

  // Override AparelhoTelefonico
  @Override
  public void atender() {
    System.out.println("|");
    System.out.println("A ligação está sendo atendida");
  }

  // Override AparelhoTelefonico
  @Override
  public void iniciarCorreioVoz() {
    System.out.println("|");

    System.out.println("Correio de voz iniciado");
  }

  // Override ReprodutorMusical
  @Override
  public void tocar() {
    System.out.println("|");

    System.out.println("Tocando a musica" + "\n" + "\n");
  }

  // Override ReprodutorMusical
  @Override
  public void pausar() {
    System.out.println("|");
    System.out.println("Musica pausada");

  }

  // Override ReprodutorMusical
  @Override
  public void selecionarMusica(int indice) {
    System.out.println("|");
    System.out.println("Tocando a musica: " + listaDeMusicas.get(indice).getTitulo() + "\n" + "\n");
  }

  // Override NavegadorInternet
  @Override
  public void exibirPagina(int index) {
    System.out.println("|");
    System.out.println("Exibindo página " + listaAbas.get(index).getUrlPagina());

  }

  // Override NavegadorInternet
  @Override
  public void adicionarNovaAba(String urlPagina) {
    System.out.println("|");
    System.out.println("Adicionada nova página");
    listaAbas.add(new Pagina(urlPagina));
    exibirPagina(listaAbas.size() - 1);
  }

  // Override NavegadorInternet
  @Override
  public void atualizarPagina() {
    System.out.println("|");
    System.out.println("Atualizando página atual");
    exibirPagina(0);
  }
}
