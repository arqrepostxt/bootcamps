import 'package:flutter/material.dart';
import 'package:standard_flutter/src/data/sample_item.dart';

class CategoriesTab extends StatefulWidget {
  const CategoriesTab({super.key});

  @override
  CategoriesTabState createState() => CategoriesTabState();
}

class CategoriesTabState extends State<CategoriesTab> {
  final TextEditingController _nameController = TextEditingController();
  SampleCategory? selectedCategory;

  CategoriesTabState();
  SampleCategory category = SampleCategory.categories.first;
  bool isNew = true;

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    _nameController.dispose();
    // _descriptionController.dispose();
    super.dispose();
  }

  void saveModifiedValues() {
    setState(() {
      category.name = _nameController.text;
      // TODO Add a Code to Notify changes to the app
    });
    clearForm();
  }

  void deleteValue(category) {
    setState(() {
      SampleProduct.products.where((product) => product.category == category).forEach((product) {
        product.category = SampleCategory.categories.first;
      });
      SampleCategory.categories.remove(category);
    });
    clearForm();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Category deleted}!')),
    );
  }

  void restoreValues() {
    if (isNew) {
      _nameController.text = '';
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Discarded category')),
      );
      return;
    }
    _nameController.text = selectedCategory!.name;
  }

  void updateValue() {
    setState(() {
      selectedCategory!.name = _nameController.text;
    });
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Category updated}!')),
    );
  }

  void saveNewCategory() {
    final newCategory = SampleCategory(SampleCategory.categories.length + 1, _nameController.text, 'No description');
    setState(() {
      SampleCategory.categories.add(newCategory);
    });
    clearForm();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Saved value # id ${SampleCategory.categories.last.id}!')),
    );
  }

  void selectCategory(category) {
    setState(() {
      isNew = false;
    });
    if (selectedCategory == category) {
      setState(() {
        selectedCategory = null;
      });
      return;
    }
    setState(() {
      selectedCategory = category;
    });
    loadFormValues();
  }

  void clearForm() {
    setState(() {
      _nameController.text = '';
    });
  }

  void insertNewCategory() {
    setState(() {
      isNew = true;
    });
    clearForm();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Insert the new category!')),
    );
  }

  Future<void> loadFormValues() async {
    // TODO Add feature to show a loading indicator
    await Future.delayed(const Duration(milliseconds: 300));

    setState(() {
      _nameController.text = selectedCategory!.name;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Edit Categories'),
      ),
      body: Container(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _nameController,
                    decoration: const InputDecoration(
                      labelText: 'Name',
                      border: OutlineInputBorder(),
                    ),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.check),
                  onPressed: () {
                    isNew ? saveNewCategory() : updateValue();
                  },
                ),
                IconButton(
                  icon: const Icon(Icons.cancel),
                  onPressed: () {
                    restoreValues();
                  },
                ),
                if (!isNew) ...[
                  IconButton(
                    icon: const Icon(Icons.delete_forever),
                    onPressed: () {
                      deleteValue(selectedCategory);
                    },
                  )
                ],
                // Add your row elements here
              ],
            ),
            Expanded(
              child: ListView.builder(
                itemCount: SampleCategory.categories.length,
                itemBuilder: (context, index) {
                  final categoryInfo = SampleCategory.categories[index];

                  return Column(
                    children: [
                      ListTile(
                        enabled: categoryInfo.name == 'Default' ? false : true,
                        leading: const Icon(Icons.info),
                        title: Text(categoryInfo.name),
                        onTap: () {
                          selectCategory(categoryInfo);
                        },
                      ),
                    ],
                  );
                },
              ),
            ),
          ],
        ),
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            heroTag: 'add_category_button',
            onPressed: () {
              insertNewCategory();
            },
            child: const Icon(Icons.add_box_sharp),
          ),
        ],
      ),
    );
  }
}
