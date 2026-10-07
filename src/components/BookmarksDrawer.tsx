import React, { useState } from 'react';
import { Bookmark, Highlight, Book } from '../types/canon';
import { audioNarration } from '../utils/audioNarration';
import { 
  Bookmark as BookmarkIcon, 
  Highlighter, 
  Trash2, 
  ArrowRight, 
  Download, 
  Search, 
  X,
  Tag,
  Clock,
  Sparkles
} from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarks: Bookmark[];
  highlights: Highlight[];
  books: Book[];
  onSelectPassage: (bookId: string, chapterNum: number, verseNum?: number) => void;
  onDeleteBookmark: (id: string) => void;
  onDeleteHighlight: (id: string) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  bookmarks,
  highlights,
  books,
  onSelectPassage,
  onDeleteBookmark,
  onDeleteHighlight,
}) => {
  const [activeTab, setActiveTab] = useState<'bookmarks' | 'highlights'>('bookmarks');
  const [filterQuery, setFilterQuery] = useState('');

  if (!isOpen) return null;

  const filteredBookmarks = bookmarks.filter((b) =>
    b.bookTitle.toLowerCase().includes(filterQuery.toLowerCase()) ||
    (b.note && b.note.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  const filteredHighlights = highlights.filter((h) =>
    h.bookTitle.toLowerCase().includes(filterQuery.toLowerCase()) ||
    h.text.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const handleExportNotes = () => {
    audioNarration.playSanctuaryChime();
    const exportData = {
      exportDate: new Date().toISOString(),
      canon: 'Ethiopian Full 88 Canon Scripture Study Journal',
      bookmarks,
      highlights,
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ethiopian-bible-study-notes-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#18130f] border-l border-amber-500/25 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookmarkIcon className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold font-heading text-amber-100">
                Study Journal & Saved Verses
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-amber-500/15 bg-[#14100c]">
            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`flex-1 py-3 text-xs font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'bookmarks'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <BookmarkIcon className="w-3.5 h-3.5" />
              Bookmarks ({bookmarks.length})
            </button>
            <button
              onClick={() => setActiveTab('highlights')}
              className={`flex-1 py-3 text-xs font-bold text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'highlights'
                  ? 'border-amber-400 text-amber-300 bg-amber-500/10'
                  : 'border-transparent text-stone-400 hover:text-stone-200'
              }`}
            >
              <Highlighter className="w-3.5 h-3.5" />
              Highlights ({highlights.length})
            </button>
          </div>

          {/* Search bar & export button */}
          <div className="p-3 bg-[#1e1812] border-b border-amber-500/15 flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Search saved reflections..."
                className="w-full bg-[#14100c] border border-amber-500/20 rounded-lg pl-8 pr-3 py-1.5 text-xs text-amber-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
              />
            </div>
            <button
              onClick={handleExportNotes}
              className="p-1.5 rounded-lg bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 border border-amber-500/30 text-xs font-semibold flex items-center gap-1"
              title="Export saved journal to JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export</span>
            </button>
          </div>

          {/* List Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {activeTab === 'bookmarks' ? (
              filteredBookmarks.length > 0 ? (
                filteredBookmarks.map((bookmark) => (
                  <div
                    key={bookmark.id}
                    className="p-3.5 rounded-xl bg-[#221b14] border border-amber-500/20 space-y-2 hover:border-amber-400/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="text-sm font-bold font-heading text-amber-200">
                          {bookmark.bookTitle} {bookmark.chapterNumber}
                          {bookmark.verseNumber ? `:${bookmark.verseNumber}` : ''}
                        </h4>
                        <span className="text-[10px] text-stone-500 flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {new Date(bookmark.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            onSelectPassage(
                              bookmark.bookId,
                              bookmark.chapterNumber,
                              bookmark.verseNumber
                            );
                            onClose();
                          }}
                          className="p-1.5 rounded-lg bg-amber-500/15 text-amber-300 hover:bg-amber-500 hover:text-stone-950 text-xs font-semibold transition-all"
                          title="Jump to verse in Reader"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onDeleteBookmark(bookmark.id)}
                          className="p-1.5 rounded-lg text-stone-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Remove bookmark"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {bookmark.note && (
                      <p className="text-xs text-[#cfc2b2] bg-[#17130e] p-2 rounded-lg border border-amber-500/10 italic">
                        "{bookmark.note}"
                      </p>
                    )}
                  </div>
                ))
              ) : (
                <div className="py-12 text-center space-y-2">
                  <BookmarkIcon className="w-8 h-8 text-stone-600 mx-auto" />
                  <p className="text-xs text-stone-400">No bookmarks saved yet.</p>
                  <p className="text-[11px] text-stone-500">
                    Click the bookmark icon beside any verse while reading to save it here.
                  </p>
                </div>
              )
            ) : filteredHighlights.length > 0 ? (
              filteredHighlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="p-3.5 rounded-xl bg-[#221b14] border border-amber-500/20 space-y-2 hover:border-amber-400/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          highlight.color === 'gold'
                            ? 'bg-amber-400'
                            : highlight.color === 'red'
                            ? 'bg-red-400'
                            : highlight.color === 'green'
                            ? 'bg-emerald-400'
                            : 'bg-sky-400'
                        }`}
                      />
                      <h4 className="text-sm font-bold font-heading text-amber-200">
                        {highlight.bookTitle} {highlight.chapterNumber}:{highlight.verseNumber}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          onSelectPassage(
                            highlight.bookId,
                            highlight.chapterNumber,
                            highlight.verseNumber
                          );
                          onClose();
                        }}
                        className="p-1.5 rounded-lg bg-amber-500/15 text-amber-300 hover:bg-amber-500 hover:text-stone-950 text-xs font-semibold transition-all"
                        title="Jump to verse in Reader"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onDeleteHighlight(highlight.id)}
                        className="p-1.5 rounded-lg text-stone-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Remove highlight"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-[#ded3c5] italic leading-relaxed font-scripture">
                    "{highlight.text}"
                  </p>
                </div>
              ))
            ) : (
              <div className="py-12 text-center space-y-2">
                <Highlighter className="w-8 h-8 text-stone-600 mx-auto" />
                <p className="text-xs text-stone-400">No highlighted verses yet.</p>
                <p className="text-[11px] text-stone-500">
                  Select any verse to highlight it with Gold, Crimson, Green, or Blue.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
