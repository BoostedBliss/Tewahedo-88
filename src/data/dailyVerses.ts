export interface DailyVerse {
  id: string;
  bookId: string;
  bookTitle: string;
  geezTitle: string;
  transliteration: string;
  chapterNumber: number;
  verseNumber: number;
  geezNumber: string;
  text: string;
  geezText: string;
  canonStatus: 'ethiopian_exclusive' | 'kjv_apocrypha_shared' | 'universal_core';
  historicalContext: string;
  significance: string;
}

export const CURATED_DAILY_VERSES: DailyVerse[] = [
  {
    id: 'dv-enoch-1',
    bookId: 'enoch',
    bookTitle: '1 Enoch (Henok)',
    geezTitle: 'መጽሐፈ ሄኖክ',
    transliteration: 'Mäṣḥafä Hénok',
    chapterNumber: 1,
    verseNumber: 9,
    geezNumber: '፱',
    text: 'And behold! He cometh with ten thousands of His holy ones to execute judgment upon all, and to convict all the ungodly of all their deeds of ungodliness which they have ungodly committed.',
    geezText: 'ወናሁ መጽአ ምስለ አእላፍ ቅዱሳኑ ከመ ይግበር ፍርደ ላዕለ ኵሉ፤ ወከመ ይዝልፎሙ ለኵሎሙ ረሲዓን በእንተ ኵሉ ግብሮሙ ዘረሰዩ።',
    canonStatus: 'ethiopian_exclusive',
    historicalContext: 'Preserved exclusively in Ge’ez for centuries. Quoted almost verbatim in the New Testament epistle of Jude (1:14-15), proving apostolic familiarity with Enochic literature.',
    significance: 'The premier messianic judgment prophecy of the Second Temple period.'
  },
  {
    id: 'dv-jubilees-1',
    bookId: 'jubilees',
    bookTitle: 'Book of Jubilees (Kufale)',
    geezTitle: 'መጽሐፈ ኩፋሌ',
    transliteration: 'Mäṣḥafä Kufalé',
    chapterNumber: 1,
    verseNumber: 3,
    geezNumber: '፫',
    text: 'The Angel of the Presence took the heavenly tablets and delivered the mysteries of the cycles and the holy feasts unto Moses on Mount Sinai.',
    geezText: 'ወነሥአ መልአከ ገጽ ጽላተ ሰማይ ወአወፈዮ ለሙሴ ኅቡዓተ ዓውዳት ወበዓላተ ቅዱሳን።',
    canonStatus: 'ethiopian_exclusive',
    historicalContext: 'Unknown in Europe until the 19th-century translation of Ethiopian manuscripts. Qumran Cave 4 later yielded 15 Hebrew Jubilees scrolls, confirming its ancient origin.',
    significance: 'Reveals the 364-day solar calendar and chronological divisions framing Genesis.'
  },
  {
    id: 'dv-1meqabyan-1',
    bookId: '1meqabyan',
    bookTitle: '1 Meqabyan (First Ethiopian Maccabees)',
    geezTitle: 'መጽሐፈ መቃብያን ቀዳማዊ',
    transliteration: 'Mäṣḥafä Mäqabyan Qädamawi',
    chapterNumber: 1,
    verseNumber: 3,
    geezNumber: '፫',
    text: 'They answered the king: "We serve the living God of heaven, and though our bodies be burned in the furnace, our souls belong to our Creator."',
    geezText: 'ወአውሥእዎ ለንጉሥ፡ ንሕነ ነመልኮ ለአምላከ ሰማይ ሕያው፤ ወእመኒ ተቃጸለ ሥጋነ በእቶነ እሳት፤ ነፍስነሰ ለፈጣሪነ ይእቲ።',
    canonStatus: 'ethiopian_exclusive',
    historicalContext: 'Distinct from Greek Septuagint Maccabees. Relates the indigenous martyrdom of Meqabis under King Siru’ats and exists solely within the Ethiopian canon.',
    significance: 'A cornerstone of Ethiopian theological discourse on the immortality of the soul.'
  },
  {
    id: 'dv-wisdom-1',
    bookId: 'wisdom_of_solomon',
    bookTitle: 'Wisdom of Solomon',
    geezTitle: 'ጥበበ ሰሎሞን',
    transliteration: 'Ṭəbäbä Sälomon',
    chapterNumber: 3,
    verseNumber: 1,
    geezNumber: '፩',
    text: 'The souls of the righteous are in the hand of God, and no torment will ever touch them.',
    geezText: 'ነፍሳተ ጻድቃንሰ በእደ እግዚአብሔር እማንቱ፤ ወኢይቀርቦን ኵሉ ጻዕር።',
    canonStatus: 'kjv_apocrypha_shared',
    historicalContext: 'Included in the 1611 King James Bible Apocrypha, but purged in 1885 by the British & Foreign Bible Society. Revered continuously in Ethiopian liturgy.',
    significance: 'Articulates early Jewish-Christian doctrine on the eternal resting state of the righteous.'
  },
  {
    id: 'dv-psalm151-1',
    bookId: 'psalms',
    bookTitle: 'Psalms (Psalm 151)',
    geezTitle: 'መዝሙረ ዳዊት',
    transliteration: 'Mäzmura Dawit (151)',
    chapterNumber: 151,
    verseNumber: 2,
    geezNumber: '፪',
    text: 'My hands made an instrument, and my fingers tuned the harp. And who shall declare it to my Lord? The Lord Himself hears me.',
    geezText: 'እደውየ ገብራ መዝሙረ፤ ወአጻብዕየ አሠነያ መሰንቆ። ወመኑ ይነግሮ ለእግዚእየ፤ እግዚአብሔር ውእቱ ይሰምዐኒ።',
    canonStatus: 'universal_core',
    historicalContext: 'Excluded by post-1885 Protestant editions as apocryphal, but authenticated when 11QPs_a scroll was unrolled in the Dead Sea Caves containing Psalm 151 in Hebrew.',
    significance: 'David’s personal thanksgiving after slaying Goliath, tuned to the sacred Begena harp.'
  },
  {
    id: 'dv-didascalia-1',
    bookId: 'didascalia',
    bookTitle: 'Ethiopian Didascalia (Didesqəlya)',
    geezTitle: 'መጽሐፈ ዲድስቅልያ',
    transliteration: 'Mäṣḥafä Didəsəqəlya',
    chapterNumber: 1,
    verseNumber: 2,
    geezNumber: '፪',
    text: 'Walk in love as Christ loved us, doing good to all men and eschewing every evil way.',
    geezText: 'ሑሩ በፍቅር በከመ ክርስቶስ አፍቀረነ፤ እንዘ ትገብሩ ሠናየ ለኵሉ ሰብእ ወትርሕቁ እምኵሉ ፍኖተ እከይ።',
    canonStatus: 'ethiopian_exclusive',
    historicalContext: 'Part of the Broader Canon of the New Testament. While Western churches archived it as patristic history, Ethiopia preserved it as active inspired scripture.',
    significance: 'Living apostolic ethical guidance for community harmony and charitable hospitality.'
  }
];
