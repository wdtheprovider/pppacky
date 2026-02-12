# KairZa: Technical Documentation

## Tech Stack Overview
KairZa is built using a modern, scalable stack designed for performance and cross-platform consistency.

- **Framework**: [Flutter](https://flutter.dev/) (Dart)
- **Local Database**: [SQLite (sqflite)](https://pub.dev/packages/sqflite)
- **Cloud Backend**: [Firebase (Firestore & Auth)](https://firebase.google.com/)
- **State Management**: [Provider](https://pub.dev/packages/provider)
- **Monetization**: [RevenueCat (purchases_flutter)](https://www.revenuecat.com/)
- **Background Tasks**: [WorkManager](https://pub.dev/packages/workmanager)
- **Notifications**: [flutter_local_notifications](https://pub.dev/packages/flutter_local_notifications)

## System Architecture

### 1. Offline-First Synchronization
The core of KairZa is its **Synchronized Repository Pattern**. 
- Data is always written to the local **SQLite** database first.
- A `SyncService` monitors changes and pushes updates to **Firestore** when an internet connection is available.
- Conflict resolution is handled via `last_modified` timestamps, ensuring that even if a user edits a reminder on two devices while offline, the most recent version prevails accurately.

### 2. QR Device Linking
To facilitate easy multi-device setup, KairZa implements a custom QR linking flow:
- The primary device generates a secure, short-lived session token.
- The secondary device scans this token, which triggers a background handshake via Firebase Cloud Functions (or Firestore signals) to share authentication state.

### 3. State Management
We use the **Provider** pattern to maintain a clean separation of concerns:
- **ReminderProvider**: Handles CRUD operations and filters.
- **AuthProvider**: Manages Firebase Auth state and user profiles.
- **PremiumProvider**: Interfaces with RevenueCat to provide real-time entitlement status across the UI.

## RevenueCat Implementation
RevenueCat is integrated at the heart of our premium experience to handle cross-platform subscriptions seamlessly.

### Configuration
We wrapped the RevenueCat SDK in a dedicated `SubscriptionService` that initializes on app launch:
```dart
// lib/services/subscription_service.dart
await Purchases.configure(
    PurchasesConfiguration(Platform.isIOS ? appleApiKey : googleApiKey)
      ..appUserId = userId
);
```

### Entitlement Enforcement
The app uses a reactive approach to entitlements. The `PremiumProvider` listens to `CustomerInfo` updates:
- **Paywall UI**: A custom-designed paywall built with `purchases_ui_flutter` for a native feel.
- **Feature Gating**: Core components check the `premium` entitlement before allowing access to cloud sync or advanced recurrence logic.
- **Webhooks**: (Future implementation) Planned RevenueCat webhooks to notify users of subscription changes via Firebase Cloud Messaging.

## Database Schema & Migrations
KairZa utilizes `sqflite` with a robust migration system. Version 2 introduced the `tags` and `color` columns, implemented with a safe `ALTER TABLE` strategy to ensure zero data loss during the hackathon development phase.
