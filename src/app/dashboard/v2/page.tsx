'use client';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  TypographyH2,
  TypographyH3,
  TypographyMedium,
  TypographyMuted,
} from '@/components/ui/typography';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const data = {
  timetable: {
    monday: [
      {
        startTime: 28800,
        endTime: 31500,
        roomNumber: '12',
        teacher: 'A. Kowalski',
        subject: 'Matematyka',
      },
      {
        startTime: 31800, // 8:50 in seconds
        endTime: 34500, // 9:35 in seconds
        roomNumber: '15',
        teacher: 'M. Nowak',
        subject: 'Język polski',
      },
      {
        roomNumber: '8',
        teacher: 'P. Wiśniewski',
        subject: 'Fizyka',
        startTime: 34800,
        endTime: 37500,
      },
      {
        roomNumber: '22',
        teacher: 'K. Dąbrowska',
        subject: 'Historia',
        startTime: 37800,
        endTime: 40500,
      },
      {
        roomNumber: '5',
        teacher: 'J. Lewandowski',
        subject: 'Chemia',
        startTime: 41700,
        endTime: 44400,
      },
      {
        roomNumber: '18',
        teacher: 'P. Kowalczyk',
        subject: 'Geografia',
        startTime: 45000,
        endTime: 47700,
      },
      {
        roomNumber: '18',
        teacher: 'A. Wójcik',
        subject: 'Informatyka',
        startTime: 48000,
        endTime: 51300,
      },
      {
        roomNumber: '18',
        teacher: 'M. Grabowski',
        subject: 'Muzyka',
        startTime: 51600,
        endTime: 54300,
      },
      {
        roomNumber: '18',
        teacher: 'S. Majewska',
        subject: 'Biologia',
        startTime: 54600,
        endTime: 57300,
      },
      {
        roomNumber: '18',
        teacher: 'T. Kaczmarek',
        subject: 'Wychowanie fizyczne',
        startTime: 57600,
        endTime: 60300,
      },
    ],
    tuesday: [
      {
        roomNumber: '21',
        teacher: 'E. Kaczmarek',
        subject: 'Język angielski',
        startTime: 28800,
        endTime: 31500,
      },
      {
        roomNumber: '15',
        teacher: 'M. Nowak',
        subject: 'Biologia',
        startTime: 31800,
        endTime: 34500,
      },
      {
        roomNumber: '7',
        teacher: 'P. Zieliński',
        subject: 'Wiedza o społeczeństwie',
        startTime: 34800,
        endTime: 37500,
      },
      {
        roomNumber: '12',
        teacher: 'A. Kowalski',
        subject: 'Matematyka',
        startTime: 37800,
        endTime: 40500,
      },
      {
        roomNumber: '3',
        teacher: 'B. Szymańska',
        subject: 'Plastyka',
        startTime: 41700,
        endTime: 44400,
      },
      {
        roomNumber: '18',
        teacher: 'P. Kowalczyk',
        subject: 'Geografia',
        startTime: 45000,
        endTime: 47700,
      },
    ],
    wednesday: [
      {
        roomNumber: '10',
        teacher: 'K. Dąbrowska',
        subject: 'Historia',
        startTime: 28800,
        endTime: 31500,
      },
      {
        roomNumber: '15',
        teacher: 'M. Nowak',
        subject: 'Język polski',
        startTime: 31800,
        endTime: 34500,
      },
      {
        roomNumber: '8',
        teacher: 'P. Wiśniewski',
        subject: 'Fizyka',
        startTime: 34800,
        endTime: 37500,
      },
      {
        roomNumber: '14',
        teacher: 'A. Wójcik',
        subject: 'Informatyka',
        startTime: 37800,
        endTime: 40500,
      },
      {
        roomNumber: '5',
        teacher: 'J. Lewandowski',
        subject: 'Chemia',
        startTime: 41700,
        endTime: 44400,
      },
    ],
    thursday: [
      {
        roomNumber: '12',
        teacher: 'A. Kowalski',
        subject: 'Matematyka',
        startTime: 28800,
        endTime: 31500,
      },
      {
        roomNumber: '22',
        teacher: 'K. Dąbrowska',
        subject: 'Historia',
        startTime: 31800,
        endTime: 34500,
      },
      {
        roomNumber: '18',
        teacher: 'P. Kowalczyk',
        subject: 'Geografia',
        startTime: 34800,
        endTime: 37500,
      },
      {
        roomNumber: '9',
        teacher: 'M. Grabowski',
        subject: 'Muzyka',
        startTime: 37800,
        endTime: 40500,
      },
      {
        roomNumber: '4',
        teacher: 'S. Majewska',
        subject: 'Biologia',
        startTime: 41700,
        endTime: 44400,
      },
      {
        roomNumber: '18',
        teacher: 'T. Kaczmarek',
        subject: 'Wychowanie fizyczne',
        startTime: 45000,
        endTime: 47700,
      },
    ],
    friday: [
      {
        roomNumber: '11',
        teacher: 'B. Szymańska',
        subject: 'Plastyka',
        startTime: 28800,
        endTime: 31500,
      },
      {
        roomNumber: '15',
        teacher: 'M. Nowak',
        subject: 'Język polski',
        startTime: 31800,
        endTime: 34500,
      },
      {
        roomNumber: '8',
        teacher: 'P. Wiśniewski',
        subject: 'Fizyka',
        startTime: 34800,
        endTime: 37500,
      },
      {
        roomNumber: '12',
        teacher: 'A. Kowalski',
        subject: 'Matematyka',
        startTime: 37800,
        endTime: 40500,
      },
      {
        roomNumber: '3',
        teacher: 'E. Kaczmarek',
        subject: 'Język angielski',
        startTime: 41700,
        endTime: 44400,
      },
    ],
    saturday: [],
    sunday: [],
  },
};

