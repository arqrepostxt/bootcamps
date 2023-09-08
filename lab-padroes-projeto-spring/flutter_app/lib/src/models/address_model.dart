class Address {
  final String cep;
  final street;
  final neighborhood;
  final city;

  Address({
    required this.cep,
    this.street,
    this.neighborhood,
    this.city,
  });

  factory Address.fromJson(Map<String, dynamic> json) {
    return Address(
      cep: json['cep'],
      street: json['logradouro'],
      neighborhood: json['bairro'],
      city: json['localidade'],
    );
  }
}
