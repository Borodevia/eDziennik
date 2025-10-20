'use client';

import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';
import { motion } from 'motion/react';

import type { SubjectGrades } from '@/app/dashboard/grades/page';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState, type ReactElement } from 'react';
import { Card } from '../ui/card';

type SubjectProps = {
  item: SubjectGrades;
  idx: number;
  scrollToMe?: () => void;
  subjectRef?: React.RefObject<HTMLDivElement>;
};

function Subject({
  item,
  idx,
  scrollToMe,
  subjectRef,
}: SubjectProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const MotionTableRow = motion(TableRow);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (open && scrollToMe && subjectRef?.current) {
      const top =
        subjectRef.current.getBoundingClientRect().top + window.scrollY - 60;
      setTimeout(() => {
        window.scrollTo({ top, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.28,
        ease: 'easeOut',
        layout: { duration: 0.28, ease: 'easeOut' },
      }}
      ref={subjectRef}
    >
      <Collapsible
        open={isOpen}
        onOpenChange={handleOpenChange}
        className="w-full transition-all duration-200"
      >
        <CollapsibleTrigger asChild>
          <Card className="mb-4 p-4 w-full">
            <motion.div layout="position" className="font-semibold mb-2">
              {item.subject}
            </motion.div>
            {isOpen ?
              <motion.div
                key="table"
                layout
                initial={{ opacity: 0, y: 8, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{
                  duration: 0.22,
                  ease: 'easeOut',
                  layout: { duration: 0.28, ease: 'easeOut' },
                }}
                className="overflow-hidden"
              >
                <Table className="overflow-hidden">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Ocena</TableHead>
                      <TableHead>Kategoria</TableHead>
                      <TableHead>Opis</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {item.grades.map((grade, gidx) => (
                      <MotionTableRow
                        key={gidx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.1 * gidx * Math.max(0.3, 1 - gidx * 0.1),
                        }}
                        className={`duration-${gidx}`}
                      >
                        <TableCell>{grade.value}</TableCell>
                        <TableCell>{grade.category}</TableCell>
                        <TableCell>{grade.description}</TableCell>
                      </MotionTableRow>
                    ))}
                  </TableBody>
                  <TableFooter></TableFooter>
                </Table>
              </motion.div>
            : <motion.ul layout className="list-none flex gap-2.5 flex-wrap">
                {item.grades.map((grade, gidx) => (
                  <li key={gidx} className="">
                    <motion.span
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.18,
                        ease: 'easeOut',
                        delay: 0.1 * gidx * Math.max(0.3, 1 - gidx * 0.1),
                      }}
                      className="inline-block"
                    >
                      <Badge
                        variant="outline"
                        className="font-semibold text-sm p-3 aspect-square rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        {grade.value}
                      </Badge>
                    </motion.span>
                  </li>
                ))}
              </motion.ul>
            }
          </Card>
        </CollapsibleTrigger>
      </Collapsible>
    </motion.div>
  );
}

export default Subject;
