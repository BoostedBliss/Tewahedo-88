import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe, vi } from 'vitest';
import { CanonDashboard } from './CanonDashboard';
import { Book } from '../types/canon';

// Mock child component
vi.mock('./DailyVerseCard', () => ({
  DailyVerseCard: () => <div data-testid="daily-verse-card">Mocked DailyVerseCard</div>
}));

const mockBooks: Book[] = [
  {
    id: 'b1',
    number: 1,
    englishTitle: 'Genesis',
    geezTitle: 'ኦሪት ዘፍጥረት',
    transliteration: 'Orit Ze-Fidret',
    category: 'old_testament',
    categoryLabel: 'Torah',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 50,
    description: 'Book of Genesis',
    synthesisNote: 'Found in all.',
    sampleChapters: []
  },
  {
    id: 'b2',
    number: 2,
    englishTitle: 'Enoch',
    geezTitle: 'መጽሐፈ ሄኖክ',
    transliteration: 'Metsafe Henok',
    category: 'old_testament',
    categoryLabel: 'Pseudepigrapha',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 108,
    description: 'Book of Enoch description',
    synthesisNote: 'Ethiopian exclusive.',
    sampleChapters: []
  },
  {
    id: 'b3',
    number: 3,
    englishTitle: 'Tobit',
    geezTitle: 'ጦቢት',
    transliteration: 'Tobit',
    category: 'old_testament',
    categoryLabel: 'Apocrypha',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: false },
    canonCategory: 'kjv_apocrypha_shared',
    chaptersCount: 14,
    description: 'Book of Tobit',
    synthesisNote: 'Shared with KJV.',
    sampleChapters: []
  }
];

describe('CanonDashboard Component', () => {
  test('renders all books initially', () => {
    const onSelectBook = vi.fn();
    render(<CanonDashboard books={mockBooks} onSelectBook={onSelectBook} />);

    expect(screen.getByRole('heading', { name: 'Genesis' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Enoch' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tobit' })).toBeInTheDocument();
    expect(screen.getByTestId('daily-verse-card')).toBeInTheDocument();
  });

  test('filters books by canon category', () => {
    const onSelectBook = vi.fn();
    render(<CanonDashboard books={mockBooks} onSelectBook={onSelectBook} />);

    // Click Ethiopian Exclusive filter
    const ethiopianFilterBtn = screen.getByRole('button', { name: /Ethiopian Full 88 Exclusive/i });
    fireEvent.click(ethiopianFilterBtn);

    expect(screen.queryByRole('heading', { name: 'Genesis' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Enoch' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Tobit' })).not.toBeInTheDocument();

    // Click Universal Core filter
    const universalFilterBtn = screen.getByRole('button', { name: /Universal Core in All 3/i });
    fireEvent.click(universalFilterBtn);

    expect(screen.getByRole('heading', { name: 'Genesis' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Enoch' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Tobit' })).not.toBeInTheDocument();

    // Click KJV Shared filter
    const kjvFilterBtn = screen.getByRole('button', { name: /Shared with KJV 1611 Apocrypha/i });
    fireEvent.click(kjvFilterBtn);

    expect(screen.queryByRole('heading', { name: 'Genesis' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Enoch' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tobit' })).toBeInTheDocument();
  });

  test('filters books by search term', () => {
    const onSelectBook = vi.fn();
    render(<CanonDashboard books={mockBooks} onSelectBook={onSelectBook} />);

    const searchInput = screen.getByPlaceholderText(/Search by English or Ge'ez title/i);

    fireEvent.change(searchInput, { target: { value: 'enoch' } });

    expect(screen.queryByRole('heading', { name: 'Genesis' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Enoch' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Tobit' })).not.toBeInTheDocument();

    // Search by Ge'ez Title
    fireEvent.change(searchInput, { target: { value: 'ኦሪት ዘፍጥረት' } });
    expect(screen.getByRole('heading', { name: 'Genesis' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Enoch' })).not.toBeInTheDocument();
  });

  test('calls onSelectBook when a book is clicked', () => {
    const onSelectBook = vi.fn();
    render(<CanonDashboard books={mockBooks} onSelectBook={onSelectBook} />);

    const readScriptureButtons = screen.getAllByRole('button', { name: /Read Scripture/i });

    // First book is Genesis
    fireEvent.click(readScriptureButtons[0]);

    expect(onSelectBook).toHaveBeenCalledTimes(1);
    expect(onSelectBook).toHaveBeenCalledWith(mockBooks[0]);
  });

  test('shows empty state when no books match filters', () => {
    const onSelectBook = vi.fn();
    render(<CanonDashboard books={mockBooks} onSelectBook={onSelectBook} />);

    const searchInput = screen.getByPlaceholderText(/Search by English or Ge'ez title/i);
    fireEvent.change(searchInput, { target: { value: 'nonexistent book' } });

    expect(screen.getByText('No books found')).toBeInTheDocument();
    expect(screen.getByText(/No works match your filter query/i)).toBeInTheDocument();

    // Test Reset Filters button
    const resetButton = screen.getByRole('button', { name: /Reset Filters/i });
    fireEvent.click(resetButton);

    expect(searchInput).toHaveValue('');
    expect(screen.getByText('Genesis')).toBeInTheDocument();
  });
});
