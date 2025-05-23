import { Observer } from "../../observer.interface";

export class PushNotificationService implements Observer {
    update(event: string, data: any): void {
        console.log(`PushNotificationService Event ${event} with data: ${JSON.stringify(data)}`);
    }
}