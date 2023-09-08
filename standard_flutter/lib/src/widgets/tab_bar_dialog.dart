import 'package:flutter/material.dart';
import 'package:standard_flutter/src/widgets/categories_tab.dart';
import 'package:standard_flutter/src/widgets/products_tab.dart';
import 'package:standard_flutter/src/widgets/suppliers_tab.dart';

class TabBarDialog extends StatefulWidget {
  const TabBarDialog({Key? key}) : super(key: key);

  @override
  TabBarDialogState createState() => TabBarDialogState();
}

class TabBarDialogState extends State<TabBarDialog> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3, // Number of tabs
      child: Dialog(
        insetPadding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TabBar(
              // TabBar indicators and styles can be customized according to your preference.
              tabs: const [
                Tab(text: 'Products', icon: Icon(Icons.view_comfy_sharp)),
                Tab(text: 'Categories', icon: Icon(Icons.category)),
                Tab(text: 'Suppliers', icon: Icon(Icons.sailing_outlined)),
              ],
              labelColor: Theme.of(context).primaryColor,
              unselectedLabelColor: Colors.grey,
            ),
            const SizedBox(height: 10), // Add some spacing between TabBar and TabBarView.
            const Expanded(
              child: TabBarView(
                children: [
                  ProductsTab(),
                  CategoriesTab(),
                  SuppliersTab(),
                ],
              ),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.pop(context);
              },
              child: const Text('Close'),
            ),
          ],
        ),
      ),
    );
  }
}
