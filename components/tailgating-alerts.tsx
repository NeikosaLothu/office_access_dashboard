import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function TailgatingAlerts() {
  const alerts = [
    { id: "T001", time: "10:25 AM", location: "Main Entrance", description: "Employee Charlie Brown swiped, but two individuals entered." },
    { id: "T002", time: "09:10 AM", location: "Back Exit", description: "Unauthorized person followed an employee through the door." },
    { id: "T003", time: "08:00 AM", location: "Main Entrance", description: "Multiple individuals detected on single card swipe." },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tailgating Alerts</CardTitle>
        <CardDescription>
          Detected instances of tailgating or unauthorized multiple entries.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Alert ID</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((alert) => (
              <TableRow key={alert.id}>
                <TableCell className="font-medium">{alert.id}</TableCell>
                <TableCell>{alert.time}</TableCell>
                <TableCell>{alert.location}</TableCell>
                <TableCell>{alert.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
