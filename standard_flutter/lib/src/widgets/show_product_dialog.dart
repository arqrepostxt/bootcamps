import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:standard_flutter/src/data/sample_item.dart';

class ShowProductDialog extends StatelessWidget {
  final SampleProduct product;

  const ShowProductDialog({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return Dialog(
      insetPadding: const EdgeInsets.all(16.0),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              product.title,
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
              ),
            ),
            const SizedBox(
              height: 16,
            ),
            productRow('Price', product.price.toString()),
            productRow('Size', product.size),
            productRow('Color', product.color),
            productRow('Avaiable in Stock', product.stocked.toString()),
          ],
        ),
      ),
    );
  }

  Widget productRow(String label, String value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Padding(
            padding: EdgeInsets.only(top: 2.0),
            child: Text('•', style: TextStyle(fontSize: 20)),
          ),
          const SizedBox(width: 8.0),
          Expanded(
            child: GestureDetector(
              child: Row(
                children: [
                  Text('$label: $value'),
                  const SizedBox(width: 5),
                  const Icon(Icons.copy),
                ],
              ),
              onTap: () {
                Clipboard.setData(ClipboardData(text: value));
              },
            ),
          ),
        ],
      ),
    );
  }
}
