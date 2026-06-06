import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudyMaterials from "./pages/StudyMaterials";
import Achievements from "./pages/Achievements";
import AchievementsAnalytics from "./pages/AchievementsAnalytics";
import Goals from "./pages/Goals";
import Wellness from "./pages/Wellness";
import AdminPanel from "./pages/AdminPanel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ViewRequirement from "./pages/ViewRequirement";
import ResourceViewer from "./pages/ResourceViewer";
import ScheduleSession from "./pages/ScheduleSession";
import EmergencyChat from "./pages/EmergencyChat";
import NotificationPanel from "./pages/NotificationPanel";
import CounselorProfile from "./pages/CounselorProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/study-materials" element={<StudyMaterials />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievements-analytics" element={<AchievementsAnalytics />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/view-requirement" element={<ViewRequirement />} />
          <Route path="/resource-viewer" element={<ResourceViewer />} />
          <Route path="/schedule-session" element={<ScheduleSession />} />
          <Route path="/counselor-profile" element={<CounselorProfile />} />
          <Route path="/admin" element={<AdminPanel />} />
        <Route path="/emergency-chat" element={<EmergencyChat />} />
        <Route path="/notification-panel" element={<NotificationPanel />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
