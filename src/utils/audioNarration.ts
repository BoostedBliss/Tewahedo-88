/**
 * Audio Narration Service with Deep Resonant Male Orator Voice
 * and Ethiopian Begena (Harp of David) Musical Sound Effects & Chords.
 * 100% client-side, zero external dependencies, works offline.
 */

export interface OratorPreset {
  id: string;
  name: string;
  description: string;
  pitch: number;
  rate: number;
}

export const ORATOR_PRESETS: OratorPreset[] = [
  {
    id: 'monastic_baritone',
    name: 'Abba Gabriel (Deep Monastic Baritone)',
    description: 'Deep, resonant, reverent monastic orator cadence.',
    pitch: 0.80,
    rate: 0.88,
  },
  {
    id: 'solemn_deacon',
    name: 'Deacon Michael (Warm & Solemn)',
    description: 'Warm natural timbre with dignified scripture cadence.',
    pitch: 0.86,
    rate: 0.92,
  },
  {
    id: 'reverent_lector',
    name: 'Elder Petros (Clear & Measured)',
    description: 'Measured, articulate sacred reading cadence.',
    pitch: 0.92,
    rate: 0.96,
  },
];

class AudioNarrationService {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking = false;
  private isPaused = false;
  private voices: SpeechSynthesisVoice[] = [];

  // Web Audio Context for Begena Harps, Chimes, and Ambience
  private audioCtx: AudioContext | null = null;
  private ambienceGain: GainNode | null = null;
  private ambienceOscillators: OscillatorNode[] = [];
  private isAmbiencePlaying = false;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.audioCtx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Intelligently discovers the best male orator voice with warmth and depth
   */
  public getBestMaleOratorVoice(): SpeechSynthesisVoice | null {
    if (!this.voices.length) this.loadVoices();
    if (!this.voices.length) return null;

    // Preferred English male orator voices across Chrome, Safari, Edge, Android & Firefox
    const maleNames = [
      'daniel',
      'oliver',
      'george',
      'arthur',
      'guy',
      'david',
      'ryan',
      'google uk english male',
      'google us english male',
      'microsoft james',
      'microsoft mark',
      'microsoft david',
      'natural (male)',
      'male',
    ];

    // Explicit female indicators to exclude
    const femaleNames = [
      'samantha',
      'victoria',
      'karen',
      'zira',
      'female',
      'susan',
      'hazel',
      'moira',
      'tessa',
      'fiona',
      'helena',
    ];

    // Priority 1: Direct match for recognized warm male orator voice
    for (const name of maleNames) {
      const found = this.voices.find(
        (v) =>
          v.lang.startsWith('en') &&
          v.name.toLowerCase().includes(name) &&
          !femaleNames.some((f) => v.name.toLowerCase().includes(f))
      );
      if (found) return found;
    }

    // Priority 2: Any English voice that does not match female names
    const nonFemaleEn = this.voices.find(
      (v) =>
        v.lang.startsWith('en') &&
        !femaleNames.some((f) => v.name.toLowerCase().includes(f))
    );
    if (nonFemaleEn) return nonFemaleEn;

    // Priority 3: Fallback to first English voice
    return this.voices.find((v) => v.lang.startsWith('en')) || this.voices[0] || null;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (!this.voices.length) this.loadVoices();
    return this.voices;
  }

  /**
   * Recite verse with warm deep male vocal settings and optional introductory harp pluck
   */
  public speakVerse(
    text: string,
    options: {
      rate?: number;
      pitch?: number;
      voice?: SpeechSynthesisVoice | null;
      playPluck?: boolean;
      onStart?: () => void;
      onEnd?: () => void;
      onError?: (err: unknown) => void;
    } = {}
  ) {
    if (!this.synth) return;

    this.stopNarration();

    if (options.playPluck !== false) {
      this.playHarpPluck(196); // Warm G string pluck
    }

    const utterance = new SpeechSynthesisUtterance(text);
    // Depth: 0.82 gives a deep resonant baritone timbre; rate: 0.90 gives measured reverent pacing
    utterance.rate = options.rate ?? 0.90;
    utterance.pitch = options.pitch ?? 0.82;

    const chosenVoice = options.voice || this.getBestMaleOratorVoice();
    if (chosenVoice) {
      utterance.voice = chosenVoice;
    }

    utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPaused = false;
      options.onStart?.();
    };

    utterance.onend = () => {
      this.isSpeaking = false;
      this.isPaused = false;
      options.onEnd?.();
    };

