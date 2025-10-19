'use client';

import { Card } from '@/components/ui/card';
import { TypographyH2 } from '@/components/ui/typography';
import { LessonWithException } from '@/types/schedule';
import { LessonItem } from './lesson-item';

interface ScheduleCardProps {
  lessons: LessonWithException[];
}

export const ScheduleCard = ({ lessons }: ScheduleCardProps) => {
  return (
    <Card className="row-span-2 p-6 flex flex-col min-h-0 pr-6">
      <TypographyH2 className="mb-4">Plan Lekcji</TypographyH2>
      <div className="overflow-y-auto">
        {lessons.length > 0 ?
          lessons.map((lesson) => (
            <LessonItem key={lesson.id} lesson={lesson} />
          ))
        : <p className="text-gray-500">Brak lekcji na dzisiaj</p>}
      </div>
    </Card>
  );
};
