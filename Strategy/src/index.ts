import dotenv from "dotenv";
dotenv.config();
import { PaymentProcessor } from "./payment/PaymentProcessor";
import { UpiPayment } from "./payment/UpiPayment";
import { StripePayment } from "./payment/StripePayment";
import { PaypalPayment } from "./payment/PaypalPayment";


const strategyMap: Record<string, any> = {
    "paypal": PaypalPayment,
    "stripe": StripePayment,
    "upi": UpiPayment
}

const selectedMethod = process.env.PAYMENT_METHOD || "upi"; // This can be dynamically set based on user input or other logic
const paymentMethod = strategyMap[selectedMethod];
const processor = new PaymentProcessor(new paymentMethod());
processor.processPayment(100); // Example amount

processor.setStrategy(new PaypalPayment());
processor.processPayment(200); // Example amount
