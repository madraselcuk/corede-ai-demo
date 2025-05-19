export interface IWebNotificationPreview {
  name: string;
  subject?: string;
  content: string;
  data?: IWebNotificationPreviewData;
}

export interface IWebNotificationPreviewData {
  targetId?: string;
  targetModel?: string;
}
