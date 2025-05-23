import { NotificationStrategy } from "../../notification-strategy.interface";

export class CommentStrategy implements NotificationStrategy {
    build(data: any): string {
        console.log("CommentStrategy build method called with data:", data);
        return `User ${data.userId} commented on your post: ${data.content}`;
    }
}