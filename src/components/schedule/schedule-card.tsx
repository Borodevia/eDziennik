'use client';
import { Card } from '@/components/ui/card';
import { TypographyH2, TypographyLead } from '@/components/ui/typography';
import { useSchedule } from '@/hooks/use-schedule';
import { ScheduleData } from '@/types/schedule';
import { addDays, format, parseISO, subDays } from 'date-fns';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { ButtonGroup } from '../ui/button-group';
import { LessonItem } from './lesson-item';

interface ScheduleCardProps {
  scheduleData: ScheduleData;
  todayDate?: string;
}

export const ScheduleCard = ({
  scheduleData,
  todayDate,
}: ScheduleCardProps) => {
  // Przechowuj datę w formacie ISO (yyyy-MM-dd)
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    todayDate
  );

  // Pobierz lekcje dla wybranej daty
  const { todaysLessons } = useSchedule(scheduleData, selectedDate);

  // Formatuj do wyświetlenia
  const formattedDate =
    selectedDate ? format(parseISO(selectedDate), 'dd.MM.yyyy') : '';

  const handlePreviousDay = () => {
    if (selectedDate) {
      const newDate = subDays(parseISO(selectedDate), 1);
      setSelectedDate(format(newDate, 'yyyy-MM-dd'));
    }
  };

  const handleNextDay = () => {
    if (selectedDate) {
      const newDate = addDays(parseISO(selectedDate), 1);
      setSelectedDate(format(newDate, 'yyyy-MM-dd'));
    }
  };
  return (
    <Card className="row-span-2 p-6 flex flex-col min-h-0">
      <TypographyH2 className="mb-4">Plan Lekcji</TypographyH2>
      <div className="flex justify-between">
        <TypographyLead className="">{formattedDate}</TypographyLead>
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="outline" size="icon" onClick={handlePreviousDay}>
              <ArrowLeft />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNextDay}>
              <ArrowRight />
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
      <div className="flex flex-col overflow-y-auto gap-2">
        {todaysLessons.length > 0 ?
          todaysLessons.map((lesson) => (
            <LessonItem key={lesson.id} lesson={lesson} />
          ))
        : <p className="text-gray-500">Brak lekcji na dzisiaj</p>}
      </div>
    </Card>
  );
};
