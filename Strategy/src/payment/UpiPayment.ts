import { PaymentStrategy } from "./PaymentStrategy";

export class UpiPayment implements PaymentStrategy {
    pay(amount: number): void {
        console.log(`Paid ${amount} using UPI.`);
    }
}