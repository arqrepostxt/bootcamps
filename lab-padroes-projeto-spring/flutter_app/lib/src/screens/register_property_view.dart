import 'dart:io';

import 'package:file_picker/file_picker.dart';
import 'package:flutter_app/src/helpers/api.dart';

import 'package:flutter/material.dart';
import 'package:flutter_app/src/models/address_model.dart';
import 'package:http/http.dart' as http;

class RegisterPropertyView extends StatefulWidget {
  const RegisterPropertyView({super.key});
  static const String routeName = '/register';

  @override
  RegisterPropertyViewState createState() => RegisterPropertyViewState();
}

class RegisterPropertyViewState extends State<RegisterPropertyView> {
  final nomeController = TextEditingController();
  final areaController = TextEditingController();
  final priceController = TextEditingController();
  final phoneController = TextEditingController();
  final cepController = TextEditingController();
  List<String> selectedImages = [];

  Future<void> pickImageFile() async {
    FilePickerResult? result = await FilePicker.platform.pickFiles(
      type: FileType.image,
      allowMultiple: true,
      allowCompression: true,
    );

    if (result != null) {
      List<String> newSelectedImages = List<String>.from(result.paths);
      if (newSelectedImages.length + selectedImages.length > 3) {
        // TODO Task 2 - Increase the limit to 5
      } else {
        setState(() {
          selectedImages.addAll(newSelectedImages);
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    void submitForm() async {
      final double areaValue = double.tryParse(areaController.text) ?? 0.0;
      final double priceValue = double.tryParse(priceController.text) ?? 0.0;
      final int phoneValue = int.tryParse(phoneController.text) ?? 0;

      List<http.MultipartFile> picsMultipartFileList = [];
      for (String filePath in selectedImages) {
        final file = File(filePath);
        final stream = http.ByteStream(file.openRead());
        final length = await file.length();

        final multipartFile = http.MultipartFile(
          'pictures',
          stream,
          length,
          filename: file.path.split('/').last,
        );
        picsMultipartFileList.add(multipartFile);
      }

      await submitProperty(
        nome: nomeController.text,
        area: areaValue,
        price: priceValue,
        phone: phoneValue,
        cep: Address(
          cep: cepController.text,
        ),
        pictures: picsMultipartFileList.isNotEmpty ? picsMultipartFileList : [],
        context: context,
      );
      Navigator.pushNamed(context, '/properties');
    }

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('PROPERTY REGISTRATION'),
          actions: [
            IconButton(
              icon: const Icon(Icons.grid_4x4),
              onPressed: () {
                Navigator.pushNamed(context, '/properties');
              },
            ),
            IconButton(
              icon: const Icon(Icons.settings),
              onPressed: () {
                Navigator.restorablePushNamed(context, '/settings');
              },
            )
          ],
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: TextFormField(
                  controller: nomeController,
                  decoration: const InputDecoration(labelText: 'Nome'),
                ),
              ),
              const SizedBox(height: 16),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: TextFormField(
                  controller: areaController,
                  decoration: const InputDecoration(labelText: 'Area'),
                ),
              ),
              const SizedBox(height: 16),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: TextFormField(
                  controller: priceController,
                  decoration: const InputDecoration(labelText: 'Price'),
                ),
              ),
              const SizedBox(height: 16),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: TextFormField(
                  controller: phoneController,
                  decoration: const InputDecoration(labelText: 'Phone'),
                ),
              ),
              const SizedBox(height: 16),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: TextFormField(
                  controller: cepController,
                  decoration: const InputDecoration(labelText: 'CEP'),
                ),
              ),
              const SizedBox(height: 16),
              ElevatedButton(
                onPressed: () {
                  pickImageFile();
                },
                child: const Text('Pick Image File'),
              ),
              ListView.builder(
                shrinkWrap: true,
                itemCount: selectedImages.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    title: Text(selectedImages[index]),
                    trailing: IconButton(
                      icon: const Icon(Icons.cancel),
                      onPressed: () {
                        setState(() {
                          selectedImages.removeAt(index);
                        });
                      },
                    ),
                  );
                },
              ),
              const SizedBox(height: 16),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  // Submit Button
                  ElevatedButton(
                    onPressed: () {
                      submitForm();
                    },
                    child: const Text('Submit'),
                  ),
                  const SizedBox(width: 16),
                  ElevatedButton(
                    onPressed: () {
                      nomeController.clear();
                      areaController.clear();
                      priceController.clear();
                      phoneController.clear();
                      cepController.clear();
                    },
                    child: const Text('Clear'),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
