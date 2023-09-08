import 'package:flutter/material.dart';
import 'package:flutter_app/src/screens/register_property_view.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('RegisterPropertyView', () {
    testWidgets('renders PROPERTY REGISTRATION and TextFormFields', (WidgetTester tester) async {
      await tester.pumpWidget(const MaterialApp(home: RegisterPropertyView()));

      // Verify that 'PROPERTY REGISTRATION' text is rendered
      expect(find.text('PROPERTY REGISTRATION'), findsOneWidget);

      // Verify that TextFormFields are rendered
      expect(find.byType(TextFormField), findsNWidgets(5)); // Adjust the count based on your code
    });
  });
}
