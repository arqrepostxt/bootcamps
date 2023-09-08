/// A placeholder class that represents an entity or model.
class SampleSupplier {
  SampleSupplier(this.id, this.name, this.phone, this.email, this.address, this.city);

  final int id;
  String name;
  String phone;
  String email;
  String address;
  String city;

  static List<SampleSupplier> suppliers = [
    SampleSupplier(
      1,
      'Get It Distributor',
      '+1 0123',
      'getit@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      2,
      'The Buy It All Factory',
      '+1 01234',
      'thebuyitall@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      3,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      4,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      5,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      6,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      7,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      8,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      9,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      10,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      11,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      12,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      13,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      14,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      15,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      16,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      17,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      18,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      19,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      20,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
    SampleSupplier(
      21,
      'The Buy Now Factory',
      '+1 012345',
      'thebuynow@test',
      'Chugach State Park',
      'Anchorage, United States of America',
    ),
  ];
}

class SampleProduct {
  SampleProduct(this.id, this.title, this.price, this.color, this.size, this.stocked, this.category);

  final int id;
  String title;
  double price;
  String color;
  String size;
  int stocked;
  SampleCategory category;

  static List<SampleProduct> products = [
    SampleProduct(1, 'Yellow Hat M', 49.90, 'Yellow', 'M', 50, SampleCategory.categories.first),
    SampleProduct(
      2,
      'Hat Blue M',
      48.90,
      'Blue',
      'M',
      100,
      SampleCategory.categories.first,
    ),
    SampleProduct(
      3,
      'Red Hat XS',
      44.90,
      'Red',
      'XS',
      30,
      SampleCategory.categories.elementAt(2),
    ),
    SampleProduct(
      4,
      'Blue Hat XS',
      44.90,
      'Red',
      'XS',
      30,
      SampleCategory.categories.elementAt(3),
    ),
    SampleProduct(
      5,
      'Cap Hat XS',
      44.90,
      'Red',
      'XS',
      30,
      SampleCategory.categories.elementAt(3),
    ),
    SampleProduct(
      6,
      'Hat Blue XS',
      44.90,
      'Red',
      'XS',
      30,
      SampleCategory.categories.first,
    ),
    SampleProduct(
      7,
      'Cyan Cap XS',
      44.90,
      'Red',
      'XS',
      30,
      SampleCategory.categories.elementAt(3),
    ),
    SampleProduct(
      8,
      'Blue Belt XS',
      44.90,
      'Red',
      'XS',
      30,
      SampleCategory.categories.elementAt(4),
    ),
    SampleProduct(
      9,
      'Red Belt M',
      14.90,
      'Red',
      'M',
      30,
      SampleCategory.categories.elementAt(4),
    ),
  ];
}

class SampleCategory {
  SampleCategory(this.id, this.name, this.description);

  final int id;
  String name;
  String description;

  static List<SampleCategory> categories = [
    SampleCategory(1, 'Default', 'The default category'),
    SampleCategory(2, 'Main', 'The main category'),
    SampleCategory(3, 'Original', 'The original category'),
    SampleCategory(4, 'Old', 'The old category'),
    SampleCategory(5, 'Newest', 'The newest category'),
  ];
}
