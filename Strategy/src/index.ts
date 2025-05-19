import dotenv from "dotenv";
dotenv.config();
import { PaymentProcessor } from "./payment/PaymentProcessor";
import { UpiPayment } from "./payment/UpiPayment";
import { StripePayment } from "./payment/StripePayment";
import { PaypalPayment } from "./payment/PaypalPayment";
import { PaymentStrategy } from "./payment/PaymentStrategy";

type PaymentKey = "paypal" | "stripe" | "upi";
const strategyMap: Record<PaymentKey, new () => PaymentStrategy> = {
    "paypal": PaypalPayment,
    "stripe": StripePayment,
    "upi": UpiPayment
}

const selectedMethod = (process.env.PAYMENT_METHOD || "upi") as PaymentKey;
const paymentMethod = strategyMap[selectedMethod];

if(!paymentMethod) {
    throw new Error(`Payment method ${selectedMethod} not supported`);
}

const processor = new PaymentProcessor(new paymentMethod());
processor.processPayment(100); 
