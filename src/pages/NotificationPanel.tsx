import { useState } from "react";
import { ArrowLeft, Bell, Check, X, Clock, Star, AlertCircle, Settings, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";
import { Button } from "@/components/ui/button";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "reminder";
  time: string;
  read: boolean;
  category: string;
}

const NotificationPanel = () => {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Counseling Session Reminder",
      message: "Your session with Dr. Himanshu Pal is tomorrow at 2:00 PM. Please prepare any topics you'd like to discuss.",
      type: "reminder",
      time: "2 hours ago",
      read: false,
      category: "counseling"
    },
    {
      id: "2", 
      title: "Achievement Unlocked!",
      message: "Congratulations! You've earned the 'Consistent Learner' badge for maintaining regular study habits.",
      type: "success",
      time: "1 day ago",
      read: false,
      category: "achievements"
    },
    {
      id: "3",
      title: "Study Materials Updated",
      message: "New resources have been added to your Mathematics course including practice problems and video tutorials.",
      type: "info", 
      time: "2 days ago",
      read: true,
      category: "academics"
    },
    {
      id: "4",
      title: "Attendance Alert",
      message: "Your attendance is below 75%. Consider scheduling a counseling session to discuss strategies for improvement.",
      type: "warning",
      time: "3 days ago",
      read: false,
      category: "academics"
    },
    {
      id: "5",
      title: "New Wellness Resource",
      message: "A new stress management guide has been added to your wellness resources.",
      type: "info",
      time: "4 days ago",
      read: true,
      category: "wellness"
    },
    {
      id: "6",
      title: "Goal Progress Update",
      message: "You're 80% complete with your monthly study goal. Keep up the great work!",
      type: "success",
      time: "5 days ago",
      read: false,
      category: "goals"
    }
  ]);

  const filters = [
    { id: "all", name: "All Notifications", count: notifications.length },
    { id: "unread", name: "Unread", count: notifications.filter(n => !n.read).length },
    { id: "counseling", name: "Counseling", count: notifications.filter(n => n.category === "counseling").length },
    { id: "academics", name: "Academics", count: notifications.filter(n => n.category === "academics").length },
    { id: "achievements", name: "Achievements", count: notifications.filter(n => n.category === "achievements").length },
    { id: "wellness", name: "Wellness", count: notifications.filter(n => n.category === "wellness").length }
  ];

  const getFilteredNotifications = () => {
    if (selectedFilter === "all") return notifications;
    if (selectedFilter === "unread") return notifications.filter(n => !n.read);
    return notifications.filter(n => n.category === selectedFilter);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

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

  const filteredNotifications = getFilteredNotifications();

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <DropShieldLogo size="md" />
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Back to Dashboard</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Notifications
            </h1>
            <p className="text-muted-foreground">
              {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''} • {notifications.length} total
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {unreadCount > 0 && (
              <Button onClick={markAllAsRead} variant="outline" size="sm">
                <Check size={16} />
                Mark all as read
              </Button>
            )}
            <Button variant="outline" size="sm">
              <Settings size={16} />
              <span className="hidden sm:inline">Settings</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-gentle p-4">
              <div className="flex items-center gap-2 mb-4">
                <Filter size={18} className="text-muted-foreground" />
                <h3 className="font-semibold">Filter by</h3>
              </div>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedFilter === filter.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{filter.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedFilter === filter.id
                          ? 'bg-primary-foreground/20'
                          : 'bg-muted'
                      }`}>
                        {filter.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Notifications List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {filteredNotifications.length === 0 ? (
                <div className="card-gentle p-8 text-center">
                  <Bell size={48} className="mx-auto mb-4 text-muted-foreground/50" />
                  <h3 className="text-lg font-semibold mb-2">No notifications found</h3>
                  <p className="text-muted-foreground">
                    {selectedFilter === "all" 
                      ? "You're all caught up! No notifications to show."
                      : `No ${selectedFilter} notifications to show.`
                    }
                  </p>
                </div>
              ) : (
                filteredNotifications.map((notification) => {
                  const Icon = getNotificationIcon(notification.type);
                  return (
                    <div
                      key={notification.id}
                      className={`card-gentle p-4 sm:p-6 border-l-4 ${
                        !notification.read 
                          ? 'border-l-primary bg-primary/5' 
                          : 'border-l-transparent'
                      } transition-all hover:shadow-md`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-lg ${
                          !notification.read ? 'bg-primary/20' : 'bg-muted/50'
                        }`}>
                          <Icon 
                            size={20} 
                            className={getNotificationColor(notification.type)}
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h4 className={`font-semibold ${
                              !notification.read ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {notification.title}
                            </h4>
                            <div className="flex items-center gap-1 flex-shrink-0">
                              {!notification.read && (
                                <button
                                  onClick={() => markAsRead(notification.id)}
                                  className="p-1 hover:bg-primary/10 rounded text-primary transition-colors"
                                  title="Mark as read"
                                >
                                  <Check size={14} />
                                </button>
                              )}
                              <button
                                onClick={() => deleteNotification(notification.id)}
                                className="p-1 hover:bg-red-50 rounded text-red-500 transition-colors"
                                title="Delete"
                              >
                                <X size={14} />
                              </button>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {notification.message}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock size={12} />
                              {notification.time}
                            </p>
                            <span className={`text-xs px-2 py-1 rounded-full capitalize ${
                              notification.category === 'counseling' 
                                ? 'bg-primary/10 text-primary'
                                : notification.category === 'academics'
                                ? 'bg-blue-100 text-blue-700'
                                : notification.category === 'achievements'
                                ? 'bg-secondary/10 text-secondary'
                                : notification.category === 'wellness'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-muted text-muted-foreground'
                            }`}>
                              {notification.category}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotificationPanel;
