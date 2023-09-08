import 'package:flutter/material.dart';
import 'package:flutter_app/src/screens/password_view.dart';
import 'package:flutter_app/src/screens/properties_grid_view.dart';
import 'package:flutter_app/src/screens/server_offline_view.dart';
import 'package:flutter_app/src/screens/username_view.dart';
import 'package:flutter_gen/gen_l10n/app_localizations.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

import 'settings/settings_controller.dart';
import 'settings/settings_view.dart';

import 'package:flutter_app/src/screens/register_property_view.dart';

/// The Widget that configures your application.
class MyApp extends StatelessWidget {
  const MyApp({
    super.key,
    required this.settingsController,
  });

  final SettingsController settingsController;

  @override
  Widget build(BuildContext context) {
    return AnimatedBuilder(
      animation: settingsController,
      builder: (BuildContext context, Widget? child) {
        return MaterialApp(
          restorationScopeId: 'app',
          localizationsDelegates: const [
            AppLocalizations.delegate,
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
            GlobalCupertinoLocalizations.delegate,
          ],
          supportedLocales: const [
            Locale('en', ''), // English, no country code
          ],

          onGenerateTitle: (BuildContext context) => AppLocalizations.of(context)!.appTitle,
          theme: ThemeData(),
          darkTheme: ThemeData.dark(),
          themeMode: settingsController.themeMode,

          // Define a function to handle named routes in order to support
          // Flutter web url navigation and deep linking.
          onGenerateRoute: (RouteSettings routeSettings) {
            return MaterialPageRoute<void>(
              settings: routeSettings,
              builder: (BuildContext context) {
                switch (routeSettings.name) {
                  case SettingsView.routeName:
                    return SettingsView(controller: settingsController);
                  case ServerOfflineView.routeName:
                    return const ServerOfflineView();
                  case RegisterPropertyView.routeName:
                    return const RegisterPropertyView();
                  case PropertiesGridView.routeName:
                    return const PropertiesGridView();
                  case PasswordView.routeName:
                    return PasswordView();
                  case UsernameView.routeName:
                  default:
                    return UsernameView();
                }
              },
            );
          },
        );
      },
    );
  }
}
