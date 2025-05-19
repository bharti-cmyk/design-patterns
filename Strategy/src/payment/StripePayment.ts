import { PaymentStrategy } from "./PaymentStrategy";

export class StripePayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using Stripe.`);
    }
}