import { LayoutDashboard, Users, Camera, AlertTriangle, Settings, BarChart } from 'lucide-react';
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { OverviewCards } from "@/components/overview-cards";
import { RecentEvents } from "@/components/recent-events";
import { CameraStatus } from "@/components/camera-status";
import { TailgatingAlerts } from "@/components/tailgating-alerts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"; // Add this import

export default function DashboardPage() {
  return (
    <SidebarInset className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="flex items-center space-y-2">
        {/* Modified section starts here */}
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarTrigger className="-ml-1" />
          </TooltipTrigger>
          <TooltipContent side="right">Toggle Sidebar</TooltipContent>
        </Tooltip>
        <h2 className="text-3xl font-bold tracking-tight ml-2">Dashboard</h2>
        {/* Modified section ends here */}
      </div>
      <OverviewCards />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <RecentEvents />
        <CameraStatus />
      </div>
      <TailgatingAlerts />
    </SidebarInset>
  );
}
