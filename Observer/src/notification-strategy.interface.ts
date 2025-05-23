export interface NotificationStrategy {
  build(data: any): string;
}