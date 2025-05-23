import { NotificationStrategy } from "../../notification-strategy.interface";
export class LikeStrategy implements NotificationStrategy {
    build(data: any): string {
        console.log("LikeStrategy build method called with data:", data);
        return `User ${data.userId} liked your post!`;
    }
}