import { Card } from '@/components/ui/card';
import { TypographyH2, TypographyMuted } from '@/components/ui/typography';

export const ExamsCard = () => {
  return (
    <Card className="p-6">
      <TypographyH2 className="mb-4">Sprawdziany</TypographyH2>
      <TypographyMuted>Nadchodzące sprawdziany</TypographyMuted>
    </Card>
  );
};
