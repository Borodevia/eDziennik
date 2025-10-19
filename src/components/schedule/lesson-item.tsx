import { LessonWithException } from '@/types/schedule';

interface LessonItemProps {
  lesson: LessonWithException;
}

export const LessonItem = ({ lesson }: LessonItemProps) => {
  const isCanceled = lesson.exception?.type === 'canceled';
  const isSubstitution = lesson.exception?.type === 'substitution';

  return (
    <div className="p-2 border-b">
      {isCanceled && <p className="text-red-600 font-semibold">❌ ODWOŁANE</p>}
      {isSubstitution && (
        <p className="text-amber-600 font-semibold">⚠️ ZASTĘPSTWO</p>
      )}

      <p
        className={`font-medium ${isCanceled ? 'line-through opacity-50' : ''}`}
      >
        {lesson.subject}
      </p>

      {lesson.exception?.newData?.subject && (
        <p className="text-green-600">→ {lesson.exception.newData.subject}</p>
      )}

      <p
        className={`text-sm text-gray-600 ${isCanceled ? 'line-through opacity-50' : ''}`}
      >
        {lesson.teacher}, sala {lesson.room}
      </p>

      {lesson.exception?.newData && (
        <p className="text-sm text-green-600">
          → {lesson.exception.newData.teacher || lesson.teacher}, sala{' '}
          {lesson.exception.newData.room || lesson.room}
        </p>
      )}
    </div>
  );
};
