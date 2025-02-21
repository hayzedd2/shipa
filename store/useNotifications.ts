import { create } from "zustand";
interface notificationsProps {
  message: string;
  type: "success" | "error" | "warning";
}
interface notificationsStoreProps {
  notifications: notificationsProps[];
  sendNotification: (notification: notificationsProps) => void;
  deleteAllNotifications: () => void;
}

export const useNotifications = create<notificationsStoreProps>((set) => ({
  notifications: [
    {
      message: "Welcome to the dashboard, you can manage your shipments here.",
      type: "success",
    },
    
  ],
  sendNotification: (notification) => {
    set((state) => ({
      notifications: [...state.notifications, notification],
    }));
  },
  deleteAllNotifications: () => {
    set({
      notifications: [],
    });
  },
}));
