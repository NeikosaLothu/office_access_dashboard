import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function CameraStatus() {
  const cameras = [
    { id: "CAM-001", location: "Main Entrance", status: "Online" },
    { id: "CAM-002", location: "Server Room", status: "Online" },
    { id: "CAM-003", location: "Back Exit", status: "Malfunctioning" },
    { id: "CAM-004", location: "Cafeteria", status: "Online" },
    { id: "CAM-005", location: "Parking Lot", status: "Offline" },
  ];

  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Camera Status</CardTitle>
        <CardDescription>
          Real-time operational status of all cameras.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Camera ID</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cameras.map((camera) => (
              <TableRow key={camera.id}>
                <TableCell className="font-medium">{camera.id}</TableCell>
                <TableCell>{camera.location}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      camera.status === "Online"
                        ? "default"
                        : camera.status === "Malfunctioning"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {camera.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
