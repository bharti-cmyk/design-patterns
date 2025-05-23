# Design Patterns: Strategy & Observer in TypeScript (NestJS)

## 📌 Overview

This project demonstrates two core behavioral design patterns:

- **Strategy Pattern**: Allows switching between different algorithms (e.g., payment methods).
- **Observer Pattern**: Enables real-time notification logic by broadcasting changes to multiple listeners.

---

## 🎯 Strategy Pattern

### ✅ What It Is

The **Strategy Pattern** defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets you choose the behavior at runtime without modifying the core logic.

### ✅ Where It’s Used

In this project, we use it for **Payment Processing**:

- `PaymentProcessor` is the context.
- `UpiPayment`, `StripePayment`, `PaypalPayment` are strategies.
- The client can switch between strategies dynamically (e.g., based on user input or config).

### ✅ Why It’s Decoupled

- The `PaymentProcessor` doesn't know which algorithm it uses.
- You can easily add a new payment method (e.g., `ApplePay`) without changing the processor.

---

## 🧠 Observer Pattern

### ✅ What It Is

The **Observer Pattern** allows an object (Subject) to notify other objects (Observers) when its state changes. It supports event-driven systems.

### ✅ Where It’s Used

In our **notification system**:

- `UserActivityService` is the Subject.
- `NotificationService` and `LoggerService` are Observers.
- When a user creates a post, both observers react — one sends notifications, one logs the event.

### ✅ Why It’s Decoupled

- `UserActivityService` doesn’t care who’s listening.
- You can add/remove observers without touching the core logic.
- This makes the system easy to scale and extend.

---

## 🔧 Extensibility Benefits

| Pattern     | Easily Add New...      | Without Modifying...       |
|-------------|-------------------------|-----------------------------|
| Strategy    | Payment method          | `PaymentProcessor` logic   |
| Observer    | Reactions to activity   | `UserActivityService`      |

---

## 🧪 How to Test

1. Run the NestJS server:
   ```bash
   npm run dev
