import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function RecentEvents() {
  const events = [
    { id: "E001", employee: "Alice Johnson", time: "10:30 AM", status: "Granted", method: "Card Swipe" },
    { id: "E002", employee: "Bob Williams", time: "10:28 AM", status: "Granted", method: "Face ID" },
    { id: "E003", employee: "Charlie Brown", time: "10:25 AM", status: "Denied", method: "Card Swipe" },
    { id: "E004", employee: "Diana Prince", time: "10:20 AM", status: "Granted", method: "Card Swipe" },
    { id: "E005", employee: "Eve Adams", time: "10:15 AM", status: "Granted", method: "Face ID" },
    { id: "E006", employee: "Frank White", time: "10:10 AM", status: "Granted", method: "Card Swipe" },
  ];

  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Recent Access Events</CardTitle>
        <CardDescription>
          Latest entries and access attempts.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Event ID</TableHead>
              <TableHead>Employee</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.id}</TableCell>
                <TableCell>{event.employee}</TableCell>
                <TableCell>{event.time}</TableCell>
                <TableCell>
                  <Badge variant={event.status === "Granted" ? "default" : "destructive"}>
                    {event.status}
                  </Badge>
                </TableCell>
                <TableCell>{event.method}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
