import React, { useState } from 'react';
import { Book } from '../types/canon';
import { CANON_METRICS, CANON_SYNTHESIS_INSIGHTS } from '../data/canonData';
import { 
  BookOpen, 
  Layers, 
  Sparkles, 
  Check, 
  X, 
  HelpCircle, 
  Search, 
  ArrowRight,
  Info,
  Calendar,
  Compass,
  FileText
} from 'lucide-react';
import { DailyVerseCard } from './DailyVerseCard';

interface CanonDashboardProps {
  books: Book[];
  onSelectBook: (book: Book, chapterNum?: number) => void;
  onSaveBookmark?: (bookId: string, chapterNum: number, verseNum: number, note?: string) => void;
}

type FilterType = 'all' | 'ethiopian_exclusive' | 'kjv_apocrypha_shared' | 'universal_core';

export const CanonDashboard: React.FC<CanonDashboardProps> = ({ books, onSelectBook, onSaveBookmark }) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInsightIndex, setSelectedInsightIndex] = useState<number>(0);

  const filteredBooks = books.filter((book) => {
    const matchesFilter =
      activeFilter === 'all' || book.canonCategory === activeFilter;
    const matchesSearch =
      book.englishTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.geezTitle.includes(searchTerm) ||
      book.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getCanonCategoryBadge = (category: Book['canonCategory']) => {
    switch (category) {
      case 'ethiopian_exclusive':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" />
            Ethiopian Full 88 Exclusive
          </span>
        );
      case 'kjv_apocrypha_shared':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
            <Layers className="w-3 h-3 text-purple-400" />
            Shared with KJV 1611 Apocrypha
          </span>
        );
      case 'universal_core':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
            <Check className="w-3 h-3 text-emerald-400" />
            Universal Core (All 3)
          </span>
        );
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-10">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#241c14] via-[#1c1611] to-[#120f0d] border border-amber-500/20 p-6 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Compass className="w-3.5 h-3.5" />
            Canon Comparative Matrix & Synthesis
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight font-heading text-amber-100">
            The Complete Canon Evolution
          </h1>
          <p className="text-base md:text-lg text-[#c5b8a5] leading-relaxed font-scripture">
            Analyze the historical divergence across church canons: the full <strong className="text-amber-300">Ethiopian 88-work expanded canon</strong>, 
            the <strong className="text-purple-300">King James Version 1611 (80 books)</strong>, and the reduced <strong className="text-sky-300">Protestant 1885 standard (66 books)</strong>.
          </p>
        </div>

        {/* 3 Canon Comparison Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-amber-500/15">
          {/* Card 1: Ethiopian Canon */}
          <div className="rounded-xl bg-[#2a2118]/80 border border-amber-500/30 p-5 relative overflow-hidden group hover:border-amber-400/50 transition-all">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300">
              Fullest Canon
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black font-heading text-amber-300">88</span>
              <span className="text-sm font-medium text-amber-200/70">Expanded Works</span>
            </div>
            <h3 className="text-base font-semibold text-amber-100 mt-2 font-heading">
              Ethiopian Orthodox Tewahedo
            </h3>
            <p className="text-xs text-[#b8a994] mt-1.5 leading-relaxed">
              Preserves Enoch, Jubilees, 1-3 Meqabyan, 4 Baruch, and Broader Canon church orders (Sinodos, Didascalia, Kidan).
            </p>
            <div className="mt-3 flex items-center justify-between text-xs text-amber-400 font-medium pt-3 border-t border-amber-500/10">
              <span>Official count: 81 books</span>
              <span>Broader count: 88 works</span>
            </div>
          </div>

          {/* Card 2: KJV 1611 */}
          <div className="rounded-xl bg-[#201824]/80 border border-purple-500/30 p-5 relative overflow-hidden group hover:border-purple-400/50 transition-all">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-purple-500/20 text-purple-300">
              Original 1611
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black font-heading text-purple-300">80</span>
              <span className="text-sm font-medium text-purple-200/70">Canonical Books</span>
            </div>
            <h3 className="text-base font-semibold text-purple-100 mt-2 font-heading">
              King James Version 1611
            </h3>
            <p className="text-xs text-[#b09eb8] mt-1.5 leading-relaxed">
              Included 66 standard books plus 14 Apocrypha books (Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Esdras, Prayer of Manasseh).
            </p>
            <div className="mt-3 flex items-center justify-between text-xs text-purple-300 font-medium pt-3 border-t border-purple-500/10">
              <span>66 Standard</span>
              <span>+ 14 Apocrypha</span>
            </div>
          </div>

          {/* Card 3: Protestant 1885 */}
          <div className="rounded-xl bg-[#161d24]/80 border border-sky-500/30 p-5 relative overflow-hidden group hover:border-sky-400/50 transition-all">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase bg-sky-500/20 text-sky-300">
              Post-1885
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black font-heading text-sky-300">66</span>
              <span className="text-sm font-medium text-sky-200/70">Standardized</span>
            </div>
            <h3 className="text-base font-semibold text-sky-100 mt-2 font-heading">
              Protestant Standard Canon
            </h3>
            <p className="text-xs text-[#9bb0c4] mt-1.5 leading-relaxed">
              14 Apocrypha books systematically excised by British Bible societies starting in 1885, leaving 39 OT and 27 NT books.
            </p>
            <div className="mt-3 flex items-center justify-between text-xs text-sky-300 font-medium pt-3 border-t border-sky-500/10">
              <span>39 Old Testament</span>
              <span>27 New Testament</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Daily Verse Component */}
      <DailyVerseCard
        onReadChapter={(bookId, chapterNum) => {
          const targetBook = books.find((b) => b.id === bookId);
          if (targetBook) {
            onSelectBook(targetBook, chapterNum);
          }
        }}
        onSaveBookmark={onSaveBookmark}
      />

      {/* Synthesis Deep-Dive Showcase */}
      <div className="rounded-2xl bg-[#191512] border border-amber-500/20 p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Historical Synthesis & Critical Insights
            </div>
            <h2 className="text-2xl font-bold font-heading text-amber-100 mt-1">
              Why the Ethiopian Canon Differs
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {CANON_SYNTHESIS_INSIGHTS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedInsightIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedInsightIndex === idx
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-lg'
                    : 'bg-[#261f18] text-[#cfc2ae] hover:bg-[#332b22] border border-amber-500/20'
                }`}
              >
                {item.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Selected insight card */}
        <div className="rounded-xl bg-[#221b14] border border-amber-500/30 p-6 relative">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-amber-500/15 text-amber-400 shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-bold font-heading text-amber-200">
                  {CANON_SYNTHESIS_INSIGHTS[selectedInsightIndex].title}
                </h3>
                <span className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {CANON_SYNTHESIS_INSIGHTS[selectedInsightIndex].tag}
                </span>
              </div>
              <p className="text-sm md:text-base text-[#d8cbba] leading-relaxed font-scripture">
                {CANON_SYNTHESIS_INSIGHTS[selectedInsightIndex].summary}
              </p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                Synthesis takeaway: {CANON_SYNTHESIS_INSIGHTS[selectedInsightIndex].canonImpact}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Matrix Filter & Book Catalog */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2">
          <div>
            <h2 className="text-2xl font-bold font-heading text-amber-100">
              Cross-Version Book Matrix
            </h2>
            <p className="text-sm text-[#b8a994]">
              Explore each work’s canonical status across Ethiopian 88, KJV 1611, and Protestant 1885.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-amber-400/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by English or Ge'ez title..."
              className="w-full bg-[#1e1813] border border-amber-500/25 rounded-xl pl-10 pr-4 py-2 text-sm text-amber-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/50"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                : 'bg-[#221b14] text-[#cfc2ae] hover:bg-[#2c231b] border border-amber-500/20'
            }`}
          >
            All Works ({books.length})
          </button>
          <button
            onClick={() => setActiveFilter('ethiopian_exclusive')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
              activeFilter === 'ethiopian_exclusive'
                ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                : 'bg-[#221b14] text-[#cfc2ae] hover:bg-[#2c231b] border border-amber-500/20'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Ethiopian Full 88 Exclusive ({CANON_METRICS.ethiopianExclusiveCount})
          </button>
          <button
            onClick={() => setActiveFilter('kjv_apocrypha_shared')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
              activeFilter === 'kjv_apocrypha_shared'
                ? 'bg-purple-600 text-white shadow-md font-bold'
                : 'bg-[#221b14] text-[#cfc2ae] hover:bg-[#2c231b] border border-purple-500/20'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Shared with KJV 1611 Apocrypha ({CANON_METRICS.sharedApocryphaCount})
          </button>
          <button
            onClick={() => setActiveFilter('universal_core')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 ${
              activeFilter === 'universal_core'
                ? 'bg-emerald-600 text-white shadow-md font-bold'
                : 'bg-[#221b14] text-[#cfc2ae] hover:bg-[#2c231b] border border-emerald-500/20'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            Universal Core in All 3 (66)
          </button>
        </div>

        {/* Books Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="rounded-xl bg-[#1c1611] border border-amber-500/20 p-5 flex flex-col justify-between hover:border-amber-400/50 hover:bg-[#241c15] transition-all group shadow-sm"
            >
              <div className="space-y-3">
                {/* Header with Ge'ez and English */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-amber-500/80 uppercase tracking-wider font-mono">
                      #{book.number} · {book.categoryLabel}
                    </span>
                    <h3 className="text-lg font-bold font-heading text-amber-100 group-hover:text-amber-300 transition-colors">
                      {book.englishTitle}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-ethiopic font-bold text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 block">
                      {book.geezTitle}
                    </span>
                    <span className="text-[10px] text-stone-400 block mt-0.5">
                      {book.transliteration}
                    </span>
                  </div>
                </div>

                {/* Category Badge */}
                <div>{getCanonCategoryBadge(book.canonCategory)}</div>

                {/* Description */}
                <p className="text-xs text-[#c5b8a5] line-clamp-2 leading-relaxed">
                  {book.description}
                </p>

                {/* Synthesis Note */}
                <div className="p-2.5 rounded-lg bg-[#14100c] border border-amber-500/10 text-[11px] text-[#b8a792] leading-snug">
                  <span className="text-amber-400 font-semibold">Synthesis: </span>
                  {book.synthesisNote}
                </div>

                {/* Canon Comparison Checkmarks */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-amber-500/15 text-center text-[11px]">
                  <div className="p-1.5 rounded bg-amber-500/10 border border-amber-500/20">
                    <span className="block text-[10px] text-amber-400/80 font-semibold uppercase">
                      Ethiopian 88
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-amber-300">
                      <Check className="w-3.5 h-3.5 text-amber-400" /> Yes
                    </span>
                  </div>
                  <div className={`p-1.5 rounded border ${
                    book.canonStatus.kjv1611 
                      ? 'bg-purple-500/10 border-purple-500/30 text-purple-300' 
                      : 'bg-stone-900/60 border-stone-800 text-stone-500'
                  }`}>
                    <span className="block text-[10px] text-stone-400 font-semibold uppercase">
                      KJV 1611
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold">
                      {book.canonStatus.kjv1611 ? (
                        <Check className="w-3.5 h-3.5 text-purple-400" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-stone-600" />
                      )}
                      {book.canonStatus.kjv1611 ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded border ${
                    book.canonStatus.protestant1885 
                      ? 'bg-sky-500/10 border-sky-500/30 text-sky-300' 
                      : 'bg-stone-900/60 border-stone-800 text-stone-500'
                  }`}>
                    <span className="block text-[10px] text-stone-400 font-semibold uppercase">
                      Protestant
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold">
                      {book.canonStatus.protestant1885 ? (
                        <Check className="w-3.5 h-3.5 text-sky-400" />
                      ) : (
                        <X className="w-3.5 h-3.5 text-stone-600" />
                      )}
                      {book.canonStatus.protestant1885 ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-3 border-t border-amber-500/10 flex items-center justify-between">
                <span className="text-xs text-stone-400">
                  {book.chaptersCount} {book.chaptersCount === 1 ? 'Chapter' : 'Chapters'}
                </span>
                <button
                  onClick={() => onSelectBook(book)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/15 text-amber-300 hover:bg-amber-500 hover:text-stone-950 transition-all border border-amber-500/30 group-hover:border-amber-400"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Read Scripture
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#1c1611] border border-amber-500/20 space-y-3">
            <BookOpen className="w-10 h-10 text-stone-500 mx-auto" />
            <h3 className="text-base font-semibold text-amber-200">No books found</h3>
            <p className="text-xs text-stone-400 max-w-sm mx-auto">
              No works match your filter query "{searchTerm}". Try clearing your search or switching categories.
            </p>
            <button
              onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500 text-stone-950 mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