    utterance.onerror = (e) => {
      this.isSpeaking = false;
      this.isPaused = false;
      options.onError?.(e);
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public pauseNarration() {
    if (this.synth && this.isSpeaking) {
      this.synth.pause();
      this.isPaused = true;
    }
  }

  public resumeNarration() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
    }
  }

  public stopNarration() {
    if (this.synth) {
      this.synth.cancel();
      this.isSpeaking = false;
      this.isPaused = false;
      this.currentUtterance = null;
    }
  }

  public getSpeakingState() {
    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPaused,
    };
  }

  // =========================================================================
  // SACRED MUSICAL SOUND EFFECTS & HARP CHORDS (Acoustic Web Audio Synth)
  // =========================================================================

  /**
   * Authentic Begena (Harp of David) String Pluck
   * Uses dual triangle/sine harmonics and wood body resonance filter.
   */
  public playHarpPluck(frequency = 196.0, duration = 1.4, volume = 0.22) {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;

      // Resonant wood body filter
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, now);
      filter.frequency.exponentialRampToValueAtTime(320, now + duration);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(volume, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Fundamental oscillator
      const osc1 = ctx.createOscillator();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(frequency, now);

      // Warm octave harmonic
      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(frequency * 2, now);

      const osc2Gain = ctx.createGain();
      osc2Gain.gain.setValueAtTime(0.35, now);
      osc2.connect(osc2Gain);
      osc2Gain.connect(filter);

      osc1.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration);
      osc2.stop(now + duration);
    } catch {}
  }

  /**
   * Ascending Sacred Davidic Harp Arpeggio (Tizita Pentatonic Chords)
   * Plays on chapter start or scripture recitation opening.
   */
  public playHarpArpeggio(notes: number[] = [130.81, 155.56, 196.0, 261.63, 311.13]) {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    notes.forEach((freq, index) => {
      setTimeout(() => {
        this.playHarpPluck(freq, 1.8, 0.18);
      }, index * 110);
    });
  }

  /**
   * Sacred Sanctuary Chime (Tsenatsil / Ethiopian Sistrum Bell)
   * High pure shimmering chime for bookmarks, highlights, and confirmations.
   */
  public playSanctuaryChime() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const chimeFreqs = [1046.5, 1567.98, 2093.0]; // High harmonic triad

      chimeFreqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.04);

        gain.gain.setValueAtTime(0.12 / (idx + 1), now + idx * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.04);
        osc.stop(now + 1.3);
      });
    } catch {}
  }

  /**
   * Contemplative Cadence Chord
   * A warm, peaceful major-pentatonic chord to close or open scripture reading.
   */
  public playContemplativeChord() {
    this.playHarpArpeggio([98.0, 130.81, 164.81, 196.0, 246.94]);
  }

  // --- Begena Ambient Drone Synthesizer ---
  public toggleAmbience(volume = 0.15): boolean {
    if (this.isAmbiencePlaying) {
      this.stopAmbience();
      return false;
    } else {
      this.startAmbience(volume);
      return true;
    }
  }

  public startAmbience(volume = 0.15) {
    if (this.isAmbiencePlaying) return;

    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      this.ambienceGain = ctx.createGain();
      this.ambienceGain.gain.setValueAtTime(0, ctx.currentTime);
      this.ambienceGain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 2.5);
      this.ambienceGain.connect(ctx.destination);

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filter.Q.setValueAtTime(3, ctx.currentTime);
      filter.connect(this.ambienceGain);

      const freqs = [65.41, 98.0, 130.81, 155.56, 196.0];
      this.ambienceOscillators = [];

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const lfo = ctx.createOscillator();
        lfo.frequency.setValueAtTime(0.18 + idx * 0.05, ctx.currentTime);
        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(1.2, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        oscGain.gain.setValueAtTime(0.2 / (idx + 1), ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(filter);

        osc.start();
        this.ambienceOscillators.push(osc);
      });

      this.isAmbiencePlaying = true;
    } catch {}
  }

  public stopAmbience() {
    if (!this.audioCtx || !this.isAmbiencePlaying) return;

    try {
      if (this.ambienceGain && this.audioCtx) {
        this.ambienceGain.gain.linearRampToValueAtTime(0.001, this.audioCtx.currentTime + 1.2);
        setTimeout(() => {
          this.ambienceOscillators.forEach((osc) => {
            try { osc.stop(); } catch {}
          });
          this.ambienceOscillators = [];
          this.isAmbiencePlaying = false;
        }, 1300);
      } else {
        this.isAmbiencePlaying = false;
      }
    } catch {
      this.isAmbiencePlaying = false;
    }
  }

  public isAmbienceActive(): boolean {
    return this.isAmbiencePlaying;
  }
}

export const audioNarration = new AudioNarrationService();
