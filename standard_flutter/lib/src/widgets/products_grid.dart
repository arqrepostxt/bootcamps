import 'package:flutter/material.dart';
import 'package:standard_flutter/src/data/sample_item.dart';
import 'package:standard_flutter/src/widgets/grid_item.dart';

class ProductsGrid extends StatefulWidget {
  const ProductsGrid({super.key});

  @override
  ProductsGridState createState() => ProductsGridState();
}

class ProductsGridState extends State<ProductsGrid> {
  SampleProduct? selectedProduct;
  String activeCategory = '';

  void setActiveCategory(String categoryName) {
    setState(() {
      activeCategory = categoryName;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Text(
            selectedProduct == null ? "PRODUCTS" : selectedProduct!.title,
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            ),
          ),
        ),
        Expanded(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Visibility(
                visible: selectedProduct == null,
                child: SizedBox(
                  width: 140,
                  child: ListView.builder(
                    shrinkWrap: true,
                    itemCount: SampleCategory.categories.length,
                    itemBuilder: (context, index) {
                      final category = SampleCategory.categories[index];

                      return ListTile(
                        title: Text(category.name),
                        leading: category.name == activeCategory ? const Icon(Icons.label) : const Icon(Icons.label_outline),
                        onTap: () {
                          setActiveCategory(category.name);
                        },
                      );
                    },
                  ),
                ),
              ),
              if (selectedProduct == null) ...[
                Expanded(
                  child: GridView.builder(
                    itemCount: activeCategory == ''
                        ? SampleProduct.products.length
                        : SampleProduct.products.where((product) => product.category.name == activeCategory).length,
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: selectedProduct == null ? 3 : 1,
                    ),
                    itemBuilder: (context, index) {
                      final product = activeCategory == ''
                          ? SampleProduct.products[index]
                          : SampleProduct.products.where((product) => product.category.name == activeCategory).elementAt(index);

                      return GridItem(
                          product: product,
                          isExpanded: false,
                          selectProduct: () {
                            setState(() {
                              selectedProduct = product;
                            });
                          });
                    },
                  ),
                ),
              ],
              if (selectedProduct != null) ...[
                Expanded(
                  child: GridView.builder(
                    itemCount: 1,
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 1,
                    ),
                    itemBuilder: (context, index) {
                      final productTapped = selectedProduct ?? SampleProduct.products[index];

                      return GridItem(
                          product: productTapped,
                          isExpanded: true,
                          selectProduct: () {
                            setState(() {
                              selectedProduct = null;
                            });
                          });
                    },
                  ),
                ),
              ],
            ],
          ),
        ),
      ],
    );
  }
}
