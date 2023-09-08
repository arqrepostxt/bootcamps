package main.java.com.samuelmendespy;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Iphone iphone = new Iphone();
    Scanner scanner = new Scanner(System.in);

    while (true) {
      System.out.println("Choose an option:");
      System.out.println("1- Ligar");
      System.out.println("2- Atender");
      System.out.println("3- Iniciar Correio de Voz");
      System.out.println("4- Tocar");
      System.out.println("5- Pausar");
      System.out.println("6- Selecionar Musica");
      System.out.println("7- Exibir Pagina");
      System.out.println("8- Adicionar Nova Aba");
      System.out.println("9- Atualizar");
      System.out.println("0- Exit");

      int choice = scanner.nextInt();

      switch (choice) {
        case 1:
          telefonar(scanner, iphone);
          break;
        case 2:
          iphone.atender();
          break;
        case 3:
          iphone.iniciarCorreioVoz();
          break;
        case 4:
          iphone.tocar();
          break;
        case 5:
          iphone.pausar();
          break;
        case 6:
          escolherMusica(scanner, iphone);
          break;
        case 7:
          iphone.exibirPagina(0);
          break;
        case 8:
          abrirNovaPagina(scanner, iphone);
          break;
        case 9:
          iphone.atualizarPagina();
          break;

        case 0:
          System.out.println("Desligando...");
          scanner.close();
          return;
        default:
          System.out.println("Opcao invalida");
          break;
      }
    }
  }

  private static void telefonar(Scanner scanner, Iphone iphone) {
    System.out.println("Digite o numero de telefone");
    scanner.nextLine();  // Limpar linha
    String numeroDiscado = scanner.nextLine();
    if (numeroDiscado.isEmpty()) {
        System.out.println("Numero invalido");
    } else {
        iphone.ligar(numeroDiscado);
    }
  }

  private static void abrirNovaPagina(Scanner scanner, Iphone iphone) {
    System.out.println("Digite a url da página: ");
    scanner.nextLine();  // Limpar linha
    String url = scanner.nextLine();
    iphone.adicionarNovaAba(url);
  }

  private static void escolherMusica(Scanner scanner, Iphone iphone) {
    System.out.println("1. Luiz Gonzaga - Asa Branca");
    System.out.println("0. Voltar");
    System.out.print("Choice: ");
    scanner.nextLine(); // Limpar linha
    int indice = scanner.nextInt();

    switch (indice) {
      case 1:
        iphone.selecionarMusica(0);
        break;
      case 0:
        System.out.println("Voltando");
        break;
      default:
        System.out.println("Opcao invalida");
    }
  }

}
