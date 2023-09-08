import 'package:flutter/material.dart';
import 'package:standard_flutter/src/data/sample_item.dart';

class SuppliersTab extends StatefulWidget {
  const SuppliersTab({
    super.key,
  });

  @override
  SuppliersTabState createState() => SuppliersTabState();
}

class SuppliersTabState extends State<SuppliersTab> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _nameController = TextEditingController();
  final TextEditingController _cityController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _addressController = TextEditingController();

  final SampleSupplier supplier = SampleSupplier.suppliers.last;
  SampleSupplier? selectedSupplier;
  bool isNew = true;

  @override
  void dispose() {
    _nameController.dispose();
    _cityController.dispose();
    _phoneController.dispose();
    _addressController.dispose();
    _emailController.dispose();
    super.dispose();
  }

  void loadValues() {
    setState(() {
      _nameController.text = selectedSupplier!.name;
      _phoneController.text = selectedSupplier!.phone;
      _emailController.text = selectedSupplier!.email;
      _addressController.text = selectedSupplier!.address;
      _cityController.text = selectedSupplier!.city;
    });
  }

  void selectSupplier(supplier) {
    setState(() {
      isNew = false;
    });
    if (selectedSupplier == supplier) {
      setState(() {
        selectedSupplier = null;
      });
      return;
    }
    setState(() {
      selectedSupplier = supplier;
    });
    loadValues();
  }

  void saveValue() {
    final SampleSupplier addValue = SampleSupplier(
      SampleSupplier.suppliers.length + 1,
      _nameController.text,
      _phoneController.text,
      _emailController.text,
      _addressController.text,
      _cityController.text,
    );
    setState(() {
      SampleSupplier.suppliers.add(addValue);
    });
    clearForm();
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Saved value # id ${SampleSupplier.suppliers.last.id}!')),
    );
  }

  void updateValue() {
    setState(() {
      selectedSupplier!.name = _nameController.text;
      selectedSupplier!.email = _emailController.text;
      selectedSupplier!.phone = _nameController.text;
      selectedSupplier!.address = _addressController.text;
      selectedSupplier!.city = _cityController.text;
    });
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('successfully updated}!')),
    );
  }

  void deleteValue(supplier) {
    setState(() {
      SampleSupplier.suppliers.remove(supplier);
    });
    clearForm();
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Value deleted}!')),
    );
  }

  void clearForm() {
    setState(() {
      _nameController.text = '';
      _phoneController.text = '';
      _emailController.text = '';
      _addressController.text = '';
      _cityController.text = '';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Suppliers Tab Details'),
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
                    'Suppliers:',
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
                          child: const Text('Add new supplier')),
                    ],
                  ),
                  const SizedBox(height: 8),
                  Expanded(
                    child: ListView.builder(
                      itemCount: SampleSupplier.suppliers.length,
                      itemBuilder: (context, index) {
                        final supplier = SampleSupplier.suppliers[index];

                        return ListTile(
                          title: Text('# ${supplier.id} ! $index -${supplier.name}'),
                          leading: const Icon(Icons.last_page),
                          onTap: () {
                            selectSupplier(supplier);
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
                    isNew ? 'Add new Supplier' : 'Supplier Details:',
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  TextFormField(
                    controller: _nameController,
                    decoration: const InputDecoration(labelText: 'Name'),
                  ),
                  TextFormField(
                    controller: _emailController,
                    decoration: const InputDecoration(labelText: 'Email'),
                  ),
                  TextFormField(
                    controller: _phoneController,
                    decoration: const InputDecoration(labelText: 'Phone'),
                  ),
                  TextFormField(
                    controller: _addressController,
                    decoration: const InputDecoration(labelText: 'Address'),
                  ),
                  TextFormField(
                    controller: _cityController,
                    decoration: const InputDecoration(labelText: 'City'),
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
                            isNew ? clearForm() : deleteValue(selectedSupplier);
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
