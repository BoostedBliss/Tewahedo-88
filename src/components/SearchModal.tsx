import React, { useState, useEffect, useRef } from 'react';
import { Book } from '../types/canon';
import { Search, BookOpen, Sparkles, Layers, ArrowRight, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  books: Book[];
  onSelectBookAndChapter: (book: Book, chapterNum: number) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  books,
  onSelectBookAndChapter,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = books.filter((b) => {
    if (!query.trim()) return false;
    const q = query.toLowerCase();
    return (
      b.englishTitle.toLowerCase().includes(q) ||
      b.geezTitle.includes(q) ||
      b.transliteration.toLowerCase().includes(q) ||
      b.categoryLabel.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q) ||
      b.sampleChapters.some((c) =>
        c.verses.some((v) => v.text.toLowerCase().includes(q) || (v.geezText && v.geezText.includes(q)))
      )
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-start justify-center p-4 pt-16 sm:pt-24 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#1c1611] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-amber-500/20 flex items-center gap-3 bg-[#241c15]">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 88 books, Ge'ez titles, or scriptures (e.g. Enoch, Kufale, light, wisdom)..."
            className="w-full bg-transparent text-amber-100 placeholder-stone-500 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-200 text-xs px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-400 hover:text-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestions when query is empty */}
        {!query && (
          <div className="p-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500/80 font-mono">
              Highlighted Ethiopian Works
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {books
                .filter((b) => b.canonCategory === 'ethiopian_exclusive')
                .slice(0, 6)
                .map((b) => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onSelectBookAndChapter(b, 1);
                      onClose();
                    }}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#221b14] hover:bg-[#2b221a] border border-amber-500/15 hover:border-amber-400/40 text-left transition-all group"
                  >
                    <div>
                      <div className="text-xs font-bold text-amber-200 group-hover:text-amber-300">
                        {b.englishTitle}
                      </div>
                      <div className="text-[11px] font-ethiopic text-amber-400/80">
                        {b.geezTitle}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-stone-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
            </div>
          </div>
        )}

        {/* Results List */}
        {query && (
          <div className="max-h-96 overflow-y-auto p-4 space-y-2">
            {results.length > 0 ? (
              results.map((b) => (
                <button
                  key={b.id}
                  onClick={() => {
                    onSelectBookAndChapter(b, 1);
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#221b14] hover:bg-[#2b2219] border border-amber-500/20 hover:border-amber-400/50 text-left transition-all group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold font-heading text-amber-100 group-hover:text-amber-300">
                        {b.englishTitle}
                      </span>
                      <span className="text-xs font-ethiopic font-semibold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded">
                        {b.geezTitle}
                      </span>
                      {b.canonCategory === 'ethiopian_exclusive' && (
                        <span className="text-[10px] text-amber-400 font-bold bg-amber-500/20 px-2 py-0.5 rounded-full">
                          Exclusive 88
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-400 line-clamp-1">
                      {b.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-400/70 group-hover:text-amber-300 font-semibold pl-3 shrink-0">
                    Read
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))
            ) : (
              <div className="py-12 text-center text-stone-400 text-xs">
                No matching books or scripture verses found for "{query}".
              </div>
            )}
          </div>
        )}

        {/* Footer info */}
        <div className="p-3 bg-[#15110d] border-t border-amber-500/15 flex items-center justify-between text-[11px] text-stone-500">
          <span>88 Canon Works Indexed</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
