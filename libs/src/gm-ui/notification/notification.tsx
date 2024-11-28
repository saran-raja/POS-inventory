import { notification as AntNotification } from 'antd';

export const Notification = {
  success: (message: string, description?: string, duration: number = 4.5, placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' = 'topRight') => {
    AntNotification.success({
      message,
      description,
      duration,
      placement,
    });
  },
  error: (message: string, description?: string, duration: number = 4.5, placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' = 'topRight') => {
    AntNotification.error({
      message,
      description,
      duration,
      placement,
    });
  },
};

export default Notification;