const timeToMinutes = (time: number): number => {
  const out = time / 60;
  console.log(out);
  return out;
};

type DayKey = keyof typeof data.timetable;

const generateTimetable = function (day: DayKey) {
  const lessons = data.timetable[day];
  if (!lessons || lessons.length == 0)
    return { hours: [], lessons: [], totalHeight: 0 };

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
  const [dayIndex, setDayIndex] = useState<number>(() => {
    const d = new Date().getDay();
    return d === 0 ? 7 : d;
  });
  const dayMap: Record<number, DayKey> = {
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
    7: 'sunday',
  };

  const dayMapPL: Record<number, string> = {
    1: 'Poniedziałek',
    2: 'Wtorek',
    3: 'Środa',
    4: 'Czwartek',
    5: 'Piątek',
    6: 'Sobota',
    7: 'Niedziela',
  };

  const todayKey = dayMap[dayIndex];
  const { hours, lessons, totalHeight } = generateTimetable(todayKey);

  // Handlers to move the displayed day forward/backward (wrap around 1..7)
  const prevDay = () => setDayIndex((d) => (d === 1 ? 7 : d - 1));
  const nextDay = () => setDayIndex((d) => (d === 7 ? 1 : d + 1));

  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] grid-rows-2 h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] p-4 gap-4 overflow-hidden">
      <Card className="p-6">
        <TypographyH2 className="mb-4">Oceny</TypographyH2>
        <TypographyMuted>Twoje najnowsze oceny</TypographyMuted>
      </Card>
      <Card className="row-span-2 p-6 flex flex-col min-h-0 pr-6">
        <TypographyH2 className="mb-4">Plan Lekcji</TypographyH2>
        <div className="flex flex-row justify-between pr-6">
          <TypographyH3>{dayMapPL[dayIndex]}</TypographyH3>
          <ButtonGroup>
            <Button
              variant="outline"
              size="lg"
              onClick={prevDay}
              aria-label="Poprzedni dzień"
            >
              <ArrowLeft />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={nextDay}
              aria-label="Następny dzień"
            >
              <ArrowRight />
            </Button>
          </ButtonGroup>
        </div>
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
                  key={lesson.subject + lesson.startTime}
                  style={{
                    top: `${lesson.topOffset}px`,
                    height: `${lesson.height}px`,
                  }}
                >
                  <div className="text-sm">
                    <TypographyMedium>{lesson.subject}</TypographyMedium>
                    <TypographyMuted>
                      {f(lesson.startTime)} - {f(lesson.endTime)} • Sala{' '}
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
        <TypographyH2 className="mb-4">Sprawdziany</TypographyH2>
        <TypographyMuted>Nadchodzące sprawdziany</TypographyMuted>
      </Card>
    </div>
  );
}

const f = (ts: number): string =>
  `${Math.floor(ts / 3600)}:${(ts / 60 - Math.floor(ts / 3600) * 60).toString().padStart(2, '0')}`;
