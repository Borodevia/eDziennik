import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  TypographyH3,
  TypographyMedium,
  TypographyMuted,
} from '@/components/ui/typography';

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
      startTime: '9:40',
      endTime: '10:25',
      roomNumber: '8',
      teacher: 'P. Wiśniewski',
      subject: 'Fizyka',
    },
    {
      lessonNumber: 4,
      startTime: '10:30',
      endTime: '11:15',
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
    {
      lessonNumber: 7,
      startTime: '13:20',
      endTime: '14:15',
      roomNumber: '18',
      teacher: 'E. Zielińska',
      subject: 'Język angielski',
    },
    {
      lessonNumber: 8,
      startTime: '14:20',
      endTime: '15:05',
      roomNumber: '18',
      teacher: 'E. Zielińska',
      subject: 'Język angielski',
    },
    {
      lessonNumber: 9,
      startTime: '15:10',
      endTime: '15:55',
      roomNumber: '18',
      teacher: 'E. Zielińska',
      subject: 'Język angielski',
    },
    {
      lessonNumber: 10,
      startTime: '16:00',
      endTime: '16:45',
      roomNumber: '18',
      teacher: 'E. Zielińska',
      subject: 'Język angielski',
    },
  ],
};

const timeToMinutes = function (time: string): number {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

const generateTimetable = function (lessons: typeof data.timetable) {
  if (!lessons || lessons.length == 0) return { hours: [], lessons: [] };

  const startMinutes = Math.min(
    ...lessons.map((lesson) => timeToMinutes(lesson.startTime))
  );
  const endMinutes = Math.max(
    ...lessons.map((lesson) => timeToMinutes(lesson.endTime))
  );

  const startHour = Math.floor(startMinutes / 60);
  const endHour = Math.ceil(endMinutes / 60);

  const pixelsPerMinute = 2; // Adjust this value to control spacing

  const hours = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    const hourMinutes = hour * 60;
    const topOffset = (hourMinutes - startMinutes) * pixelsPerMinute;
    hours.push({
      time: `${hour.toString().padStart(2, '0')}:00`,
      topOffset,
    });
  }

  const lessonsWithPositions = lessons.map((lesson) => {
    const lessonStartMinutes = timeToMinutes(lesson.startTime);
    const lessonEndMinutes = timeToMinutes(lesson.endTime);

    const topOffset = (lessonStartMinutes - startMinutes) * pixelsPerMinute;
    const height = (lessonEndMinutes - lessonStartMinutes) * pixelsPerMinute;

    return {
      ...lesson,
      topOffset,
      height,
    };
  });

  const totalHeight = (endMinutes - startMinutes) * pixelsPerMinute;

  return { hours, lessons: lessonsWithPositions, totalHeight };
};

export default function Home() {
  const { hours, lessons, totalHeight } = generateTimetable(data.timetable);

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] grid-rows-2 h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] p-4 gap-4 overflow-hidden">
      <Card className="p-6">
        <TypographyH3 className="mb-4">Oceny</TypographyH3>
        <TypographyMuted>Twoje najnowsze oceny</TypographyMuted>
      </Card>
      <Card className="row-span-2 p-6 flex flex-col min-h-0 pr-6">
        <TypographyH3 className="mb-4">Plan Lekcji</TypographyH3>
        <ScrollArea className="flex-1 overflow-auto min-h-0 pr-6">
          <div className="flex flex-row h-full">
            <div
              className="w-[60px] relative"
              style={{ height: `${totalHeight}px` }}
            >
              {hours.map((hour) => (
                <div
                  key={hour.time}
                  className="flex items-start absolute before:content-[''] before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:w-[60px] before:bg-accent"
                  style={{ top: `${hour.topOffset}px` }}
                >
                  <TypographyMuted>{hour.time}</TypographyMuted>
                </div>
              ))}
            </div>
            <div
              className="relative ml-4"
              style={{ height: `${totalHeight}px` }}
            >
              <div className="w-[300px]" aria-hidden />
              {lessons.map((lesson) => (
                <Card
                  className="absolute flex flex-row p-2 w-[300px]"
                  key={lesson.lessonNumber}
                  style={{
                    top: `${lesson.topOffset}px`,
                    height: `${lesson.height}px`,
                  }}
                >
                  <div className="text-sm">
                    <TypographyMedium>{lesson.subject}</TypographyMedium>
                    <TypographyMuted>
                      {lesson.startTime} - {lesson.endTime} • Sala{' '}
                      {lesson.roomNumber}
                    </TypographyMuted>
                    <TypographyMuted>{lesson.teacher} </TypographyMuted>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </ScrollArea>
      </Card>
      <Card className="p-6">
        <TypographyH3 className="mb-4">Sprawdziany</TypographyH3>
        <TypographyMuted>Nadchodzące sprawdziany</TypographyMuted>
      </Card>
    </div>
  );
}
