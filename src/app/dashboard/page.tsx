import { Card } from '@/components/ui/card';
import {
  TypographyH3,
  TypographyMedium,
  TypographyMuted,
} from '@/components/ui/typography';
import {
  formatTime,
  getEarliestTime,
  getLatestTime,
  parseTime,
  type Lesson,
} from '@/lib/timetable-utils';

const data = {
  timetable: [
    {
      lessonNumber: 1,
      startTime: '8:00',
      endTime: '8:45',
      roomNumber: '12',
      teacher: 'A. Kowalski',
      subject: 'Matematyka',
    },
    {
      lessonNumber: 2,
      startTime: '8:50',
      endTime: '9:35',
      roomNumber: '15',
      teacher: 'M. Nowak',
      subject: 'Język polski',
    },
    {
      lessonNumber: 3,
      startTime: '9:45',
      endTime: '10:30',
      roomNumber: '8',
      teacher: 'P. Wiśniewski',
      subject: 'Fizyka',
    },
    {
      lessonNumber: 4,
      startTime: '10:40',
      endTime: '11:25',
      roomNumber: '22',
      teacher: 'K. Dąbrowska',
      subject: 'Historia',
    },
    {
      lessonNumber: 5,
      startTime: '11:35',
      endTime: '12:20',
      roomNumber: '5',
      teacher: 'J. Lewandowski',
      subject: 'Chemia',
    },
    {
      lessonNumber: 6,
      startTime: '12:30',
      endTime: '13:15',
      roomNumber: '18',
      teacher: 'E. Zielińska',
      subject: 'Język angielski',
    },
  ],
};

export default function Home() {
  // Test the time utilities
  const lessons = data.timetable as Lesson[];
  const earliest = getEarliestTime(lessons);
  const latest = getLatestTime(lessons);

  console.log('Earliest time:', earliest, 'minutes =', formatTime(earliest));
  console.log('Latest time:', latest, 'minutes =', formatTime(latest));
  console.log("parseTime('8:00'):", parseTime('8:00'));
  console.log("parseTime('13:15'):", parseTime('13:15'));

  return (
    <div className="grid grid-cols-2 grid-rows-2 h-full p-4 gap-4">
      <Card className="p-6">
        <TypographyH3 className="mb-4">Oceny</TypographyH3>
        <TypographyMuted>Twoje najnowsze oceny</TypographyMuted>
      </Card>
      <Card className="row-span-2 p-6 flex flex-col">
        <TypographyH3 className="mb-4">Plan Lekcji</TypographyH3>
        <div className="flex flex-row overflow-y-auto max-h-[60vh]">
          <div className="w-[40px]">
            <TypographyMuted className="h-[80px]">8.00</TypographyMuted>
            <TypographyMuted className="h-[80px]">9.00</TypographyMuted>
            <TypographyMuted className="h-[80px]">10.00</TypographyMuted>
            <TypographyMuted className="h-[80px]">11.00</TypographyMuted>
            <TypographyMuted className="h-[80px]">12.00</TypographyMuted>
            <TypographyMuted className="h-[80px]">13.00</TypographyMuted>
            <TypographyMuted className="h-[80px]">14.00</TypographyMuted>
            <TypographyMuted className="h-[80px]">15.00</TypographyMuted>
            <TypographyMuted className="h-[80px]">16.00</TypographyMuted>
          </div>
          <div className="flex flex-col">
            {data.timetable.map((lesson) => (
              <div className="flex flex-row p-2" key={lesson.lessonNumber}>
                <div className="text-sm">
                  <TypographyMedium>{lesson.subject}</TypographyMedium>
                  <TypographyMuted>
                    {lesson.startTime} - {lesson.endTime} • Sala{' '}
                    {lesson.roomNumber}
                  </TypographyMuted>
                  <TypographyMuted>{lesson.teacher} </TypographyMuted>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <TypographyH3 className="mb-4">Sprawdziany</TypographyH3>
        <TypographyMuted>Nadchodzące sprawdziany</TypographyMuted>
      </Card>
    </div>
  );
}
