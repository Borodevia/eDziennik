import { Card } from '@/components/ui/card';
import { TypographyH2, TypographyMuted } from '@/components/ui/typography';

export const GradesCard = () => {
  return (
    <Card className="p-6">
      <TypographyH2 className="mb-4">Oceny</TypographyH2>
      <TypographyMuted>Twoje najnowsze oceny</TypographyMuted>
    </Card>
  );
};
