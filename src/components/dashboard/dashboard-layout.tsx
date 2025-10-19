import { ReactNode } from 'react';

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] grid-rows-2 h-[calc(100vh-4rem)] max-h-[calc(100vh-4rem)] p-4 gap-4 overflow-hidden">
      {children}
    </div>
  );
};
