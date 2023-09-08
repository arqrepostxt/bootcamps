import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

import 'package:flutter_app/src/models/property_model.dart';

class PropertyDetailsView extends StatelessWidget {
  final Property property;

  const PropertyDetailsView({Key? key, required this.property}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Property Details'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Property: ${property.nome}'),
            Text('Rent: ${property.price.toStringAsFixed(2)}'),
            Text('Area: ${property.area.toStringAsFixed(2)}'),
            Text('Contact: ${property.phone}'),
            Text('Localização: ${property.endereco.street}, ${property.endereco.neighborhood},${property.endereco.city} '),
            const SizedBox(height: 16),
            CarouselSlider(
              items: property.imagePath.map((imageUrl) {
                return Builder(
                  builder: (BuildContext context) {
                    return Image.network(
                      imageUrl,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    );
                  },
                );
              }).toList(),
              options: CarouselOptions(
                height: 400,
                viewportFraction: 1.0,
                enableInfiniteScroll: false,
                autoPlay: true,
                autoPlayInterval: const Duration(seconds: 3),
                autoPlayAnimationDuration: const Duration(milliseconds: 800),
                autoPlayCurve: Curves.fastOutSlowIn,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
