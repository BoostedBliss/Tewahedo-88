import React from 'react';
import { 
  BookOpen, 
  Compass, 
  Bookmark as BookmarkIcon, 
  Search, 
  Music, 
  WifiOff, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface NavbarProps {
  activeView: 'reader' | 'dashboard';
  setActiveView: (view: 'reader' | 'dashboard') => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  bookmarksCount: number;
  highlightsCount: number;
  isBegenaAmbiencePlaying: boolean;
  onToggleAmbience: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onOpenSearch,
  onOpenBookmarks,
  bookmarksCount,
  highlightsCount,
  isBegenaAmbiencePlaying,
  onToggleAmbience,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#16110d]/95 backdrop-blur-md border-b border-amber-500/20 px-4 sm:px-6 py-2.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => setActiveView('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-black shadow-md border border-amber-400/40">
            <span className="font-heading text-base">፹፰</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base font-black font-heading tracking-wide text-amber-200 group-hover:text-amber-300 transition-colors">
                Ethiopian Bible 88
              </span>
              <span className="hidden md:inline px-1.5 py-0.2 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Full Canon
              </span>
            </div>
            <span className="text-[10px] text-stone-400 block -mt-0.5">
              መጽሐፍ ቅዱስ · Complete Canon & Audio
            </span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <nav className="flex items-center gap-1 bg-[#201812] p-1 rounded-xl border border-amber-500/20">
          <button
            onClick={() => setActiveView('reader')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'reader'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-300 hover:text-amber-200 hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Scripture</span> Reader
          </button>
          <button
            onClick={() => setActiveView('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeView === 'dashboard'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-300 hover:text-amber-200 hover:bg-white/5'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Canon <span className="hidden sm:inline">Synthesis</span> Matrix
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Search Trigger */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#221b14] border border-amber-500/20 text-stone-300 hover:text-amber-300 hover:border-amber-400/40 text-xs font-medium transition-all"
            title="Search books and verses (Cmd+K)"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Search</span>
          </button>

          {/* Bookmarks Drawer Trigger */}
          <button
            onClick={onOpenBookmarks}
            className="relative p-2 rounded-lg bg-[#221b14] border border-amber-500/20 text-stone-300 hover:text-amber-300 hover:border-amber-400/40 text-xs transition-all"
            title="Saved Bookmarks & Highlights"
          >
            <BookmarkIcon className="w-3.5 h-3.5" />
            {(bookmarksCount > 0 || highlightsCount > 0) && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-stone-950 text-[10px] font-bold flex items-center justify-center">
                {bookmarksCount + highlightsCount}
              </span>
            )}
          </button>

          {/* Begena Ambient Sound Synth */}
          <button
            onClick={onToggleAmbience}
            className={`p-2 rounded-lg border text-xs transition-all ${
              isBegenaAmbiencePlaying
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 animate-pulse'
                : 'bg-[#221b14] border-amber-500/20 text-stone-400 hover:text-amber-300'
            }`}
            title="Toggle Begena (Davidic Harp) Contemplative Drone"
          >
            <Music className="w-3.5 h-3.5" />
          </button>

          {/* Offline Ready Badge */}
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Offline Canon</span>
          </div>
        </div>
      </div>
    </header>
  );
};
