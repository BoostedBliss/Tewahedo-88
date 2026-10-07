/**
 * Ethiopian Bible 88 Expanded Canon Reader & Synthesis Matrix
 * Complete 88 Canon with Audio Narration, Highlighting, Bookmarking, and Cross-Canon Comparative Dashboard.
 */

import React, { useState, useEffect } from 'react';
import { ETHIOPIAN_CANON_BOOKS } from './data/canonData';
import { Book, Highlight, Bookmark } from './types/canon';
import { audioNarration } from './utils/audioNarration';
import { Navbar } from './components/Navbar';
import { ReaderView } from './components/ReaderView';
import { CanonDashboard } from './components/CanonDashboard';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { SearchModal } from './components/SearchModal';

const HIGHLIGHTS_STORAGE_KEY = 'ethiopian_bible_highlights_v1';
const BOOKMARKS_STORAGE_KEY = 'ethiopian_bible_bookmarks_v1';

export default function App() {
  const books = ETHIOPIAN_CANON_BOOKS;

  // Initial Book: 1 Enoch (Henok), the celebrated Ethiopian masterpiece
  const [currentBook, setCurrentBook] = useState<Book>(
    () => books.find((b) => b.id === 'enoch') || books[0]
  );
  const [currentChapterNum, setCurrentChapterNum] = useState<number>(1);
  const [activeView, setActiveView] = useState<'reader' | 'dashboard'>('reader');

  // Highlights & Bookmarks state (persistent with localStorage)
  const [highlights, setHighlights] = useState<Highlight[]>(() => {
    try {
      const saved = localStorage.getItem(HIGHLIGHTS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [
        {
          id: 'hl-demo-1',
          bookId: 'enoch',
          chapterNumber: 1,
          verseNumber: 9,
          color: 'gold',
          text: 'And behold! He cometh with ten thousands of His holy ones to execute judgment upon all...',
          bookTitle: '1 Enoch (Henok)',
          createdAt: Date.now() - 100000,
        }
      ];
    } catch {
      return [];
    }
  });

  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [
        {
          id: 'bm-demo-1',
          bookId: 'enoch',
          chapterNumber: 1,
          verseNumber: 9,
          bookTitle: '1 Enoch (Henok)',
          note: 'Key prophecy quoted verbatim in New Testament Jude 1:14-15.',
          createdAt: Date.now() - 200000,
        }
      ];
    } catch {
      return [];
    }
  });

  // Modal drawers
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBookmarksDrawerOpen, setIsBookmarksDrawerOpen] = useState(false);
  const [isBegenaAmbiencePlaying, setIsBegenaAmbiencePlaying] = useState(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(HIGHLIGHTS_STORAGE_KEY, JSON.stringify(highlights));
    } catch {}
  }, [highlights]);

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
    } catch {}
  }, [bookmarks]);

  // Global keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectBook = (book: Book, chapterNum = 1) => {
    setCurrentBook(book);
    setCurrentChapterNum(chapterNum);
    setActiveView('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleHighlight = (
    bookId: string,
    chapterNum: number,
    verseNum: number,
    color: Highlight['color'],
    text: string,
    bookTitle: string
  ) => {
    setHighlights((prev) => {
      const existing = prev.find(
        (h) =>
          h.bookId === bookId &&
          h.chapterNumber === chapterNum &&
          h.verseNumber === verseNum
      );

      if (existing) {
        if (existing.color === color) {
          // Remove if clicked same color
          return prev.filter((h) => h.id !== existing.id);
        } else {
          // Update color
          return prev.map((h) => (h.id === existing.id ? { ...h, color } : h));
        }
      }

      const newHighlight: Highlight = {
        id: `hl-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        bookId,
        chapterNumber: chapterNum,
        verseNumber: verseNum,
        color,
        text,
        bookTitle,
        createdAt: Date.now(),
      };
      return [...prev, newHighlight];
    });
  };

  const handleAddBookmark = (
    bookId: string,
    chapterNum: number,
    verseNum?: number,
    note?: string
  ) => {
    const foundBook = books.find((b) => b.id === bookId);
    const title = foundBook ? foundBook.englishTitle : bookId;

    const newBookmark: Bookmark = {
      id: `bm-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      bookId,
      chapterNumber: chapterNum,
      verseNumber: verseNum,
      bookTitle: title,
      note,
      createdAt: Date.now(),
    };

    setBookmarks((prev) => [newBookmark, ...prev]);
  };

  const handleDeleteBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const handleDeleteHighlight = (id: string) => {
    setHighlights((prev) => prev.filter((h) => h.id !== id));
  };

  const handleToggleAmbience = () => {
    const active = audioNarration.toggleAmbience(0.12);
    setIsBegenaAmbiencePlaying(active);
  };

  return (
    <div className="min-h-screen bg-[#120f0c] text-[#f4eee4] flex flex-col font-ui antialiased selection:bg-amber-500/30 selection:text-amber-200">
      {/* Navigation Header */}
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksDrawerOpen(true)}
        bookmarksCount={bookmarks.length}
        highlightsCount={highlights.length}
        isBegenaAmbiencePlaying={isBegenaAmbiencePlaying}
        onToggleAmbience={handleToggleAmbience}
      />

      {/* Main Content Area */}
      <div className="flex-1">
        {activeView === 'reader' ? (
          <ReaderView
            currentBook={currentBook}
            currentChapterNum={currentChapterNum}
            books={books}
            onSelectBookAndChapter={(book, ch) => {
              setCurrentBook(book);
              setCurrentChapterNum(ch);
            }}
            highlights={highlights}
            onToggleHighlight={handleToggleHighlight}
            bookmarks={bookmarks}
            onAddBookmark={handleAddBookmark}
            onRemoveBookmark={handleDeleteBookmark}
            onOpenCanonDashboard={() => setActiveView('dashboard')}
          />
        ) : (
          <CanonDashboard
            books={books}
            onSelectBook={(book, chapterNum) => handleSelectBook(book, chapterNum || 1)}
            onSaveBookmark={handleAddBookmark}
          />
        )}
      </div>

      {/* Bookmarks & Study Journal Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksDrawerOpen}
        onClose={() => setIsBookmarksDrawerOpen(false)}
        bookmarks={bookmarks}
        highlights={highlights}
        books={books}
        onSelectPassage={(bookId, chNum) => {
          const b = books.find((x) => x.id === bookId);
          if (b) handleSelectBook(b, chNum);
        }}
        onDeleteBookmark={handleDeleteBookmark}
        onDeleteHighlight={handleDeleteHighlight}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        books={books}
        onSelectBookAndChapter={(b, ch) => handleSelectBook(b, ch)}
      />
    </div>
  );
}
