import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"; // Add this import

export default function AlertsPage() {
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
        <h2 className="text-3xl font-bold tracking-tight ml-2">Alerts & Notifications</h2>
        {/* Modified section ends here */}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>Review and manage all system-generated alerts.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for a list of alerts (tailgating, camera malfunction, unauthorized access attempts) will go here.</p>
          <p className="mt-2 text-muted-foreground">
            (e.g., Filterable table of alerts, alert details, resolution options)
          </p>
        </CardContent>
      </Card>
    </SidebarInset>
  );
}
