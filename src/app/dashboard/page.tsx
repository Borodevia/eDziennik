import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Home() {

  const timetableData = [
    {
      lessonNumber: 1,
      startTime: "8:00",
      endTime: "8:45",
      roomNumber: "12",
      teacher: "A. Kowalski",
      subject: "Matematyka"
    },
    {
      lessonNumber: 2,
      startTime: "8:50",
      endTime: "9:35",
      roomNumber: "15",
      teacher: "M. Nowak",
      subject: "Język polski"
    },
    {
      lessonNumber: 3,
      startTime: "9:45",
      endTime: "10:30",
      roomNumber: "8",
      teacher: "P. Wiśniewski",
      subject: "Fizyka"
    },
    {
      lessonNumber: 4,
      startTime: "10:40",
      endTime: "11:25",
      roomNumber: "22",
      teacher: "K. Dąbrowska",
      subject: "Historia"
    },
    {
      lessonNumber: 5,
      startTime: "11:35",
      endTime: "12:20",
      roomNumber: "5",
      teacher: "J. Lewandowski",
      subject: "Chemia"
    },
    {
      lessonNumber: 6,
      startTime: "12:30",
      endTime: "13:15",
      roomNumber: "18",
      teacher: "E. Zielińska",
      subject: "Język angielski"
    }
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-full p-4 gap-4">
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Oceny</h2>
        <div className="text-gray-600">Twoje najnowsze oceny</div>
      </Card>
      <Card className="row-span-2 p-6">
        <h2 className="text-xl font-semibold mb-4">Plan Lekcji</h2>
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">Nr</TableHead>
                <TableHead className="w-[80px]">Godziny</TableHead>
                <TableHead className="w-[60px]">Sala</TableHead>
                <TableHead className="w-[120px]">Nauczyciel</TableHead>
                <TableHead>Przedmiot</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {timetableData.map((lesson) => (
                <TableRow key={lesson.lessonNumber}>
                  <TableCell className="font-medium">{lesson.lessonNumber}</TableCell>
                  <TableCell className="text-sm">
                    <div>{lesson.startTime}</div>
                    <div className="text-gray-500">{lesson.endTime}</div>
                  </TableCell>
                  <TableCell>{lesson.roomNumber}</TableCell>
                  <TableCell className="text-sm">{lesson.teacher}</TableCell>
                  <TableCell className="font-medium">{lesson.subject}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Sprawdziany</h2>
        <div className="text-gray-600">Nadchodzące sprawdziany</div>
      </Card>
    </div>
  );
}
