import 'package:flutter/material.dart';
import 'package:standard_flutter/src/widgets/show_product_dialog.dart';
import '../data/sample_item.dart';

class AllProductsView extends StatelessWidget {
  const AllProductsView({super.key});

  static const routeName = '/allproducts';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('List with all Products'),
      ),
      body: ListView.builder(
        restorationId: 'allProductsView',
        itemCount: SampleProduct.products.length,
        itemBuilder: (BuildContext context, int index) {
          final product = SampleProduct.products[index];

          return ListTile(
            title: Text('# ${product.id} -  ${product.title}  '),
            leading: const CircleAvatar(
              foregroundImage: AssetImage('assets/images/flutter_logo.png'),
            ),
            onTap: () {
              _openViewProductDialog(context, product);
            },
            onLongPress: () {},
          );
        },
      ),
      floatingActionButton: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
        FloatingActionButton(
          heroTag: 'cancel_act_button',
          onPressed: () {},
          child: const Icon(Icons.cancel),
        ),
      ]),
    );
  }

  void _openViewProductDialog(BuildContext context, product) {
    showDialog(
      context: context,
      builder: (context) => ShowProductDialog(product: product),
    );
  }
}
