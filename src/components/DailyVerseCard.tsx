import React, { useState, useEffect } from 'react';
import { CURATED_DAILY_VERSES, DailyVerse } from '../data/dailyVerses';
import { audioNarration } from '../utils/audioNarration';
import { 
  Sparkles, 
  Volume2, 
  RefreshCw, 
  BookOpen, 
  Copy, 
  Check, 
  Info, 
  Layers, 
  ShieldCheck,
  Bookmark
} from 'lucide-react';

interface DailyVerseCardProps {
  onReadChapter: (bookId: string, chapterNum: number) => void;
  onSaveBookmark?: (bookId: string, chapterNum: number, verseNum: number, note?: string) => void;
}

export const DailyVerseCard: React.FC<DailyVerseCardProps> = ({ onReadChapter, onSaveBookmark }) => {
  // Determine daily verse based on day of year for consistency, with shuffle option
  const [verseIndex, setVerseIndex] = useState<number>(() => {
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24
    );
    return dayOfYear % CURATED_DAILY_VERSES.length;
  });

  const [isSpeaking, setIsSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const currentVerse: DailyVerse = CURATED_DAILY_VERSES[verseIndex];

  const handleShuffle = () => {
    audioNarration.stopNarration();
    setIsSpeaking(false);
    audioNarration.playHarpPluck(261.63, 1.2, 0.18);
    setVerseIndex((prev) => (prev + 1) % CURATED_DAILY_VERSES.length);
    setBookmarked(false);
  };

  const handleSpeak = () => {
    if (isSpeaking) {
      audioNarration.stopNarration();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      // Play ascending Davidic harp arpeggio before orator begins
      audioNarration.playHarpArpeggio();

      setTimeout(() => {
        const textToRead = `${currentVerse.bookTitle}, chapter ${currentVerse.chapterNumber}, verse ${currentVerse.verseNumber}. ${currentVerse.text}`;
        audioNarration.speakVerse(textToRead, {
          rate: 0.88,
          pitch: 0.80, // Deep warm baritone
          playPluck: false,
          onEnd: () => setIsSpeaking(false),
          onError: () => setIsSpeaking(false)
        });
      }, 550);
    }
  };

  const handleCopy = () => {
    const quote = `"${currentVerse.text}" — ${currentVerse.bookTitle} ${currentVerse.chapterNumber}:${currentVerse.verseNumber} (${currentVerse.geezTitle})`;
    navigator.clipboard.writeText(quote);
    audioNarration.playHarpPluck(311.13, 0.8, 0.12);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = () => {
    audioNarration.playSanctuaryChime();
    onSaveBookmark?.(
      currentVerse.bookId,
      currentVerse.chapterNumber,
      currentVerse.verseNumber,
      `Daily Verse: ${currentVerse.significance}`
    );
    setBookmarked(true);
    setTimeout(() => setBookmarked(false), 2500);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#281e15] via-[#1f1710] to-[#15100c] border border-amber-500/30 p-6 md:p-8 shadow-xl">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 font-mono">
            Featured Daily Verse & Context
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Canon Origin Badge */}
          {currentVerse.canonStatus === 'ethiopian_exclusive' && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Ethiopian 88 Exclusive
            </span>
          )}
          {currentVerse.canonStatus === 'kjv_apocrypha_shared' && (
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
              <Layers className="w-3 h-3" />
              KJV 1611 Apocrypha Core
            </span>
          )}

          {/* Shuffle Button */}
          <button
            onClick={handleShuffle}
            className="p-1.5 rounded-lg bg-[#1a140f] hover:bg-[#2b2016] text-stone-300 hover:text-amber-300 border border-amber-500/20 text-xs font-medium flex items-center gap-1 transition-all"
            title="Surface another significant verse"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Shuffle</span>
          </button>
        </div>
      </div>

      {/* Verse Citation & Content */}
      <div className="mt-5 space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-amber-100">
              {currentVerse.bookTitle} {currentVerse.chapterNumber}:{currentVerse.verseNumber}
            </h3>
            <span className="text-xs text-stone-400 font-sans">
              {currentVerse.transliteration}
            </span>
          </div>
          <div className="text-right">
            <span className="text-base sm:text-lg font-ethiopic font-bold text-amber-400">
              {currentVerse.geezTitle} · {currentVerse.geezNumber}
            </span>
          </div>
        </div>

        {/* English Scripture Quote */}
        <blockquote className="text-lg sm:text-xl font-scripture text-[#f5ede2] leading-relaxed italic border-l-2 border-amber-500/50 pl-4 py-1">
          "{currentVerse.text}"
        </blockquote>

        {/* Ge'ez Original Translation */}
        <p className="text-sm sm:text-base font-ethiopic text-amber-400/90 leading-relaxed pl-4">
          {currentVerse.geezText}
        </p>

        {/* Historical Context Note */}
        <div className="rounded-xl bg-[#1a140f]/90 border border-amber-500/20 p-4 space-y-1.5 text-xs text-[#cfc2b1]">
          <div className="flex items-center gap-1.5 font-bold text-amber-400">
            <Info className="w-3.5 h-3.5 text-amber-400" />
            <span>Historical & Canonical Synthesis Context</span>
          </div>
          <p className="leading-relaxed">
            {currentVerse.historicalContext}
          </p>
          <div className="pt-1 text-[11px] text-amber-300/80 font-medium">
            Significance: {currentVerse.significance}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-amber-500/15 flex flex-wrap items-center justify-between gap-3">
        {/* Audio Narration & Bookmark */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSpeak}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow ${
              isSpeaking
                ? 'bg-amber-400 text-stone-950 animate-pulse'
                : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-stone-950 border border-amber-500/40'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            {isSpeaking ? 'Reciting...' : 'Recite Audio'}
          </button>

          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg bg-[#1a140f] hover:bg-[#281e15] text-stone-300 hover:text-amber-300 border border-amber-500/20 text-xs transition-colors"
            title="Copy verse citation"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={handleBookmark}
            className="p-1.5 rounded-lg bg-[#1a140f] hover:bg-[#281e15] text-stone-300 hover:text-amber-300 border border-amber-500/20 text-xs transition-colors"
            title="Bookmark verse"
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'text-amber-400 fill-current' : ''}`} />
          </button>
        </div>

        {/* Read Full Chapter CTA */}
        <button
          onClick={() => onReadChapter(currentVerse.bookId, currentVerse.chapterNumber)}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-stone-950 hover:bg-amber-400 transition-all shadow"
        >
          <BookOpen className="w-3.5 h-3.5" />
          Read Full Chapter
        </button>
      </div>
    </div>
  );
};
