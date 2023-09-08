import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter_app/src/models/address_model.dart';
import 'package:flutter_app/src/models/property_model.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;

final String apiBaseUrl = dotenv.env['API_URL'] ?? 'MY_FALLBACK';
final Uri url = Uri.parse('$apiBaseUrl/properties');

Future<List<Property>> fetchAllProperties(BuildContext context) async {
  try {
    final response = await http.get(url);

    if (response.statusCode == 200) {
      final List<dynamic> responseData = jsonDecode(response.body);
      return responseData.map((json) => Property.fromJson(json)).toList();
    } else {
      throw Exception('Failed to fetch properties');
    }
  } catch (e) {
    Navigator.pushNamed(context, '/offline');
    throw Exception('The server may be offline. Please check: $apiBaseUrl/properties');
  }
}

Future<void> submitProperty({
  required BuildContext context,
  required String nome,
  required double area,
  required double price,
  required int phone,
  required Address cep,
  required List<http.MultipartFile> pictures,
}) async {
  final formData = http.MultipartRequest('POST', url);
  formData.headers['Content-Type'] = 'multipart/form-data';

  formData.fields.addAll({
    'id': '0',
    'nome': nome,
    'area': area.toString(),
    'price': price.toString(),
    'phone': phone.toString(),
    'endereco.cep': cep.cep,
  });

  for (var picture in pictures) {
    formData.files.add(picture);
  }
  try {
    final response = await formData.send();

    if (response.statusCode == 200) {
    } else {
      print('POST Error');
    }
  } catch (e) {
    Navigator.pushNamed(context, '/offline');
  }
}
