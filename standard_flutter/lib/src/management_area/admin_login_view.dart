import 'package:flutter/material.dart';

import 'package:standard_flutter/src/management_area/product_list_view.dart';
import 'package:standard_flutter/src/settings/settings_view.dart';

// Replace these constants with your actual login credentials logic

class AdminLoginView extends StatefulWidget {
  static const String routeName = '/admin';

  const AdminLoginView({super.key});

  @override
  AdminLoginViewState createState() => AdminLoginViewState();
}

class AdminLoginViewState extends State<AdminLoginView> {
  final _formKey = GlobalKey<FormState>();
  final _usernameController = TextEditingController();
  final _passwordController = TextEditingController();

  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  void _signIn() {
    final String username = _usernameController.text.trim();
    final String typedPassword = _passwordController.text;
    final String password = typedPassword;

    String user = 'admin';

    if (username != user) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Username not found!')),
      );
    } else {
      // Null-aware access to the username property

      String validPassword = 'test123';

      if (password == validPassword) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Login successful!')),
        );

        Navigator.pushNamed(context, ProductListView.routeName);
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Invalid username or password!')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    // final loggedUser = Provider.of<LoggedUser>(context).user;
    String loggedUser = 'admin';

    if (loggedUser.isNotEmpty) {
      return Scaffold(
        appBar: AppBar(
          title: const Text('Login'),
          actions: [
            IconButton(
              onPressed: () {
                // Logout logic
                // Set the LoggedUser provider with an empty value
                // Provider.of<LoggedUser>(context, listen: false).setUser('');
                loggedUser = '';
              },
              icon: const Icon(Icons.logout),
            ),
          ],
        ),
        body: Center(
          child: Text('Welcome $loggedUser '),
        ),
      );
    } else {
      return Scaffold(
        appBar: AppBar(
          title: const Text('Login'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Form(
            key: _formKey,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                TextFormField(
                  controller: _usernameController,
                  decoration: const InputDecoration(labelText: 'Username'),
                  validator: (value) {
                    if (value == null || value.trim().isEmpty) {
                      return 'Please enter your username';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 16),
                TextFormField(
                  controller: _passwordController,
                  decoration: const InputDecoration(labelText: 'Password'),
                  obscureText: true,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Please enter your password';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 16),
                ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState!.validate()) {
                      _signIn();
                    }
                  },
                  child: const Text('Sign in'),
                ),
                const SizedBox(height: 16),
                TextButton(
                  onPressed: () {
                    Navigator.pushNamed(context, SettingsView.routeName);
                  },
                  child: const Text('New ? Register here'),
                ),
              ],
            ),
          ),
        ),
      );
    }
  }
}
