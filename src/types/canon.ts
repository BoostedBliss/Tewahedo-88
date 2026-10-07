export type CanonSystem = 'ethiopian' | 'kjv1611' | 'protestant1885';

export interface Verse {
  number: number;
  geezNumber?: string;
  text: string;
  geezText?: string;
}

export interface Chapter {
  number: number;
  verses: Verse[];
}

export interface Book {
  id: string;
  number: number;
  englishTitle: string;
  geezTitle: string;
  transliteration: string;
  category: 'old_testament' | 'new_testament' | 'broader_canon';
  categoryLabel: string;
  canonStatus: {
    ethiopian: boolean;
    kjv1611: boolean;
    protestant1885: boolean;
  };
  canonCategory: 'ethiopian_exclusive' | 'kjv_apocrypha_shared' | 'universal_core';
  chaptersCount: number;
  description: string;
  synthesisNote: string;
  sampleChapters: Chapter[];
}

export interface Highlight {
  id: string;
  bookId: string;
  chapterNumber: number;
  verseNumber: number;
  color: 'gold' | 'red' | 'green' | 'blue' | 'purple';
  text: string;
  bookTitle: string;
  createdAt: number;
}

export interface Bookmark {
  id: string;
  bookId: string;
  chapterNumber: number;
  verseNumber?: number;
  bookTitle: string;
  note?: string;
  tags?: string[];
  createdAt: number;
}

export type ReaderTheme = 'parchment' | 'monastery' | 'obsidian';
export type ReaderFont = 'serif' | 'ethiopic' | 'sans';
