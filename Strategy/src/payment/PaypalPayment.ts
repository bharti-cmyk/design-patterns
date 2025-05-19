import { PaymentStrategy } from "./PaymentStrategy";

export class PaypalPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using PayPal.`);
    }
}