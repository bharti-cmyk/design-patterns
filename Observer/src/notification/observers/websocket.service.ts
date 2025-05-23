import { Observer } from "../../observer.interface";

export class WebSocketService implements Observer {

    update(event: string, data: any): void {
       console.log(`WebSocket notification sent for event: ${event} with data: ${JSON.stringify(data)}`);
    }
}