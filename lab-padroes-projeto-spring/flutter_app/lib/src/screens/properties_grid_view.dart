import 'package:flutter/material.dart';
import 'package:flutter_app/src/helpers/api.dart';
import 'package:flutter_app/src/models/property_model.dart';
import 'package:flutter_app/src/screens/property_details_view.dart';

class PropertiesGridView extends StatefulWidget {
  const PropertiesGridView({super.key});
  static const String routeName = '/properties';

  @override
  PropertiesGridViewState createState() => PropertiesGridViewState();
}

class PropertiesGridViewState extends State<PropertiesGridView> {
  late Future<List<Property>> properties;

  @override
  void initState() {
    super.initState();
    properties = fetchAllProperties(context);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Properties'),
        actions: [
          Visibility(
            visible: true,
            child: ElevatedButton(
              child: const Row(
                children: [
                  Text('Publish new property'),
                  SizedBox(
                    width: 5,
                  ),
                  Icon(Icons.app_registration)
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/register');
              },
            ),
          ),
          Visibility(
            visible: true,
            child: ElevatedButton(
              child: const Row(
                children: [
                  Text('Register account'),
                  Icon(Icons.handyman),
                ],
              ),
              onPressed: () {
                Navigator.pushNamed(context, '/username');
              },
            ),
          ),
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              Navigator.restorablePushNamed(context, '/settings');
            },
          )
        ],
      ),
      body: FutureBuilder<List<Property>>(
        future: properties,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const CircularProgressIndicator();
          } else if (snapshot.hasError) {
            return Text('Error: ${snapshot.error}');
          } else if (!snapshot.hasData) {
            return const Text('No data available');
          } else {
            return GridView.builder(
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 4,
                crossAxisSpacing: 8.0,
                mainAxisSpacing: 8.0,
              ),
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index) {
                final property = snapshot.data![index];
                print(property.endereco.cep);

                return GestureDetector(
                  onTap: () {
                    _showPropertyDetails(context, property);
                  },
                  child: GridTile(
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.indigo.shade500,
                        borderRadius: BorderRadius.circular(10.0),
                      ),
                      child: Column(children: [
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Text(
                            property.nome,
                            style: const TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
                        ),
                        Expanded(
                          child: Image.network(
                            property.imagePath.first,
                            width: double.infinity,
                            fit: BoxFit.cover,
                          ),
                        ),
                      ]),
                    ),
                  ),
                );
              },
            );
          }
        },
      ),
    );
  }

  void _showPropertyDetails(BuildContext context, Property property) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => PropertyDetailsView(property: property),
      ),
    );
  }
}
