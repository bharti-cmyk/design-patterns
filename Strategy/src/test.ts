import { PaymentProcessor } from "./payment/PaymentProcessor.js";
import { UpiPayment } from "./payment/UpiPayment.js";
import { StripePayment } from "./payment/StripePayment.js";
import { PaypalPayment } from "./payment/PaypalPayment.js";

// Step 1: Initialize with UPI
const processor = new PaymentProcessor(new UpiPayment());
processor.processPayment(100); // Output: Paying ₹100 using UPI

// Step 2: Switch to Stripe
processor.setStrategy(new StripePayment());
processor.processPayment(250); // Output: Paying $250 using Stripe

// Step 3: Switch to PayPal
processor.setStrategy(new PaypalPayment());
processor.processPayment(300); // Output: Paying $300 using PayPal
