import 'package:flutter/material.dart';
import 'package:standard_flutter/src/data/sample_item.dart';

class ProductsTab extends StatefulWidget {
  const ProductsTab({
    super.key,
  });

  @override
  ProductsTabState createState() => ProductsTabState();
}

class ProductsTabState extends State<ProductsTab> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();
  final TextEditingController _colorController = TextEditingController();
  final TextEditingController _stockedController = TextEditingController();

  final SampleProduct product = SampleProduct.products.last;
  SampleProduct? selectedProduct;
  bool isNew = true;
  String _selectedSize = 'M';
  String _selectedCategory = 'Default';
  SampleCategory definedCategory = SampleCategory.categories.first;

  @override
  void dispose() {
    _titleController.dispose();
    _priceController.dispose();
    _colorController.dispose();
    _stockedController.dispose();
    super.dispose();
  }

  void loadValues() {
    setState(() {
      _titleController.text = selectedProduct!.title;
      _colorController.text = selectedProduct!.color;
      _priceController.text = selectedProduct!.price.toString();
      _stockedController.text = selectedProduct!.stocked.toString();
      _selectedSize = selectedProduct!.size;
      _selectedCategory = selectedProduct!.category.name;
    });
  }

  void selectProduct(product) {
    setState(() {
      isNew = false;
    });
    if (selectedProduct == product) {
      setState(() {
        selectedProduct = null;
      });
      return;
    }
    setState(() {
      selectedProduct = product;
    });
    loadValues();
  }

  void saveValue() {
    final SampleProduct addValue = SampleProduct(
      SampleProduct.products.length + 1,
      _titleController.text,
      double.parse(_priceController.text),
      _colorController.text,
      'Size',
      int.parse(_stockedController.text),
      definedCategory,
    );
    setState(() {
      SampleProduct.products.add(addValue);
    });
    clearForm();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Saved value # id ${SampleProduct.products.last.id}!')),
    );
  }

  void updateValue() {
    setState(() {
      selectedProduct!.title = _titleController.text;
      selectedProduct!.color = _colorController.text;
      selectedProduct!.price = double.parse(_priceController.text);
      selectedProduct!.stocked = int.parse(_stockedController.text);
      selectedProduct!.size = _selectedSize;
      selectedProduct!.category = definedCategory;
    });
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Successfully updated values}!')),
    );
  }

  void deleteValue(product) {
    setState(() {
      SampleProduct.products.remove(product);
    });
    clearForm();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Value deleted}!')),
    );
  }

  void clearForm() {
    setState(() {
      _titleController.text = '';
      _priceController.text = '';
      _stockedController.text = '';
      _colorController.text = '';
      _selectedSize = '';
      _selectedCategory = '';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Products Tab Details'),
      ),
      body: Container(
        padding: const EdgeInsets.all(16.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              flex: 1,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Products:',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  Row(
                    children: [
                      ElevatedButton(
                          onPressed: () {
                            setState(() {
                              isNew = true;
                            });
                            clearForm();
                          },
                          child: const Text('Add new product')),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Expanded(
                    child: ListView.builder(
                      itemCount: SampleProduct.products.length,
                      itemBuilder: (context, index) {
                        final product = SampleProduct.products[index];

                        return ListTile(
                          title: Text('# ${product.id} ! $index -${product.title}'),
                          leading: const Icon(Icons.last_page),
                          onTap: () {
                            selectProduct(product);
                          },
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(width: 16), // Separator
            Expanded(
              flex: 2,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    isNew ? 'Add new Product' : 'Product Details:',
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  TextFormField(
                    controller: _titleController,
                    decoration: const InputDecoration(labelText: 'Title'),
                  ),
                  TextFormField(
                    controller: _colorController,
                    decoration: const InputDecoration(labelText: 'Color'),
                  ),
                  TextFormField(
                    controller: _priceController,
                    decoration: const InputDecoration(labelText: 'Price'),
                  ),
                  TextFormField(
                    controller: _stockedController,
                    decoration: const InputDecoration(labelText: 'Stocked'),
                  ),
                  DropdownButtonFormField<String>(
                    value: _selectedCategory,
                    items: SampleCategory.categories
                        .map((category) => DropdownMenuItem(
                              value: category.name,
                              child: Text(category.name),
                            ))
                        .toList(),
                    onChanged: (value) {
                      setState(() {
                        _selectedCategory = value!;
                        definedCategory = SampleCategory.categories.firstWhere((category) => category.name == value);
                      });
                    },
                  ),
                  DropdownButtonFormField<String>(
                    value: _selectedSize,
                    items: ['XS', 'S', 'M', 'L', 'XL']
                        .map((size) => DropdownMenuItem(
                              value: size,
                              child: Text(size),
                            ))
                        .toList(),
                    onChanged: (value) {
                      setState(() {
                        _selectedSize = value!;
                      });
                    },
                  ),
                  Row(
                    children: [
                      ElevatedButton.icon(
                          onPressed: () {
                            isNew ? saveValue() : updateValue();
                          },
                          icon: const Icon(Icons.cloud_done_rounded),
                          label: Text(isNew ? 'Save' : 'Update')),
                      const SizedBox(
                        width: 5,
                      ),
                      ElevatedButton.icon(
                          onPressed: () {
                            isNew ? clearForm() : deleteValue(selectedProduct);
                          },
                          icon: const Icon(Icons.cancel),
                          label: Text(isNew ? 'Discard' : 'Delete')),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
