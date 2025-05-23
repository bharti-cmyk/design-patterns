import { NotificationStrategy } from "../../notification-strategy.interface";

export class PostStrategy implements NotificationStrategy {
    build(data: any): string {
        console.log("PostStrategy build method called with data:", data);
        return `User ${data.userId} posted a new message: ${data.content}`;
    }
}