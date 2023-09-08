import 'package:objectbox/objectbox.dart';

import 'package:standard_flutter/src/data/models/product_model.dart';

@Entity()
class Category {
  @Id(assignable: true)
  int id;

  String name;
  String description;

  // Backlink property to get all Pharmaco objects linked to this User
  @Backlink()
  final product = ToMany<Product>();

  Category({
    this.id = 0,
    required this.name,
    required this.description,
  });

  @override
  String toString() {
    return 'Category{id: $id, name: $name, description: $description}';
  }
}
