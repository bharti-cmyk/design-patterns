import { PaymentProcessor } from "./payment/PaymentProcessor";

import { UpiPayment } from "./payment/UpiPayment";
import { StripePayment } from "./payment/StripePayment";
import { PaypalPayment } from "./payment/PaypalPayment";


const strategyMap: Record<string, any> = {
    "paypal": PaypalPayment,
    "stripe": StripePayment,
    "upi": UpiPayment
}

const selectedMethod = "upi"; // This can be dynamically set based on user input or other logic
const paymentMethod = strategyMap[selectedMethod];
const processor = new PaymentProcessor(new paymentMethod());
processor.processPayment(100); // Example amount

processor.setStrategy(new StripePayment());
processor.processPayment(200); // Example amount
