import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"; // Add this import

export default function SettingsPage() {
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
        <h2 className="text-3xl font-bold tracking-tight ml-2">System Settings</h2>
        {/* Modified section ends here */}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>General Settings</CardTitle>
          <CardDescription>Configure system-wide parameters and preferences.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for various settings like user management, security policies, notification preferences, and data retention will go here.</p>
          <p className="mt-2 text-muted-foreground">
            (e.g., Forms for configuration, user roles, API keys)
          </p>
        </CardContent>
      </Card>
    </SidebarInset>
  );
}
