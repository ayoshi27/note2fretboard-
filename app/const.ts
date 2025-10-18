export type GuitarString = 1 | 2 | 3 | 4 | 5 | 6;

export type Sound = {
  /** like C, D, E */
  note: string;
  /** ♯ or ♭ */
  symbol: string | null;
  /** 2 on E2 */
  octave: number;
};

export const SOUND_ON_GUITAR_STRING: Record<GuitarString, Sound[]> = {
  1: [
    {
      note: "E",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: "#",
      octave: 4,
    },
    {
      note: "G",
      symbol: null,
      octave: 4,
    },
    {
      note: "G",
      symbol: "#",
      octave: 4,
    },
    {
      note: "A",
      symbol: null,
      octave: 4,
    },
    {
      note: "A",
      symbol: "#",
      octave: 4,
    },
    {
      note: "B",
      symbol: null,
      octave: 4,
    },
    {
      note: "C",
      symbol: null,
      octave: 5,
    },
    {
      note: "C",
      symbol: "#",
      octave: 5,
    },
    {
      note: "D",
      symbol: null,
      octave: 5,
    },
    {
      note: "D",
      symbol: "#",
      octave: 5,
    },
    {
      note: "E",
      symbol: null,
      octave: 5,
    },
    {
      note: "F",
      symbol: null,
      octave: 5,
    },
    {
      note: "F",
      symbol: "#",
      octave: 5,
    },
    {
      note: "G",
      symbol: null,
      octave: 5,
    },
    {
      note: "G",
      symbol: "#",
      octave: 5,
    },
    {
      note: "A",
      symbol: null,
      octave: 5,
    },
    {
      note: "A",
      symbol: "#",
      octave: 5,
    },
    {
      note: "B",
      symbol: null,
      octave: 5,
    },
    {
      note: "C",
      symbol: null,
      octave: 6,
    },
    {
      note: "C",
      symbol: "#",
      octave: 6,
    },
    {
      note: "D",
      symbol: null,
      octave: 6,
    },
    {
      note: "D",
      symbol: "#",
      octave: 6,
    },
  ],
  2: [
    {
      note: "B",
      symbol: null,
      octave: 3,
    },
    {
      note: "C",
      symbol: null,
      octave: 4,
    },
    {
      note: "C",
      symbol: "#",
      octave: 4,
    },
    {
      note: "D",
      symbol: null,
      octave: 4,
    },
    {
      note: "D",
      symbol: "#",
      octave: 4,
    },
    {
      note: "E",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: "#",
      octave: 4,
    },
    {
      note: "G",
      symbol: null,
      octave: 4,
    },
    {
      note: "G",
      symbol: "#",
      octave: 4,
    },
    {
      note: "A",
      symbol: null,
      octave: 4,
    },
    {
      note: "A",
      symbol: "#",
      octave: 4,
    },
    {
      note: "B",
      symbol: null,
      octave: 4,
    },
    {
      note: "C",
      symbol: null,
      octave: 5,
    },
    {
      note: "C",
      symbol: "#",
      octave: 5,
    },
    {
      note: "D",
      symbol: null,
      octave: 5,
    },
    {
      note: "D",
      symbol: "#",
      octave: 5,
    },
    {
      note: "E",
      symbol: null,
      octave: 5,
    },
    {
      note: "F",
      symbol: null,
      octave: 5,
    },
    {
      note: "F",
      symbol: "#",
      octave: 5,
    },
    {
      note: "G",
      symbol: null,
      octave: 5,
    },
    {
      note: "G",
      symbol: "#",
      octave: 5,
    },
    {
      note: "A",
      symbol: null,
      octave: 5,
    },
    {
      note: "A",
      symbol: "#",
      octave: 5,
    },
  ],
  3: [
    {
      note: "G",
      symbol: null,
      octave: 3,
    },
    {
      note: "G",
      symbol: "#",
      octave: 3,
    },
    {
      note: "A",
      symbol: null,
      octave: 3,
    },
    {
      note: "A",
      symbol: "#",
      octave: 3,
    },
    {
      note: "B",
      symbol: null,
      octave: 3,
    },
    {
      note: "C",
      symbol: null,
      octave: 4,
    },
    {
      note: "C",
      symbol: "#",
      octave: 4,
    },
    {
      note: "D",
      symbol: null,
      octave: 4,
    },
    {
      note: "D",
      symbol: "#",
      octave: 4,
    },
    {
      note: "E",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: "#",
      octave: 4,
    },
    {
      note: "G",
      symbol: null,
      octave: 4,
    },
    {
      note: "G",
      symbol: "#",
      octave: 4,
    },
    {
      note: "A",
      symbol: null,
      octave: 4,
    },
    {
      note: "A",
      symbol: "#",
      octave: 4,
    },
    {
      note: "B",
      symbol: null,
      octave: 4,
    },
    {
      note: "C",
      symbol: null,
      octave: 5,
    },
    {
      note: "C",
      symbol: "#",
      octave: 5,
    },
    {
      note: "D",
      symbol: null,
      octave: 5,
    },
    {
      note: "D",
      symbol: "#",
      octave: 5,
    },
    {
      note: "E",
      symbol: null,
      octave: 5,
    },
    {
      note: "F",
      symbol: null,
      octave: 5,
    },
    {
      note: "F",
      symbol: "#",
      octave: 5,
    },
  ],
  4: [
    {
      note: "D",
      symbol: null,
      octave: 3,
    },
    {
      note: "D",
      symbol: "#",
      octave: 3,
    },
    {
      note: "E",
      symbol: null,
      octave: 3,
    },
    {
      note: "F",
      symbol: null,
      octave: 3,
    },
    {
      note: "F",
      symbol: "#",
      octave: 3,
    },
    {
      note: "G",
      symbol: null,
      octave: 3,
    },
    {
      note: "G",
      symbol: "#",
      octave: 3,
    },
    {
      note: "A",
      symbol: null,
      octave: 3,
    },
    {
      note: "A",
      symbol: "#",
      octave: 3,
    },
    {
      note: "B",
      symbol: null,
      octave: 3,
    },
    {
      note: "C",
      symbol: null,
      octave: 4,
    },
    {
      note: "C",
      symbol: "#",
      octave: 4,
    },
    {
      note: "D",
      symbol: null,
      octave: 4,
    },
    {
      note: "D",
      symbol: "#",
      octave: 4,
    },
    {
      note: "E",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: "#",
      octave: 4,
    },
    {
      note: "G",
      symbol: null,
      octave: 4,
    },
    {
      note: "G",
      symbol: "#",
      octave: 4,
    },
    {
      note: "A",
      symbol: null,
      octave: 4,
    },
    {
      note: "A",
      symbol: "#",
      octave: 4,
    },
    {
      note: "B",
      symbol: null,
      octave: 4,
    },
    {
      note: "C",
      symbol: null,
      octave: 5,
    },
    {
      note: "C",
      symbol: "#",
      octave: 5,
    },
  ],
  5: [
    {
      note: "A",
      symbol: null,
      octave: 2,
    },
    {
      note: "A",
      symbol: "#",
      octave: 2,
    },
    {
      note: "B",
      symbol: null,
      octave: 2,
    },
    {
      note: "C",
      symbol: null,
      octave: 3,
    },
    {
      note: "C",
      symbol: "#",
      octave: 3,
    },
    {
      note: "D",
      symbol: null,
      octave: 3,
    },
    {
      note: "D",
      symbol: "#",
      octave: 3,
    },
    {
      note: "E",
      symbol: null,
      octave: 3,
    },
    {
      note: "F",
      symbol: null,
      octave: 3,
    },
    {
      note: "F",
      symbol: "#",
      octave: 3,
    },
    {
      note: "G",
      symbol: null,
      octave: 3,
    },
    {
      note: "G",
      symbol: "#",
      octave: 3,
    },
    {
      note: "A",
      symbol: null,
      octave: 3,
    },
    {
      note: "A",
      symbol: "#",
      octave: 3,
    },
    {
      note: "B",
      symbol: null,
      octave: 3,
    },
    {
      note: "C",
      symbol: null,
      octave: 4,
    },
    {
      note: "C",
      symbol: "#",
      octave: 4,
    },
    {
      note: "D",
      symbol: null,
      octave: 4,
    },
    {
      note: "D",
      symbol: "#",
      octave: 4,
    },
    {
      note: "E",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: null,
      octave: 4,
    },
    {
      note: "F",
      symbol: "#",
      octave: 4,
    },
    {
      note: "G",
      symbol: null,
      octave: 4,
    },
    {
      note: "G",
      symbol: "#",
      octave: 4,
    },
  ],
  6: [
    {
      note: "E",
      symbol: null,
      octave: 2,
    },
    {
      note: "F",
      symbol: null,
      octave: 2,
    },
    {
      note: "F",
      symbol: "#",
      octave: 2,
    },
    {
      note: "G",
      symbol: null,
      octave: 2,
    },
    {
      note: "G",
      symbol: "#",
      octave: 2,
    },
    {
      note: "A",
      symbol: null,
      octave: 2,
    },
    {
      note: "A",
      symbol: "#",
      octave: 2,
    },
    {
      note: "B",
      symbol: null,
      octave: 2,
    },
    {
      note: "C",
      symbol: null,
      octave: 3,
    },
    {
      note: "C",
      symbol: "#",
      octave: 3,
    },
    {
      note: "D",
      symbol: null,
      octave: 3,
    },
    {
      note: "D",
      symbol: "#",
      octave: 3,
    },
    {
      note: "E",
      symbol: null,
      octave: 3,
    },
    {
      note: "F",
      symbol: null,
      octave: 3,
    },
    {
      note: "F",
      symbol: "#",
      octave: 3,
    },
    {
      note: "G",
      symbol: null,
      octave: 3,
    },
    {
      note: "G",
      symbol: "#",
      octave: 3,
    },
    {
      note: "A",
      symbol: null,
      octave: 3,
    },
    {
      note: "A",
      symbol: "#",
      octave: 3,
    },
    {
      note: "B",
      symbol: null,
      octave: 3,
    },
    {
      note: "C",
      symbol: null,
      octave: 4,
    },
    {
      note: "C",
      symbol: "#",
      octave: 4,
    },
    {
      note: "D",
      symbol: null,
      octave: 4,
    },
    {
      note: "D",
      symbol: "#",
      octave: 4,
    },
  ],
};

export const getSoundNotation = (sound: Sound | undefined) => {
  if (!sound) return "";
  return sound.symbol
    ? `${sound.note}${sound.symbol}${sound.octave}`
    : `${sound.note}${sound.octave}`;
};
