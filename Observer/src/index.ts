import { NotificationStrategyContext } from "./notification-strategy.context";
import { LikeStrategy } from "./notification/strategy/like.strategy";

import { NotificationSubject } from "./notification.subject";
import { EmailService } from "./notification/observers/email.service";
import { LoggerService } from "./notification/observers/logger.service";
import { WebSocketService } from "./notification/observers/websocket.service";
import { PushNotificationService } from "./notification/observers/pushnotification.service";

const strategyContext = new NotificationStrategyContext(new LikeStrategy());
const notificationSubject = new NotificationSubject();

notificationSubject.addObserver(new EmailService());
notificationSubject.addObserver(new LoggerService()); 
notificationSubject.addObserver(new WebSocketService());
notificationSubject.addObserver(new PushNotificationService());

const message = strategyContext.build({
    userId: 1,
    postId: 2,});

notificationSubject.notify("like_post",{userId:'A', message});