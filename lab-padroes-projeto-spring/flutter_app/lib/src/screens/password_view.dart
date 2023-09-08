import 'package:flutter/material.dart';

class PasswordView extends StatelessWidget {
  static const String routeName = '/password';
  final passwordController = TextEditingController();

  PasswordView({super.key});

  verifyPassword(username, password, isLoggedUser, context) {
    if (username == 'test' && password == 'test') {
      Navigator.pushNamed(context, '/properties', arguments: {'username': username, 'isLoggedUser': isLoggedUser});
    }
  }

  @override
  Widget build(BuildContext context) {
    final Map<String, dynamic> arguments = ModalRoute.of(context)!.settings.arguments as Map<String, dynamic>;
    final String username = arguments['username']; // Expcted value: usernameController.text
    final bool isLoggedUser = arguments['isLoggedUser']; // Expected value: isLoggedUser

    return Scaffold(
      body: Center(
        child: Container(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'Connect with us',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
              const SizedBox(height: 20),
              TextFormField(
                controller: passwordController,
                decoration: const InputDecoration(labelText: 'Password'),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  verifyPassword(username, passwordController.text, isLoggedUser, context);
                },
                child: const Text("Sign in"),
              ),
              const SizedBox(height: 20),
              const Text("Forgot password? Recover now!"),
            ],
          ),
        ),
      ),
    );
  }
}
