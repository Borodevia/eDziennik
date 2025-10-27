import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { ExamsCard } from '@/components/exams/exams-card';
import { GradesCard } from '@/components/grades/grades-card';
import { ScheduleCard } from '@/components/schedule/schedule-card';
import { mockScheduleData } from '@/data/mockSchedule';

export default function Home() {
  // Możesz przekazać konkretną datę lub pozostawić puste dla aktualnego czasu
  const todayDate = new Date().toISOString();

  return (
    <DashboardLayout>
      <GradesCard />
      <ScheduleCard scheduleData={mockScheduleData} todayDate={todayDate} />
      <ExamsCard />
    </DashboardLayout>
  );
}
