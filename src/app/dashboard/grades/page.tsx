'use client';

import type { ReactElement } from 'react';

import Subject from '@/components/grades/subject';
import { LayoutGroup, motion } from 'motion/react';

export type Grade = {
  value: number;
  description: string;
  category:
    | 'Kartkówka'
    | 'Sprawdzian'
    | 'Odpowiedź ustna'
    | 'Projekt'
    | 'Laboratorium'
    | 'Prezentacja'
    | 'Zadanie domowe'
    | 'Wypracowanie'
    | 'Praca domowa';
};

export type SubjectGrades = {
  subject: string;
  grades: Grade[];
};

export type GradesDataType = SubjectGrades[];

const gradesData: GradesDataType = [
  {
    subject: 'Matematyka',
    grades: [
      {
        value: 5,
        category: 'Sprawdzian',
        description: 'Dział 1: Równania liniowe — sprawdzian',
      },
      {
        value: 4,
        category: 'Kartkówka',
        description: 'Dział 2: Funkcje — kartkówka',
      },
      {
        value: 3,
        category: 'Zadanie domowe',
        description: 'Zadanie domowe: Przykłady z procentów',
      },
      {
        value: 5,
        category: 'Sprawdzian',
        description: 'Dział 3: Całki — sprawdzian',
      },
    ],
  },
  {
    subject: 'Fizyka',
    grades: [
      {
        value: 4,
        category: 'Laboratorium',
        description: 'Ćwiczenie: Pomiar przyspieszenia — laboratorium',
      },
      {
        value: 4,
        category: 'Kartkówka',
        description: 'Dział: Kinematyka — kartkówka',
      },
      {
        value: 5,
        category: 'Sprawdzian',
        description: 'Dział: Elektromagnetyzm — sprawdzian',
      },
    ],
  },
  {
    subject: 'Język polski',
    grades: [
      {
        value: 3,
        category: 'Odpowiedź ustna',
        description: 'Dział 3: Romantyzm — odpowiedź ustna',
      },
      {
        value: 4,
        category: 'Kartkówka',
        description: 'Analiza tekstu: "Dziady" — kartkówka',
      },
      {
        value: 4,
        category: 'Kartkówka',
        description: 'Dział 1: Średniowiecze — kartkówka',
      },
      {
        value: 5,
        category: 'Prezentacja',
        description: 'Dział 4: Współczesność — prezentacja',
      },
      {
        value: 5,
        category: 'Sprawdzian',
        description: 'Dział 3: Romantyzm — sprawdzian',
      },
    ],
  },
  {
    subject: 'Biologia',
    grades: [
      {
        value: 5,
        category: 'Sprawdzian',
        description: 'Dział: Genetyka — sprawdzian',
      },
      {
        value: 4,
        category: 'Projekt',
        description: 'Zadanie: Projekt o ekosystemach — projekt',
      },
      {
        value: 3,
        category: 'Kartkówka',
        description: 'Dział: Tkanki — kartkówka',
      },
    ],
  },
  {
    subject: 'Chemia',
    grades: [
      {
        value: 4,
        category: 'Laboratorium',
        description: 'Ćwiczenie: Titracja — laboratorium',
      },
      {
        value: 5,
        category: 'Sprawdzian',
        description: 'Dział: Chemia organiczna — sprawdzian',
      },
    ],
  },
  {
    subject: 'Historia',
    grades: [
      {
        value: 5,
        category: 'Prezentacja',
        description: 'Temat: Rewolucja francuska — prezentacja',
      },
      {
        value: 4,
        category: 'Kartkówka',
        description: 'Dział: II wojna światowa — kartkówka',
      },
      {
        value: 3,
        category: 'Wypracowanie',
        description: 'Wypracowanie: Skutki rewolucji przemysłowej',
      },
    ],
  },
  {
    subject: 'Informatyka',
    grades: [
      {
        value: 5,
        category: 'Projekt',
        description: 'Projekt: Aplikacja webowa — projekt',
      },
      {
        value: 5,
        category: 'Sprawdzian',
        description: 'Dział: Algorytmy — sprawdzian',
      },
      {
        value: 4,
        category: 'Zadanie domowe',
        description: 'Zadanie domowe: Zadanie z programowania — zadanie domowe',
      },
    ],
  },
];

export default function Home(): ReactElement {
  return (
    <LayoutGroup>
      <motion.div layout className="m-4">
        {gradesData.map((item, idx) => (
          <Subject item={item} idx={idx} key={idx} />
        ))}
      </motion.div>
    </LayoutGroup>
  );
}
