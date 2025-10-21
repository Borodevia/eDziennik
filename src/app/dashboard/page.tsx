import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { ExamsCard } from '@/components/exams/exams-card';
import { GradesCard } from '@/components/grades/grades-card';
import { ScheduleCard } from '@/components/schedule/schedule-card';
import { mockScheduleData } from '@/data/mockSchedule';
import { useSchedule } from '@/hooks/use-schedule';

export default function Home() {
  // Możesz przekazać konkretną datę lub pozostawić puste dla aktualnego czasu
  const { todaysLessons } = useSchedule(
    mockScheduleData,
    '2025-10-20T12:00:00'
  );

  return (
    <DashboardLayout>
      <GradesCard />
      <ScheduleCard lessons={todaysLessons} />
      <ExamsCard />
    </DashboardLayout>
  );
}
