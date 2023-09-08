package main.java.com.samuelmendespy.model;

public class Musica {
  private String titulo;
  private String artista;
  private String album;
  private int duracaoEmSegundos;
   public Musica(String titulo, String artista, String album, int duracaoEmSegundos) {
    this.titulo = titulo;
    this.artista = artista;
    this.album = album;
    this.duracaoEmSegundos = duracaoEmSegundos;
  }
  
  public String getTitulo() {
    return titulo;
  }

  public void setTitulo(String titulo) {
    this.titulo = titulo;
  }

  public String getArtista() {
    return artista;
  }

  public void setArtista(String artista) {
    this.artista = artista;
  }

  public String getAlbum() {
    return album;
  }

  public void setAlbum(String album) {
    this.album = album;
  }

  public int getDuracao() {
    return duracaoEmSegundos;
  }

  public void setDuracao(int duracaoEmSegundos) {
    this.duracaoEmSegundos = duracaoEmSegundos;
  }

 

  
}
