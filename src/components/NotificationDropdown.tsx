import { useState } from "react";
import { Bell, Check, X, Clock, Star, AlertCircle } from "lucide-react";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "reminder";
  time: string;
  read: boolean;
}

interface NotificationDropdownProps {
  className?: string;
}

export const NotificationDropdown = ({ className = "" }: NotificationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Counseling Session Reminder",
      message: "Your session with Dr. Himanshu Pal is tomorrow at 2:00 PM",
      type: "reminder",
      time: "2 hours ago",
      read: false
    },
    {
      id: "2", 
      title: "Achievement Unlocked!",
      message: "Congratulations! You've earned the 'Consistent Learner' badge",
      type: "success",
      time: "1 day ago",
      read: false
    },
    {
      id: "3",
      title: "Study Materials Updated",
      message: "New resources have been added to your Mathematics course",
      type: "info", 
      time: "2 days ago",
      read: true
    },
    {
      id: "4",
      title: "Attendance Alert",
      message: "Your attendance is below 75%. Consider scheduling a counseling session",
      type: "warning",
      time: "3 days ago",
      read: false
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;
  const hasUnread = unreadCount > 0;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "success": return Star;
      case "warning": return AlertCircle;
      case "reminder": return Clock;
      default: return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success": return "text-secondary";
      case "warning": return "text-amber-500";
      case "reminder": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:bg-primary/10 rounded-lg transition-colors"
      >
        <Bell size={20} className="text-muted-foreground" />
        {hasUnread && (
          <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-elegant border z-40 max-h-96 overflow-hidden">
            <div className="p-4 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Notifications</h3>
                {hasUnread && (
                  <button
                    onClick={markAllAsRead}
                    className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    <Check size={14} />
                    Mark all as read
                  </button>
                )}
              </div>
              {hasUnread && (
                <p className="text-sm text-muted-foreground mt-1">
                  {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
                </p>
              )}
            </div>

            <div className="max-h-64 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-6 text-center text-muted-foreground">
                  <Bell size={32} className="mx-auto mb-2 opacity-50" />
                  <p>No notifications yet</p>
                </div>
              ) : (
                notifications.map((notification) => {
                  const Icon = getNotificationIcon(notification.type);
                  return (
                    <div
                      key={notification.id}
                      className={`p-3 border-b hover:bg-muted/20 transition-colors ${
                        !notification.read ? 'bg-primary/5' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Icon 
                          size={18} 
                          className={getNotificationColor(notification.type)}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-medium text-sm ${
                            !notification.read ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {notification.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {notification.time}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          {!notification.read && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="p-1 hover:bg-primary/10 rounded text-primary"
                              title="Mark as read"
                            >
                              <Check size={14} />
                            </button>
                          )}
                          <button
                            onClick={() => deleteNotification(notification.id)}
                            className="p-1 hover:bg-red-50 rounded text-red-500"
                            title="Delete"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
