import { NotificationStrategy } from "./notification-strategy.interface";

export class NotificationStrategyContext {
    private strategy: NotificationStrategy;

    constructor(strategy: NotificationStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: NotificationStrategy) {
        this.strategy = strategy;
    }

    build(data: any): string {
        if (!this.strategy) {
            throw new Error("Strategy not set");
        }
        return this.strategy.build(data);
    }
}