import 'package:flutter/material.dart';
import 'package:standard_flutter/src/management_area/all_products_view.dart';
import 'package:standard_flutter/src/widgets/products_grid.dart';
import 'package:standard_flutter/src/widgets/tab_bar_dialog.dart';

import '../settings/settings_view.dart';

/// Displays a list of SampleItems.
class ProductListView extends StatefulWidget {
  const ProductListView({
    super.key,
  });

  static const routeName = '/';

  @override
  ProductListViewState createState() => ProductListViewState();
}

class ProductListViewState extends State<ProductListView> {
  void _openTabBarDialog() {
    showDialog(
      context: context,
      builder: (context) => const TabBarDialog(),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('List of Products'),
        actions: [
          IconButton(
            icon: const Icon(Icons.list),
            onPressed: () {
              // Navigate to the settings page. If the user leaves and returns
              // to the app after it has been killed while running in the
              // background, the navigation stack is restored.
              Navigator.restorablePushNamed(context, AllProductsView.routeName);
            },
          ),
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              // Navigate to the settings page. If the user leaves and returns
              // to the app after it has been killed while running in the
              // background, the navigation stack is restored.
              Navigator.restorablePushNamed(context, SettingsView.routeName);
            },
          ),
        ],
      ),

      // To work with lists that may contain a large number of items, it’s best
      // to use the ListView.builder constructor.
      //
      // In contrast to the default ListView constructor, which requires
      // building all Widgets up front, the ListView.builder constructor lazily
      // builds Widgets as they’re scrolled into view.
      body: const ProductsGrid(),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            heroTag: 'tabbar_button',
            onPressed: () {
              _openTabBarDialog();
            },
            child: const Icon(Icons.edit),
          ),
        ],
      ),
    );
  }
}
