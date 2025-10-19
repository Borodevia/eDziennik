import { LessonWithException } from '@/types/schedule';
import { AlertTriangle, XCircle } from 'lucide-react';
import { Badge } from '../ui/badge';
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

  const baseStart = lesson.start;
  const baseEnd = lesson.end;
  const overrideStart = lesson.exception?.newData?.start ?? baseStart;
  const overrideEnd = lesson.exception?.newData?.end ?? baseEnd;
  const hasTimeOverride =
    lesson.exception?.newData?.start !== undefined ||
    lesson.exception?.newData?.end !== undefined;

  const subjectOverride = lesson.exception?.newData?.subject;
  const teacherOverride = lesson.exception?.newData?.teacher;
  const roomOverride = lesson.exception?.newData?.room;

  // When substitution happens, strike only the fields that got overridden
  const strikeSubject = isCanceled || (isSubstitution && !!subjectOverride);
  const strikeTime = isCanceled || (isSubstitution && hasTimeOverride);
  const strikeTeacher = isCanceled || (isSubstitution && !!teacherOverride);
  const strikeRoom = isCanceled || (isSubstitution && !!roomOverride);

  return (
    <Card className="relative w-[320px] p-3 transition-colors hover:shadow-sm">
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-1 rounded-l-md"
      />

      <div className="flex h-full flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex min-w-0 items-center gap-1">
              <TypographyMedium
                className={`truncate font-medium ${strikeSubject ? 'line-through opacity-50' : ''}`}
              >
                {lesson.subject}
              </TypographyMedium>
              {subjectOverride && (
                <TypographyMedium className="flex items-center text-emerald-600 whitespace-nowrap">
                  <span className="truncate">{subjectOverride}</span>
                </TypographyMedium>
              )}
            </div>
          </div>

          {isCanceled ?
            <Badge variant="destructive" className="gap-1">
              <XCircle className="h-3 w-3" /> Odwołane
            </Badge>
          : isSubstitution ?
            <Badge
              variant="outline"
              className="gap-1 border-amber-300 bg-amber-50 text-amber-700"
            >
              <AlertTriangle className="h-3 w-3" /> Zastępstwo
            </Badge>
          : null}
        </div>

        <div className="mt-1 flex items-center gap-2 text-sm">
          <TypographySmall
            className={`${strikeTime ? 'line-through opacity-50' : ''} whitespace-nowrap`}
          >
            {formatSecondsToTime(baseStart)} - {formatSecondsToTime(baseEnd)}
          </TypographySmall>
          {hasTimeOverride && (
            <TypographySmall className="flex items-center text-emerald-600 whitespace-nowrap">
              {formatSecondsToTime(overrideStart)} -{' '}
              {formatSecondsToTime(overrideEnd)}
            </TypographySmall>
          )}
        </div>

        <div className="mt-1 grid grid-cols-[auto_1fr] items-center gap-x-2 gap-y-1 text-sm">
          <div className="min-w-0 flex items-center gap-1">
            <TypographySmall
              className={`truncate ${strikeTeacher ? 'line-through opacity-50' : ''}`}
            >
              {lesson.teacher},
            </TypographySmall>
            {teacherOverride && (
              <TypographySmall className="flex items-center text-emerald-600 whitespace-nowrap">
                <span className="truncate">{teacherOverride},</span>
              </TypographySmall>
            )}
          </div>

          <div className="min-w-0 flex items-center gap-1">
            <TypographySmall
              className={`truncate ${strikeRoom ? 'line-through opacity-50' : ''}`}
            >
              sala {lesson.room}
            </TypographySmall>
            {roomOverride && (
              <TypographySmall className="flex items-center text-emerald-600 whitespace-nowrap">
                <span className="truncate">sala {roomOverride}</span>
              </TypographySmall>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
