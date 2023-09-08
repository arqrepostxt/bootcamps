import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ServerOfflineView extends StatelessWidget {
  static const String routeName = '/offline';

  const ServerOfflineView({super.key});

  @override
  Widget build(BuildContext context) {
    final String apiBaseUrl = dotenv.env['API_URL'] ?? 'MY_FALLBACK';
    double screenWidth = MediaQuery.of(context).size.width;
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            SvgPicture.asset(
              'assets/svgs/alert_machine.svg',
              height: screenWidth * 0.3,
            ),
            const SizedBox(height: 16),
            const Text(
              'Server offline',
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.bold,
              ),
            ),
            RichText(
              text: TextSpan(
                text: 'Check ',
                style: DefaultTextStyle.of(context).style,
                children: <TextSpan>[
                  TextSpan(
                    text: apiBaseUrl,
                    style: const TextStyle(
                      color: Colors.blue, // Apply hyperlink color
                      decoration: TextDecoration.underline,
                    ),
                    recognizer: TapGestureRecognizer()
                      ..onTap = () {
                        // Open the link here
                        // You can use a URL launcher package to open the link
                      },
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
