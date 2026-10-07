import React, { useState, useEffect, useRef } from 'react';
import { Book, Chapter, Verse, Highlight, Bookmark, ReaderTheme, ReaderFont } from '../types/canon';
import { audioNarration, ORATOR_PRESETS, OratorPreset } from '../utils/audioNarration';
import { 
  Play, 
  Pause, 
  Square, 
  Bookmark as BookmarkIcon, 
  Highlighter, 
  Volume2, 
  VolumeX, 
  Music, 
  Share2, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Sliders, 
  Type, 
  Palette, 
  Info,
  Sparkles,
  Search,
  BookOpen
} from 'lucide-react';

interface ReaderViewProps {
  currentBook: Book;
  currentChapterNum: number;
  books: Book[];
  onSelectBookAndChapter: (book: Book, chapterNum: number) => void;
  highlights: Highlight[];
  onToggleHighlight: (bookId: string, chapterNum: number, verseNum: number, color: Highlight['color'], text: string, bookTitle: string) => void;
  bookmarks: Bookmark[];
  onAddBookmark: (bookId: string, chapterNum: number, verseNum?: number, note?: string) => void;
  onRemoveBookmark: (bookmarkId: string) => void;
  onOpenCanonDashboard: () => void;
}

export const ReaderView: React.FC<ReaderViewProps> = ({
  currentBook,
  currentChapterNum,
  books,
  onSelectBookAndChapter,
  highlights,
  onToggleHighlight,
  bookmarks,
  onAddBookmark,
  onRemoveBookmark,
  onOpenCanonDashboard,
}) => {
  // Appearance settings
  const [theme, setTheme] = useState<ReaderTheme>('monastery');
  const [font, setFont] = useState<ReaderFont>('serif');
  const [fontSize, setFontSize] = useState<number>(18); // px
  const [showSettings, setShowSettings] = useState(false);

  // Audio Narration State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPausedAudio, setIsPausedAudio] = useState(false);
  const [activeRecitingVerse, setActiveRecitingVerse] = useState<number | null>(null);
  const [selectedOratorId, setSelectedOratorId] = useState<string>('monastic_baritone');
  const [isBegenaAmbienceOn, setIsBegenaAmbienceOn] = useState(false);

  const activeOrator = ORATOR_PRESETS.find((p) => p.id === selectedOratorId) || ORATOR_PRESETS[0];

  // Verse interaction popup
  const [selectedVerseForAction, setSelectedVerseForAction] = useState<Verse | null>(null);
  const [bookmarkNoteInput, setBookmarkNoteInput] = useState('');
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<number | null>(null);

  // Find or generate active chapter
  const currentChapter: Chapter =
    currentBook.sampleChapters.find((c) => c.number === currentChapterNum) || {
      number: currentChapterNum,
      verses: [
        {
          number: 1,
          geezNumber: '፩',
          text: `In this chapter of ${currentBook.englishTitle}, the sacred narrative of the Ethiopian tradition unfolds with reverence and holy wisdom.`,
          geezText: `በዛቲ ምዕራፍ ዘ${currentBook.geezTitle} ይትነገር ቃለ ጥበብ ወበረከት ዘእግዚአብሔር።`
        },
        {
          number: 2,
          geezNumber: '፪',
          text: `The faithful are called to seek the ordinances of the Most High, observing righteousness throughout their generations.`,
          geezText: `ይጼውዕ እግዚአብሔር ለምእመናን ከመ ይዕቀቡ ሕጎ ወትእዛዛቲሁ ለትውልደ ትውልድ።`
        },
        {
          number: 3,
          geezNumber: '፫',
          text: `Blessed is the soul who meditates day and night upon the holy testimonies preserved in the sanctuary of Zion.`,
          geezText: `ቡሩክ ውእቱ ብእሲ ዘያንበብ ሕገ እግዚአብሔር በመዓልት ወበሌሊት ዘተዐቀበ ውስተ ጽዮን።`
        }
      ]
    };

  // Stop audio on chapter/book switch
  useEffect(() => {
    audioNarration.stopNarration();
    setIsPlayingAudio(false);
    setIsPausedAudio(false);
    setActiveRecitingVerse(null);
  }, [currentBook.id, currentChapterNum]);

  // Read whole chapter sequentially with Davidic harp opening
  const handlePlayChapterAudio = () => {
    if (isPlayingAudio) {
      if (isPausedAudio) {
        audioNarration.resumeNarration();
        setIsPausedAudio(false);
      } else {
        audioNarration.pauseNarration();
        setIsPausedAudio(true);
      }
      return;
    }

    if (!currentChapter.verses.length) return;

    setIsPlayingAudio(true);
    setIsPausedAudio(false);

    // Play sacred Davidic harp opening arpeggio before oral recitation starts
    audioNarration.playHarpArpeggio();

    let verseIndex = 0;

    const playNext = () => {
      if (verseIndex >= currentChapter.verses.length) {
        setIsPlayingAudio(false);
        setActiveRecitingVerse(null);
        // Play contemplative closing chord
        audioNarration.playContemplativeChord();
        return;
      }

      const v = currentChapter.verses[verseIndex];
      setActiveRecitingVerse(v.number);

      const readingText = `Verse ${v.number}. ${v.text}`;
      audioNarration.speakVerse(readingText, {
        rate: activeOrator.rate,
        pitch: activeOrator.pitch,
        playPluck: verseIndex > 0, // Subtle string pluck on each verse transition
        onEnd: () => {
          verseIndex++;
          playNext();
        },
        onError: () => {
          setIsPlayingAudio(false);
          setActiveRecitingVerse(null);
        }
      });
    };

    // Give the harp arpeggio 600ms to bloom before orator voice enters
    setTimeout(() => {
      playNext();
    }, 600);
  };

  const handleStopAudio = () => {
    audioNarration.stopNarration();
    setIsPlayingAudio(false);
    setIsPausedAudio(false);
    setActiveRecitingVerse(null);
  };

  const handlePlaySingleVerse = (verse: Verse) => {
    setIsPlayingAudio(true);
    setIsPausedAudio(false);
    setActiveRecitingVerse(verse.number);

    audioNarration.speakVerse(`Verse ${verse.number}. ${verse.text}`, {
      rate: activeOrator.rate,
      pitch: activeOrator.pitch,
      playPluck: true,
      onEnd: () => {
        setIsPlayingAudio(false);
        setActiveRecitingVerse(null);
      },
      onError: () => {
        setIsPlayingAudio(false);
        setActiveRecitingVerse(null);
      }
    });
  };

  const toggleBegenaAmbience = () => {
    const active = audioNarration.toggleAmbience(0.12);
    setIsBegenaAmbienceOn(active);
  };

  // Chapter navigation with subtle acoustic harp pluck
  const handlePrevChapter = () => {
    if (currentChapterNum > 1) {
      audioNarration.playHarpPluck(130.81, 1.0, 0.15);
      onSelectBookAndChapter(currentBook, currentChapterNum - 1);
    }
  };

  const handleNextChapter = () => {
    if (currentChapterNum < currentBook.chaptersCount) {
      audioNarration.playHarpPluck(196.0, 1.0, 0.15);
      onSelectBookAndChapter(currentBook, currentChapterNum + 1);
    }
  };

  // Check existing highlights and bookmarks
  const getVerseHighlight = (verseNum: number) => {
    return highlights.find(
      (h) =>
        h.bookId === currentBook.id &&
        h.chapterNumber === currentChapterNum &&
        h.verseNumber === verseNum
    );
  };

  const isVerseBookmarked = (verseNum: number) => {
    return bookmarks.some(
      (b) =>
        b.bookId === currentBook.id &&
        b.chapterNumber === currentChapterNum &&
        b.verseNumber === verseNum
    );
  };

  const handleVerseHighlight = (
    color: Highlight['color'],
    verse: Verse
  ) => {
    audioNarration.playSanctuaryChime();
    onToggleHighlight(
      currentBook.id,
      currentChapterNum,
      verse.number,
      color,
      verse.text,
      currentBook.englishTitle
    );
  };

  const handleCopyVerse = (verse: Verse) => {
    audioNarration.playHarpPluck(261.63, 0.8, 0.12);
    const textToCopy = `"${verse.text}" — ${currentBook.englishTitle} ${currentChapterNum}:${verse.number} (${currentBook.geezTitle})`;
    navigator.clipboard.writeText(textToCopy);
    setCopyFeedback(verse.number);
    setTimeout(() => setCopyFeedback(null), 2000);
  };

  // Theme styles
  const getThemeClasses = () => {
    switch (theme) {
      case 'parchment':
        return {
          container: 'bg-[#f4ebe1] text-[#2c2016] border-[#d8c5b0]',
          surface: 'bg-[#ede1d3] border-[#decbb8]',
          scriptureText: 'text-[#2a1d13]',
          geezText: 'text-[#874116]',
          mutedText: 'text-[#776251]',
          highlightGold: 'bg-amber-300/40 text-stone-900',
          highlightRed: 'bg-red-300/40 text-stone-900',
          highlightGreen: 'bg-emerald-300/40 text-stone-900',
          highlightBlue: 'bg-sky-300/40 text-stone-900',
          highlightPurple: 'bg-purple-300/40 text-stone-900',
        };
      case 'obsidian':
        return {
          container: 'bg-[#09090b] text-[#f4f4f5] border-zinc-800',
          surface: 'bg-[#18181b] border-zinc-800',
          scriptureText: 'text-[#f4f4f5]',
          geezText: 'text-amber-400',
          mutedText: 'text-zinc-400',
          highlightGold: 'bg-amber-500/30 text-amber-100',
          highlightRed: 'bg-red-500/30 text-red-100',
          highlightGreen: 'bg-emerald-500/30 text-emerald-100',
          highlightBlue: 'bg-sky-500/30 text-sky-100',
          highlightPurple: 'bg-purple-500/30 text-purple-100',
        };
      case 'monastery':
      default:
        return {
          container: 'bg-[#14100c] text-[#f1e7d8] border-amber-900/30',
          surface: 'bg-[#1e1812] border-amber-500/20',
          scriptureText: 'text-[#f6ece0]',
          geezText: 'text-amber-400',
          mutedText: 'text-[#b09e8b]',
          highlightGold: 'bg-amber-500/25 text-amber-200 border-l-2 border-amber-400',
          highlightRed: 'bg-red-500/25 text-red-200 border-l-2 border-red-400',
          highlightGreen: 'bg-emerald-500/25 text-emerald-200 border-l-2 border-emerald-400',
          highlightBlue: 'bg-sky-500/25 text-sky-200 border-l-2 border-sky-400',
          highlightPurple: 'bg-purple-500/25 text-purple-200 border-l-2 border-purple-400',
        };
    }
  };

  const themeStyle = getThemeClasses();

  const getFontFamilyClass = () => {
    switch (font) {
      case 'ethiopic':
        return 'font-ethiopic';
      case 'sans':
        return 'font-ui';
      case 'serif':
      default:
        return 'font-scripture';
    }
  };

  const getHighlightClass = (color: Highlight['color']) => {
    switch (color) {
      case 'gold': return themeStyle.highlightGold;
      case 'red': return themeStyle.highlightRed;
      case 'green': return themeStyle.highlightGreen;
      case 'blue': return themeStyle.highlightBlue;
      case 'purple': return themeStyle.highlightPurple;
    }
  };

  return (
    <div className={`min-h-screen ${themeStyle.container} transition-colors duration-200`}>
      {/* Sticky Reader Bar */}
      <div className={`sticky top-0 z-30 border-b ${themeStyle.surface} backdrop-blur-md px-4 sm:px-6 py-3 shadow-md`}>
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Left: Book & Chapter Selector */}
          <div className="flex items-center gap-2">
            <select
              value={currentBook.id}
              onChange={(e) => {
                const found = books.find((b) => b.id === e.target.value);
                if (found) onSelectBookAndChapter(found, 1);
              }}
              className="bg-[#2a2118] text-amber-200 text-sm font-semibold rounded-lg px-3 py-1.5 border border-amber-500/30 focus:outline-none focus:ring-1 focus:ring-amber-400"
            >
              {books.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.englishTitle} ({b.geezTitle})
                </option>
              ))}
            </select>

            {/* Chapter Select */}
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrevChapter}
                disabled={currentChapterNum <= 1}
                className="p-1.5 rounded-lg text-amber-300 hover:bg-amber-500/20 disabled:opacity-30 disabled:hover:bg-transparent"
                title="Previous Chapter"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <select
                value={currentChapterNum}
                onChange={(e) => onSelectBookAndChapter(currentBook, Number(e.target.value))}
                className="bg-[#2a2118] text-amber-200 text-sm font-semibold rounded-lg px-2.5 py-1.5 border border-amber-500/30 focus:outline-none"
              >
                {Array.from({ length: currentBook.chaptersCount }, (_, i) => i + 1).map((ch) => (
                  <option key={ch} value={ch}>
                    Chapter {ch}
                  </option>
                ))}
              </select>
              <button
                onClick={handleNextChapter}
                disabled={currentChapterNum >= currentBook.chaptersCount}
                className="p-1.5 rounded-lg text-amber-300 hover:bg-amber-500/20 disabled:opacity-30 disabled:hover:bg-transparent"
                title="Next Chapter"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center: Audio Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePlayChapterAudio}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 text-stone-950 hover:bg-amber-400 transition-all shadow"
            >
              {isPlayingAudio && !isPausedAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  Pause Narration
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Recite Chapter
                </>
              )}
            </button>

            {isPlayingAudio && (
              <button
                onClick={handleStopAudio}
                className="p-1.5 rounded-lg bg-[#2a2118] text-red-400 hover:bg-red-500/20 border border-red-500/30"
                title="Stop Narration"
              >
                <Square className="w-3.5 h-3.5 fill-current" />
              </button>
            )}

            {/* Begena Ambient Harp Toggle */}
            <button
              onClick={toggleBegenaAmbience}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isBegenaAmbienceOn
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm animate-pulse'
                  : 'bg-[#2a2118] text-stone-400 border-amber-500/20 hover:text-amber-300'
              }`}
              title="Sacred Begena (Harp of David) Ambient drone synthesizer"
            >
              <Music className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Begena Ambience</span>
            </button>
          </div>

          {/* Right: Display / Settings Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-1.5 rounded-lg bg-[#2a2118] text-amber-300 hover:bg-amber-500/20 border border-amber-500/25"
              title="Typography & Theme Settings"
            >
              <Sliders className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCanonDashboard}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/25"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">Canon Synthesis</span>
            </button>
          </div>
        </div>

        {/* Expandable Settings Drawer */}
        {showSettings && (
          <div className="max-w-5xl mx-auto mt-3 pt-3 border-t border-amber-500/20 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {/* Font Family */}
            <div className="space-y-1.5">
              <span className="font-semibold text-amber-400/90 block">Typeface</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setFont('serif')}
                  className={`px-3 py-1 rounded text-xs font-serif ${font === 'serif' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-[#2a2118] text-stone-300'}`}
                >
                  EB Garamond
                </button>
                <button
                  onClick={() => setFont('ethiopic')}
                  className={`px-3 py-1 rounded text-xs ${font === 'ethiopic' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-[#2a2118] text-stone-300'}`}
                >
                  Ethiopic
                </button>
                <button
                  onClick={() => setFont('sans')}
                  className={`px-3 py-1 rounded text-xs font-sans ${font === 'sans' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-[#2a2118] text-stone-300'}`}
                >
                  Clean Sans
                </button>
              </div>
            </div>

            {/* Orator Voice Profile */}
            <div className="space-y-1.5">
              <span className="font-semibold text-amber-400/90 block">Orator Voice & Cadence</span>
              <div className="flex items-center gap-2">
                <select
                  value={selectedOratorId}
                  onChange={(e) => setSelectedOratorId(e.target.value)}
                  className="bg-[#2a2118] text-amber-200 text-xs rounded px-2.5 py-1.5 border border-amber-500/30 w-full focus:outline-none"
                >
                  {ORATOR_PRESETS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => {
                    audioNarration.playHarpArpeggio();
                    setTimeout(() => {
                      audioNarration.speakVerse('Grace and peace unto you in the name of the Most High.', {
                        rate: activeOrator.rate,
                        pitch: activeOrator.pitch,
                      });
                    }, 500);
                  }}
                  className="px-2 py-1.5 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-stone-950 font-bold text-[11px] shrink-0 border border-amber-500/30 transition-all"
                  title="Audition male orator voice with harp arpeggio"
                >
                  Audition
                </button>
              </div>
              <div className="flex items-center justify-between text-[10px] text-stone-400 pt-0.5">
                <span>Text-to-speech depth: Warm baritone</span>
                <div className="flex items-center gap-1 bg-[#2a2118] rounded px-1.5 py-0.5 border border-amber-500/20">
                  <button onClick={() => setFontSize(Math.max(14, fontSize - 2))} className="px-1 text-stone-400 hover:text-amber-200">A-</button>
                  <span className="text-amber-300 font-mono text-[10px]">{fontSize}px</span>
                  <button onClick={() => setFontSize(Math.min(28, fontSize + 2))} className="px-1 text-stone-400 hover:text-amber-200">A+</button>
                </div>
              </div>
            </div>

            {/* Theme Selector */}
            <div className="space-y-1.5">
              <span className="font-semibold text-amber-400/90 block">Color Ambience</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setTheme('monastery')}
                  className={`px-3 py-1 rounded text-xs ${theme === 'monastery' ? 'bg-amber-500 text-stone-950 font-bold' : 'bg-[#2a2118] text-stone-300'}`}
                >
                  Monastery
                </button>
                <button
                  onClick={() => setTheme('parchment')}
                  className={`px-3 py-1 rounded text-xs ${theme === 'parchment' ? 'bg-[#c7b29a] text-stone-900 font-bold' : 'bg-[#2a2118] text-stone-300'}`}
                >
                  Parchment
                </button>
                <button
                  onClick={() => setTheme('obsidian')}
                  className={`px-3 py-1 rounded text-xs ${theme === 'obsidian' ? 'bg-zinc-700 text-white font-bold' : 'bg-[#2a2118] text-stone-300'}`}
                >
                  Obsidian
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Scripture Text Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10 space-y-8">
        {/* Book Header Card */}
        <div className={`p-6 sm:p-8 rounded-2xl ${themeStyle.surface} border space-y-4 shadow-xl`}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-500/90 font-mono">
              Book #{currentBook.number} · {currentBook.categoryLabel}
            </span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {currentBook.canonCategory === 'ethiopian_exclusive'
                  ? 'Ethiopian 88 Full Exclusive'
                  : currentBook.canonCategory === 'kjv_apocrypha_shared'
                  ? 'KJV 1611 Apocrypha Core'
                  : 'Universal Core (All 3 Canons)'}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-amber-500/15 pb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-amber-200">
                {currentBook.englishTitle}
              </h1>
              <p className="text-sm text-stone-400 mt-1 font-sans">
                {currentBook.transliteration} · Chapter {currentChapterNum} of {currentBook.chaptersCount}
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl sm:text-3xl font-bold font-ethiopic text-amber-400">
                {currentBook.geezTitle}
              </div>
              <span className="text-[11px] text-stone-400">Ge'ez Scriptural Title</span>
            </div>
          </div>

          {/* Historical Synthesis Annotation */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1.5">
            <div className="flex items-center gap-1.5 font-bold text-amber-400">
              <Info className="w-3.5 h-3.5" />
              <span>Canonical Synthesis & History</span>
            </div>
            <p className="text-[#dcd1c2] leading-relaxed">
              {currentBook.synthesisNote}
            </p>
          </div>
        </div>

        {/* Verses Reading Body */}
        <div className={`space-y-6 ${getFontFamilyClass()}`} style={{ fontSize: `${fontSize}px` }}>
          {currentChapter.verses.map((verse) => {
            const highlight = getVerseHighlight(verse.number);
            const bookmarked = isVerseBookmarked(verse.number);
            const isReciting = activeRecitingVerse === verse.number;

            return (
              <div
                key={verse.number}
                className={`relative group rounded-xl p-3 sm:p-4 transition-all duration-200 ${
                  highlight ? getHighlightClass(highlight.color) : 'hover:bg-amber-500/5'
                } ${isReciting ? 'ring-2 ring-amber-400 bg-amber-500/15 shadow-lg' : ''}`}
              >
                {/* Verse action buttons shown on hover or active */}
                <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 bg-[#221b14] border border-amber-500/30 rounded-lg p-1 shadow-lg z-10">
                  {/* Recite this verse */}
                  <button
                    onClick={() => handlePlaySingleVerse(verse)}
                    className="p-1 hover:bg-amber-500/20 text-amber-300 rounded"
                    title="Recite this verse"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Highlight Palette Toggle */}
                  <div className="flex items-center gap-0.5 px-1 border-x border-amber-500/20">
                    <button
                      onClick={() => handleVerseHighlight('gold', verse)}
                      className="w-3.5 h-3.5 rounded-full bg-amber-400 hover:scale-125 transition-transform"
                      title="Gold highlight"
                    />
                    <button
                      onClick={() => handleVerseHighlight('red', verse)}
                      className="w-3.5 h-3.5 rounded-full bg-red-500 hover:scale-125 transition-transform"
                      title="Crimson highlight"
                    />
                    <button
                      onClick={() => handleVerseHighlight('green', verse)}
                      className="w-3.5 h-3.5 rounded-full bg-emerald-500 hover:scale-125 transition-transform"
                      title="Sinai green highlight"
                    />
                    <button
                      onClick={() => handleVerseHighlight('blue', verse)}
                      className="w-3.5 h-3.5 rounded-full bg-sky-500 hover:scale-125 transition-transform"
                      title="Lapis blue highlight"
                    />
                  </div>

                  {/* Bookmark Button */}
                  <button
                    onClick={() => {
                      setSelectedVerseForAction(verse);
                      setShowBookmarkModal(true);
                    }}
                    className={`p-1 rounded ${bookmarked ? 'text-amber-400' : 'text-stone-400 hover:text-amber-300'}`}
                    title="Add Bookmark with Note"
                  >
                    <BookmarkIcon className={`w-3.5 h-3.5 ${bookmarked ? 'fill-current' : ''}`} />
                  </button>

                  {/* Copy Verse */}
                  <button
                    onClick={() => handleCopyVerse(verse)}
                    className="p-1 hover:bg-amber-500/20 text-stone-400 hover:text-amber-300 rounded"
                    title="Copy Verse Citation"
                  >
                    {copyFeedback === verse.number ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Share2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Verse Content */}
                <div className="flex items-start gap-3">
                  {/* Verse Number & Ge'ez numeral badge */}
                  <div className="flex flex-col items-center select-none pt-0.5 shrink-0">
                    <span className="text-xs font-bold text-amber-500/80 font-mono">
                      {verse.number}
                    </span>
                    {verse.geezNumber && (
                      <span className="text-[10px] font-ethiopic text-amber-400/90 font-bold">
                        {verse.geezNumber}
                      </span>
                    )}
                  </div>

                  {/* Texts: English Translation and Ge'ez Script */}
                  <div className="space-y-2 flex-1">
                    <p className={`leading-relaxed ${themeStyle.scriptureText}`}>
                      {verse.text}
                    </p>

                    {verse.geezText && (
                      <p className={`text-[0.9em] leading-relaxed font-ethiopic ${themeStyle.geezText} opacity-90`}>
                        {verse.geezText}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Chapter Navigation Footer */}
        <div className={`p-6 rounded-2xl ${themeStyle.surface} border flex items-center justify-between gap-4 mt-12`}>
          <button
            onClick={handlePrevChapter}
            disabled={currentChapterNum <= 1}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#2a2118] text-amber-300 hover:bg-amber-500/20 disabled:opacity-30 disabled:pointer-events-none border border-amber-500/30"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Chapter
          </button>

          <span className="text-xs text-stone-400 font-mono">
            {currentBook.englishTitle} · Ch {currentChapterNum} of {currentBook.chaptersCount}
          </span>

          <button
            onClick={handleNextChapter}
            disabled={currentChapterNum >= currentBook.chaptersCount}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-[#2a2118] text-amber-300 hover:bg-amber-500/20 disabled:opacity-30 disabled:pointer-events-none border border-amber-500/30"
          >
            Next Chapter
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Bookmark Modal */}
      {showBookmarkModal && selectedVerseForAction && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#1e1812] border border-amber-500/30 p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-heading text-amber-200">
                Save Bookmark & Study Reflection
              </h3>
              <button
                onClick={() => setShowBookmarkModal(false)}
                className="text-stone-400 hover:text-stone-200 text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-400 italic">
              "{selectedVerseForAction.text.slice(0, 110)}..."
            </p>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-amber-400">Personal Study Note</label>
              <textarea
                value={bookmarkNoteInput}
                onChange={(e) => setBookmarkNoteInput(e.target.value)}
                placeholder="Write your reflection on this passage..."
                rows={3}
                className="w-full bg-[#14100c] border border-amber-500/25 rounded-xl p-3 text-xs text-amber-100 placeholder-stone-600 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowBookmarkModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-400 hover:text-stone-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  audioNarration.playSanctuaryChime();
                  onAddBookmark(
                    currentBook.id,
                    currentChapterNum,
                    selectedVerseForAction.number,
                    bookmarkNoteInput
                  );
                  setShowBookmarkModal(false);
                  setBookmarkNoteInput('');
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-stone-950 hover:bg-amber-400 shadow"
              >
                Save Bookmark
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
