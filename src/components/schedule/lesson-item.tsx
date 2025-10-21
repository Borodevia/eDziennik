import { Badge } from '@/components/ui/badge';
import { LessonWithException } from '@/types/schedule';
import { AlertTriangle, XCircle } from 'lucide-react';
import { Card } from '../ui/card';
import { TypographyMedium, TypographySmall } from '../ui/typography';

interface LessonItemProps {
  lesson: LessonWithException;
}

const formatSecondsToTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, '0');

  return `${hours}:${minutes}`;
};

export const LessonItem = ({ lesson }: LessonItemProps) => {
  const isCanceled = lesson.exception?.type === 'canceled';
  const isSubstitution = lesson.exception?.type === 'substitution';

  const displaySubject = lesson.exception?.newData?.subject ?? lesson.subject;
  const displayStart = lesson.exception?.newData?.start ?? lesson.start;
  const displayEnd = lesson.exception?.newData?.end ?? lesson.end;
  const displayTeacher = lesson.exception?.newData?.teacher ?? lesson.teacher;
  const displayRoom = lesson.exception?.newData?.room ?? lesson.room;
  // Kolor paska akcentu po lewej stronie
  const accentColorClass =
    isCanceled ? 'bg-rose-500/90'
    : isSubstitution ? 'bg-amber-500/90'
    : 'bg-zinc-300 dark:bg-zinc-600/90';
  const strikeClass = isCanceled ? 'line-through opacity-50' : '';

  return (
    <Card
      className={`relative w-[300px] p-3 transition-colors hover:shadow-sm rounded-l-sm h-20`}
    >
      <span
        aria-hidden
        className={`absolute left-0 top-0 h-full w-1 rounded-l-md ${accentColorClass}`}
      />

      <div className="flex h-full flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <TypographyMedium className={`truncate font-medium ${strikeClass}`}>
              {displaySubject}
            </TypographyMedium>
          </div>
          <div className="flex items-end gap-2 text-sm">
            <TypographySmall className={`whitespace-nowrap ${strikeClass}`}>
              {formatSecondsToTime(displayStart)} -{' '}
              {formatSecondsToTime(displayEnd)}
            </TypographySmall>
          </div>
        </div>

        <div
          className={`mt-1 flex items-center justify-between gap-2 text-sm `}
        >
          <TypographySmall className={strikeClass}>
            {displayTeacher}, sala {displayRoom}
          </TypographySmall>

          {isCanceled ?
            <Badge
              variant="outline"
              className={`gap-1 select-none ${accentColorClass} absolute right-2`}
            >
              <XCircle className="h-3 w-3" /> Odwołane
            </Badge>
          : isSubstitution ?
            <Badge
              variant="outline"
              className={`gap-1 select-none ${accentColorClass} absolute right-2`}
            >
              <AlertTriangle className="h-3 w-3" /> Zastępstwo
            </Badge>
          : null}
        </div>
      </div>
    </Card>
  );
};
