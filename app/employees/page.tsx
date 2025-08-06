import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"; // Add this import

export default function EmployeesPage() {
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
        <h2 className="text-3xl font-bold tracking-tight ml-2">Employees Management</h2>
        {/* Modified section ends here */}
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
          <CardDescription>Manage employee profiles and access permissions.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Content for employee list, add/edit forms, etc., will go here.</p>
          <p className="mt-2 text-muted-foreground">
            (e.g., Table of employees, search bar, add new employee button)
          </p>
        </CardContent>
      </Card>
    </SidebarInset>
  );
}
