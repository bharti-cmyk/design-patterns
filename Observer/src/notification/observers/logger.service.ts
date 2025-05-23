import { Observer } from "../../observer.interface";

export class LoggerService implements Observer {
    update(event: string, data: any): void {
        console.log(`Logger Event: ${event}, Data: ${JSON.stringify(data)}`);
    }
}