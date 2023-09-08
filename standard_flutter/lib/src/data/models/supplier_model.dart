import 'package:objectbox/objectbox.dart';
import 'package:standard_flutter/src/data/models/product_model.dart';

@Entity()
class Supplier {
  @Id(assignable: true)
  int id;

  String name;
  String phone;
  String email;
  String address;
  String city;

  // Backlink property to get all Pharmaco objects linked to this User
  @Backlink()
  final product = ToMany<Product>();

  Supplier({
    this.id = 0,
    required this.name,
    required this.email,
    required this.phone,
    required this.address,
    required this.city,
  });

  @override
  String toString() {
    return 'Supplier{id: $id, name: $name, email: $email, phone: $phone, address: $address, city: $city}';
  }
}
