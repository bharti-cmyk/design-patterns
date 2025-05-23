import { Observer } from "./observer.interface";

export class NotificationSubject {
    private observers: Observer[] = [];

    addObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(event: string, data: any): void {
        for (const observer of this.observers) {
            observer.update(event, data);
        }
    }
}