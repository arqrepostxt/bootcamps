import 'address_model.dart';

class Property {
  final int id;
  final String nome;
  final double area;
  final double price;
  final int phone;
  final List<String> imagePath;
  final Address endereco;

  Property({
    required this.id,
    required this.nome,
    required this.area,
    required this.price,
    required this.phone,
    required this.imagePath,
    required this.endereco,
  });

  factory Property.fromJson(Map<String, dynamic> json) {
    final imagePathJson = json['imagePath'];
    List<String> imagePathList;
    final addressJson = json['endereco'];
    Address? endereco;

    if (imagePathJson is List<dynamic>) {
      imagePathList = imagePathJson.cast<String>();
    } else if (imagePathJson is String) {
      imagePathList = [imagePathJson];
    } else {
      imagePathList = [];
    }

    if (addressJson != null) {
      endereco = Address.fromJson(addressJson);
    }

    return Property(
      id: json['id'],
      nome: json['nome'],
      area: json['area'].toDouble(),
      price: json['price'].toDouble(),
      phone: json['phone'],
      imagePath: imagePathList,
      endereco: endereco ?? Address(cep: "01234-567"),
    );
  }
}
