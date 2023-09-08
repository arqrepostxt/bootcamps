import 'package:objectbox/objectbox.dart';
import 'package:standard_flutter/src/data/models/category_model.dart';

import 'package:standard_flutter/src/data/models/supplier_model.dart';

@Entity()
class Product {
  @Id(assignable: true)
  int id;

  String title;
  double price;
  String color;
  String size;
  int stocked;

  // Backlink property to get all Pharmaco objects linked to this User
  @Backlink()
  final supplier = ToOne<Supplier>();

  @Backlink()
  final category = ToMany<Category>();

  Product({this.id = 0, required this.title, required this.price, required this.color, required this.size, required this.stocked});

  @override
  String toString() {
    return 'Product{id: $id, title: $title,  price: $price, color: $color, size: $size, stocked: $stocked}';
  }
}
