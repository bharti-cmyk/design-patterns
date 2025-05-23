import { NotificationStrategy } from "../../notification-strategy.interface";

export class FollowStrategy implements NotificationStrategy {
    build(data: any): string {
        console.log("FollowStrategy build method called with data:", data);
        return `User ${data.followerId} started following you!`;
    }
}