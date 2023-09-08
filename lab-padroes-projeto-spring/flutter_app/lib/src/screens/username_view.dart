import 'package:flutter/material.dart';

class UsernameView extends StatelessWidget {
  static const String routeName = '/username';
  final usernameController = TextEditingController();
  static bool isLoggedUser = false;

  UsernameView({super.key});

  @override
  Widget build(BuildContext context) {
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
                controller: usernameController,
                decoration: const InputDecoration(labelText: 'Username'),
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/password', arguments: {
                    'username': usernameController.text,
                    'isLoggedUser': false,
                  });
                },
                child: const Text("Let's go"),
              ),
              const SizedBox(height: 20),
              const Text("Not a member? Register now!"),
              ElevatedButton(
                onPressed: () {
                  Navigator.pushNamed(context, '/properties', arguments: {});
                },
                child: const Text('Continue as guest'),
              )
            ],
          ),
        ),
      ),
    );
  }
}
