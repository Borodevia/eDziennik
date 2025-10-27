export type ColorKey = 'red' | 'sky' | 'gray';

const palette = {
  red: {
    badge:
      'bg-red-100 hover:bg-red-200 dark:bg-red-900/30 hover:dark:bg-red-900/50 ring-1 ring-red-200/10 text-red-800 dark:text-red-200',
    rowAccent: 'border-red-500/50 dark:border-red-600/30',
    selectedTint:
      'bg-red-50/60  dark:bg-red-900/10  border-red-200/30 dark:border-red-600/30',
    focusRing: 'focus-visible:ring-red-300/50',
    bigGrade: 'text-red-700 dark:text-red-200',
  },
  sky: {
    badge:
      'bg-sky-100 hover:bg-sky-200 dark:bg-sky-900/20 dark:hover:bg-sky-900/50 ring-1 ring-sky-200/10 text-sky-800 dark:text-sky-200',
    rowAccent: 'border-sky-500/50 dark:border-sky-600/30',
    selectedTint:
      'bg-sky-50/60 dark:bg-sky-900/10 border-sky-200/30 dark:border-sky-600/30',
    focusRing: 'focus-visible:ring-sky-300/50',
    bigGrade: 'text-sky-700 dark:text-sky-200',
  },
  gray: {
    badge:
      'bg-transparent hover:bg-gray-100/90 dark:bg-gray-900/20 ring-1 ring-gray-200/10 text-gray-800 dark:text-gray-200',
    rowAccent: 'border-gray-300/50  dark:border-gray-600/30',
    selectedTint: 'bg-muted/70 border-border',
    focusRing: 'focus-visible:ring-gray-300/40',
    bigGrade: 'text-foreground',
  },
};

export const CATEGORY_COLOR: Record<string, ColorKey> = {
  Sprawdzian: 'red',
  Kartkówka: 'sky',
};

export function stylesFor(category?: string) {
  const key =
    category && CATEGORY_COLOR[category] ? CATEGORY_COLOR[category] : 'gray';
  const p = palette[key];
  return {
    badgeClasses: p.badge,
    rowAccentClasses: `pl-3 border-l-4 ${p.rowAccent}`,
    selectedTintClasses: p.selectedTint,
    focusRingClass: p.focusRing,
    bigGradeClass: p.bigGrade,
  };
}

export function setCategoryColor(categoryName: string, colorKey: ColorKey) {
  CATEGORY_COLOR[categoryName] = colorKey;
}
