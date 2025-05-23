import { Observer } from "../../observer.interface";

export class EmailService implements Observer {
    update(event: string, data: any): void {
        console.log(`Email notification sent for event: ${event} with data: ${JSON.stringify(data)}`);
    }
}