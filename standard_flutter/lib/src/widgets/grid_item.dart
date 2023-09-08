import 'package:flutter/material.dart';
import 'package:standard_flutter/src/data/sample_item.dart';

class GridItem extends StatefulWidget {
  final SampleProduct product;
  final bool isExpanded;
  final VoidCallback selectProduct;

  const GridItem({
    Key? key,
    required this.product,
    required this.isExpanded,
    required this.selectProduct,
  }) : super(key: key);

  @override
  GridItemState createState() => GridItemState();
}

class GridItemState extends State<GridItem> {
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _colorController = TextEditingController();
  final TextEditingController _stockedController = TextEditingController();
  final TextEditingController _priceController = TextEditingController();

  String _selectedSize = 'M';
  String _selectedCategory = '';
  SampleCategory definedCategory = SampleCategory.categories.first;

  bool _isEditing = false;

  @override
  void initState() {
    super.initState();
    _selectedCategory = widget.product.category.name;
  }

  @override
  void dispose() {
    _titleController.dispose();
    _colorController.dispose();
    _priceController.dispose();
    _stockedController.dispose();
    super.dispose();
  }

  void saveModifiedValues() {
    setState(() {
      // Save the edited name and color
      widget.product.title = _titleController.text;
      widget.product.color = _colorController.text;
      widget.product.stocked = int.parse(_stockedController.text);
      widget.product.price = double.parse(_priceController.text);
      widget.product.category = definedCategory;

      _isEditing = false;
      widget.selectProduct();

      // TODO Add a Code to Notify changes to ProductListView
    });
  }

  void loadFormValues() {
    setState(() {
      _titleController.text = widget.product.title;
      _colorController.text = widget.product.color;
      _priceController.text = widget.product.price.toString();
      _stockedController.text = widget.product.stocked.toString();
    });
  }

  void deleteValue() {
    setState(() {
      int productIndex = SampleProduct.products.indexOf(widget.product);
      SampleProduct.products.removeAt(productIndex);
    });
    if (widget.isExpanded) {
      // Delete Expanded Product from GridItem
      widget.selectProduct();
    }
    if (!widget.isExpanded) {
      // TODO Add code to Refresh GridView
    }
  }

  void _toggleEditionMode() {
    if (!widget.isExpanded) {
      return;
      // TODO Add a code to open Forms from GridView
    }
    if (widget.isExpanded) {
      _isEditing = !_isEditing;
    }

    loadFormValues();
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      child: InkWell(
        onTap: () {
          widget.selectProduct();
          // TODO On selectProduct add a code to roll Page to the top
        },
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Stack(children: [
              const Image(
                image: AssetImage('assets/images/flutter_logo.png'),
                height: 100,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  if (_isEditing == false) ...[
                    ElevatedButton(
                      onPressed: () {},
                      child: const Text('View'),
                    )
                  ],
                  Row(
                    children: [
                      Text(
                        widget.product.title,
                        style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                      ),
                      const SizedBox(
                        height: 5,
                      ),
                      TextButton(
                        onPressed: () {},
                        child: Text(
                          widget.product.price.toString(),
                          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.bold),
                        ),
                      ),
                      if (!_isEditing && !widget.isExpanded) ...[
                        IconButton(
                          onPressed: () {
                            deleteValue();
                          },
                          icon: const Icon(Icons.delete_forever),
                        )
                      ],
                      IconButton(
                        onPressed: () {
                          _toggleEditionMode();
                        },
                        icon: const Icon(Icons.edit_note),
                      ),
                    ],
                  ),

                  if (_isEditing) ...[
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
                    Row(
                      children: [
                        Expanded(
                          child: DropdownButtonFormField<String>(
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
                        )
                      ],
                    ),
                    Row(
                      children: [
                        Expanded(
                          child: DropdownButtonFormField<String>(
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
                        )
                      ],
                    ),
                    ElevatedButton(
                      onPressed: () {
                        saveModifiedValues();
                        _isEditing = false;
                        widget.selectProduct();
                      },
                      child: const Text('Save'),
                    ),
                  ], // Form Edit Product
                  const SizedBox(height: 8),
                  Text('Product code : ${widget.product.id}'),
                  Text('Product price : ${widget.product.price}'),
                  if (widget.isExpanded && _isEditing == false) ...[
                    Text('Available color : ${widget.product.color}'),
                    Text('Available size : ${widget.product.size}'),
                    Text('Available stock: ${widget.product.stocked}'),
                  ],
                  if (widget.isExpanded) ...[
                    ElevatedButton(
                      onPressed: () {
                        _isEditing = false;
                        widget.selectProduct();
                      },
                      child: const Text('Close'),
                    ),
                  ],
                ],
              ),
            ]),
          ),
        ),
      ),
    );
  }
}
