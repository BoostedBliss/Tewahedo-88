import { Book } from '../types/canon';

export const ETHIOPIAN_CANON_BOOKS: Book[] = [
  // --- OLD TESTAMENT: LAW & COVENANT ---
  {
    id: 'genesis',
    number: 1,
    englishTitle: 'Genesis',
    geezTitle: 'ኦሪት ዘፍጥረት',
    transliteration: 'Orit Zäfetrat',
    category: 'old_testament',
    categoryLabel: 'The Law (Torah/Orit)',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 50,
    description: 'The narrative of Creation, the Patriarchs, and the beginning of the covenant.',
    synthesisNote: 'Foundational text in all three canons. In the Ethiopian tradition, it is closely paired with Jubilees (Kufale) for chronological precision.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'In the beginning God created the heavens and the earth.', geezText: 'በቀዳሚ ገብረ እግዚአብሔር ሰማየ ወምድረ።' },
          { number: 2, geezNumber: '፪', text: 'The earth was without form, and void; and darkness was on the face of the deep. And the Spirit of God was hovering over the face of the waters.', geezText: 'ወምድርሰ ኢታስተርኢ ወኢኮነት ድልውተ ወጽልመት መልዕልተ ቀላይ፤ ወመንፈሰ እግዚአብሔር ይጼልል መልዕልተ ማይ።' },
          { number: 3, geezNumber: '፫', text: 'Then God said, "Let there be light"; and there was light.', geezText: 'ወይቤ እግዚአብሔር ለይኩን ብርሃን፤ ወኮነ ብርሃን።' },
          { number: 4, geezNumber: '፬', text: 'And God saw the light, that it was good; and God divided the light from the darkness.', geezText: 'ወርእየ እግዚአብሔር ብርሃነ ከመ ሠናይ፤ ወፈለጠ እግዚአብሔር ማዕከለ ብርሃን ወማዕከለ ጽልመት።' },
          { number: 5, geezNumber: '፭', text: 'God called the light Day, and the darkness He called Night. So the evening and the morning were the first day.', geezText: 'ወሰመዮ እግዚአብሔር ለብርሃን ዕለተ፤ ወለጽልመት ሰመዮ ሌሊተ። ወኮነ ሠርክ ወኮነ ጽባሕ አሐዱ ዕለት።' }
        ]
      }
    ]
  },
  {
    id: 'jubilees',
    number: 2,
    englishTitle: 'Book of Jubilees (Kufale)',
    geezTitle: 'መጽሐፈ ኩፋሌ',
    transliteration: 'Mäṣḥafä Kufalé ("The Division")',
    category: 'old_testament',
    categoryLabel: 'Historical & Covenant Secrets',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 50,
    description: 'Dictated by the Angel of the Presence to Moses on Mount Sinai; recounts Genesis-Exodus history through a 364-day solar calendar and 49-year Jubilee divisions.',
    synthesisNote: 'Preserved exclusively in complete form in Ethiopia (Ge’ez). The 1947 Dead Sea Scrolls discovery at Qumran unearthed 15 Hebrew fragments of Jubilees, confirming its pre-Christian antiquity.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'These are the words of the division of the days according to the law and testimony, according to the events of the years in the jubilees.', geezText: 'ዝንቱ ውእቱ ቃለ ኩፋሌሁ ለመዋዕል በከመ ሕግ ወስምዕ፤ በከመ ተከፍለ ዓመታት በኢዮቤልዩ።' },
          { number: 2, geezNumber: '፪', text: 'And Moses was on the mount forty days and forty nights, and the Lord taught him what was past and what would befall in the future.', geezText: 'ወነበረ ሙሴ ውስተ ደብር አርብዓ መዓልተ ወአርብዓ ሌሊተ፤ ወመሀሮ እግዚአብሔር ዘኅለፈ ወዘይመጽእ።' },
          { number: 3, geezNumber: '፫', text: 'The Angel of the Presence took the heavenly tablets and delivered the mysteries of the cycles and the holy feasts unto Moses.', geezText: 'ወነሥአ መልአከ ገጽ ጽላተ ሰማይ ወአወፈዮ ለሙሴ ኅቡዓተ ዓውዳት ወበዓላተ ቅዱሳን።' },
          { number: 4, geezNumber: '፬', text: 'Behold, your children will forsake the solar sabbaths and transgress the appointed holy times unless they heed this written covenant.', geezText: 'ናሁ ደቂቅከ ይኅድጉ ሰንበታተ ፀሐይ ወያዐልዉ በዓላተ ቅድሳት እመ ኢዐቀቡ ዛተ ጽሕፈተ ኪዳን።' }
        ]
      }
    ]
  },
  {
    id: 'enoch',
    number: 3,
    englishTitle: '1 Enoch (Henok)',
    geezTitle: 'መጽሐፈ ሄኖክ',
    transliteration: 'Mäṣḥafä Hénok',
    category: 'old_testament',
    categoryLabel: 'Apocalyptic & Astronomical',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 108,
    description: 'The monumental prophetic apocalypse containing the Book of the Watchers, Parables of the Son of Man, the Astronomical Book, and Dream Visions.',
    synthesisNote: 'Directly quoted in the New Testament (Jude 1:14-15). Preserved entirely in Ge’ez after vanishing in Europe. Re-discovered by James Bruce in 1773; Aramaic Qumran scrolls confirmed its pristine preservation.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'The words of the blessing of Enoch, wherewith he blessed the elect and righteous, who will be living in the day of tribulation, when all the wicked and godless are to be removed.', geezText: 'ቃለ በረከቱ ለሄኖክ ዘከመ ባረኮሙ ለኅሩያን ወጻድቃን እለ ሀለዉ ይኩኑ በዕለተ ምንዳቤ አመ ይሰደዱ ኵሎሙ ኃጥአን ወረሲዓን።' },
          { number: 2, geezNumber: '፪', text: 'And he took up his parable and said: Enoch a righteous man, whose eyes were opened by God, saw the vision of the Holy One in the heavens, which the angels showed me.', geezText: 'ወነሥአ ምሳሌሁ ወይቤ፡ ሄኖክ ብእሲ ጻድቅ ዘተከሥተ አዕይንቲሁ እምእግዚአብሔር፤ ርእየ ራእየ ቅዱስ በሰማያት ዘአርአዩኒ መላእክት።' },
          { number: 3, geezNumber: '፫', text: 'From them I heard everything, and from them I understood what I saw; not for this generation, but for a remote one which is for to come.', geezText: 'እምኔሆሙ ሰማዕኩ ኵሎ፤ ወእምኔሆሙ አእመርኩ ዘርኢኩ፤ ኢኮነ ለዛቲ ትውልድ አላ ለትውልድ ርሕቅት እንተ ትመጽእ።' },
          { number: 9, geezNumber: '፱', text: 'And behold! He cometh with ten thousands of His holy ones to execute judgment upon all, and to convict all the ungodly of all their deeds of ungodliness which they have ungodly committed.', geezText: 'ወናሁ መጽአ ምስለ አእላፍ ቅዱሳኑ ከመ ይግበር ፍርደ ላዕለ ኵሉ፤ ወከመ ይዝልፎሙ ለኵሎሙ ረሲዓን በእንተ ኵሉ ግብሮሙ ዘረሰዩ።' }
        ]
      },
      {
        number: 2,
        verses: [
          { number: 1, geezNumber: '፩', text: 'Observe ye everything that takes place in the heaven, how they do not change their orbits, and the luminaries which are in the heaven, how they all rise and set in order each in its season.', geezText: 'ተዐቀቡ ኵሎ ዘይከውን በሰማይ፤ ከመ ኢይዌልጡ ፍኖቶሙ ወብርሃናት እለ በሰማይ ከመ ይወፅኡ ወይዐርቡ በሥርዓት።' },
          { number: 2, geezNumber: '፪', text: 'Look at the earth, and give heed to the things which take place upon it from first to last, how steadfast they are, that none of the things upon earth change, but all the works of God appear to you.', geezText: 'ርእይዋ ለምድር ወተዐቀቡ ግብረ ዘይከውን ውስቴታ እምቀዳሚ እስከ ደኃሪ፤ ከመ ኢይትዌለጥ ወኵሉ ግብረ እግዚአብሔር ያስተርኢ።' }
        ]
      }
    ]
  },
  {
    id: 'exodus',
    number: 4,
    englishTitle: 'Exodus',
    geezTitle: 'ኦሪት ዘፀአት',
    transliteration: 'Orit Zäṣä’at',
    category: 'old_testament',
    categoryLabel: 'The Law (Torah/Orit)',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 40,
    description: 'The liberation of the children of Israel, the Passover, and the receiving of the Ten Commandments on Sinai.',
    synthesisNote: 'Shared in all canons. Revered in Ethiopia for the Tabot (Ark of the Covenant) sanctuary instructions in chapters 25-31.',
    sampleChapters: [
      {
        number: 20,
        verses: [
          { number: 1, geezNumber: '፩', text: 'And God spoke all these words, saying:', geezText: 'ወተናገረ እግዚአብሔር ኵሎ ዝንተ ቃላተ ወይቤ፡' },
          { number: 2, geezNumber: '፪', text: 'I am the Lord your God, who brought you out of the land of Egypt, out of the house of bondage.', geezText: 'አነ ውእቱ እግዚአብሔር አምላክከ ዘአውፃእኩከ እምድረ ግብጽ እምቤተ ቅኔ።' },
          { number: 3, geezNumber: '፫', text: 'You shall have no other gods before Me.', geezText: 'ኢይኩንከ ባዕድ አምላክ ዘእንበሌየ።' }
        ]
      }
    ]
  },
  {
    id: 'leviticus',
    number: 5,
    englishTitle: 'Leviticus',
    geezTitle: 'ኦሪት ዘሌዋውያን',
    transliteration: 'Orit Zälewayan',
    category: 'old_testament',
    categoryLabel: 'The Law (Torah/Orit)',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 27,
    description: 'Priesthood, sacrifices, holiness code, and dietary dietary laws mirrored in Ethiopian Christian practice.',
    synthesisNote: 'Informs Ethiopian Tewahedo fasting rules and sanctuary holiness traditions.',
    sampleChapters: [
      {
        number: 19,
        verses: [
          { number: 1, geezNumber: '፩', text: 'And the Lord spoke to Moses, saying, Speak to all the congregation of the children of Israel, and say to them: You shall be holy, for I the Lord your God am holy.', geezText: 'ወይቤሎ እግዚአብሔር ለሙሴ ንግሮሙ ለኵሉ ማኅበረ ደቂቀ እስራኤል ወበሎሙ፡ ቅዱሳነ ኩኑ እስመ ቅዱስ አነ እግዚአብሔር አምላክክሙ።' }
        ]
      }
    ]
  },
  {
    id: 'numbers',
    number: 6,
    englishTitle: 'Numbers',
    geezTitle: 'ኦሪት ዘኍልቍ',
    transliteration: 'Orit Zäḫwəlqw',
    category: 'old_testament',
    categoryLabel: 'The Law (Torah/Orit)',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 36,
    description: 'The census, wandering in the wilderness, and the Aaronic blessing.',
    synthesisNote: 'Shared in all biblical canons.',
    sampleChapters: [
      {
        number: 6,
        verses: [
          { number: 24, geezNumber: '፳፬', text: 'The Lord bless you and keep you;', geezText: 'ይባርክከ እግዚአብሔር ወየዕቅብከ፤' },
          { number: 25, geezNumber: '፳፭', text: 'The Lord make His face shine upon you, and be gracious to you;', geezText: 'ያብርህ እግዚአብሔር ገጾ ላዕሌከ ወይምሐርከ፤' },
          { number: 26, geezNumber: '፳፮', text: 'The Lord lift up His countenance upon you, and give you peace.', geezText: 'ያርእየከ እግዚአብሔር ገጾ ወይሃብከ ሰላመ።' }
        ]
      }
    ]
  },
  {
    id: 'deuteronomy',
    number: 7,
    englishTitle: 'Deuteronomy',
    geezTitle: 'ኦሪት ዘዳግም',
    transliteration: 'Orit Zädagəm',
    category: 'old_testament',
    categoryLabel: 'The Law (Torah/Orit)',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 34,
    description: 'The repetition of the Law, the Shema, and the passing of Moses.',
    synthesisNote: 'Final book of the Octateuch / Orit in Ethiopian reckoning.',
    sampleChapters: [
      {
        number: 6,
        verses: [
          { number: 4, geezNumber: '፬', text: 'Hear, O Israel: The Lord our God, the Lord is one!', geezText: 'ስማዕ እስራኤል እግዚአብሔር አምላክነ አሐዱ እግዚአብሔር ውእቱ።' }
        ]
      }
    ]
  },
  {
    id: 'joshua',
    number: 8,
    englishTitle: 'Joshua',
    geezTitle: 'መጽሐፈ ኢያሱ',
    transliteration: 'Mäṣḥafä Iyyasu',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 24,
    description: 'Conquest of Canaan, crossing the Jordan, and distribution of the land.',
    synthesisNote: 'Forms the eighth book of the Ethiopian Octateuch.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 9, geezNumber: '፱', text: 'Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the Lord your God is with you wherever you go.', geezText: 'ቦኑ ኢአዘዝኩከ ጽናዕ ወተበራዕ ኢትፍራህ ወኢትደንግጽ እስመ ምስሌከ ሀሎ እግዚአብሔር አምላክከ በኵለሄ ዘሖርከ።' }
        ]
      }
    ]
  },
  {
    id: 'judges',
    number: 9,
    englishTitle: 'Judges',
    geezTitle: 'መጽሐፈ መሳፍንት',
    transliteration: 'Mäṣḥafä Mäsafənt',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 21,
    description: 'The cycles of apostasy, oppression, and deliverance under charismatic leaders.',
    synthesisNote: 'Shared in all canons.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'Now after the death of Joshua it came to pass that the children of Israel inquired of the Lord.', geezText: 'ወእምድኅረ ሞተ ኢያሱ ተስእሉ ደቂቀ እስራኤል እግዚአብሔርን።' }] }]
  },
  {
    id: 'ruth',
    number: 10,
    englishTitle: 'Ruth',
    geezTitle: 'መጽሐፈ ሩት',
    transliteration: 'Mäṣḥafä Rut',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 4,
    description: 'The story of devotion, redemption, and the lineage of King David.',
    synthesisNote: 'Read as an ancestor of Christ through Mary.',
    sampleChapters: [{ number: 1, verses: [{ number: 16, geezNumber: '፲፮', text: 'Entreat me not to leave you, or to turn back from following after you: for wherever you go, I will go; and wherever you lodge, I will lodge; your people shall be my people, and your God my God.', geezText: 'ኢትስተብቍዒኒ ከመ እኅድግኪ ወእግብእ እምድኅሬኪ፤ ኀበ ሖርኪ አሐውር ወኀበ ኀደርኪ እኀድር፤ ሕዝብኪ ሕዝብየ ወአምላክኪ አምላክየ።' }] }]
  },
  {
    id: '1samuel',
    number: 11,
    englishTitle: '1 Samuel (1 Kings in Ge’ez)',
    geezTitle: 'መጽሐፈ ሳሙኤል ቀዳማዊ',
    transliteration: 'Mäṣḥafä Samu’él Qädamawi',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 31,
    description: 'The rise of Samuel the prophet, King Saul, and the anointing of David.',
    synthesisNote: 'Designated as 1 Kingdoms in Septuagint and Ge’ez tradition.',
    sampleChapters: [{ number: 3, verses: [{ number: 10, geezNumber: '፲', text: 'Now the Lord came and stood and called as at other times, "Samuel! Samuel!" And Samuel answered, "Speak, for Your servant hears."', geezText: 'ወመጽአ እግዚአብሔር ወቆመ ወጸውዖ ከመ ቀዳሚ ሳሙኤል ሳሙኤል፤ ወይቤ ሳሙኤል ተናገር እስመ ይሰምዕ ገብርከ።' }] }]
  },
  {
    id: '2samuel',
    number: 12,
    englishTitle: '2 Samuel (2 Kings in Ge’ez)',
    geezTitle: 'መጽሐፈ ሳሙኤል ካልዕ',
    transliteration: 'Mäṣḥafä Samu’él Kal’ə',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 24,
    description: 'The reign of King David over all Israel and the Davidic Covenant.',
    synthesisNote: 'Designated as 2 Kingdoms in Ge’ez tradition.',
    sampleChapters: [{ number: 7, verses: [{ number: 16, geezNumber: '፲፮', text: 'And your house and your kingdom shall be established forever before you. Your throne shall be established forever.', geezText: 'ወይትአመን ቤትከ ወመንግሥትከ እስከ ለዓለም በቅድሜየ፤ ወመንበርከኒ ይጸንዕ ለዓለም።' }] }]
  },
  {
    id: '1kings',
    number: 13,
    englishTitle: '1 Kings (3 Kings in Ge’ez)',
    geezTitle: 'መጽሐፈ ነገሥት ቀዳማዊ',
    transliteration: 'Mäṣḥafä Nägäśt Qädamawi',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 22,
    description: 'Solomon’s wisdom, the dedication of the Temple, and Elijah the prophet.',
    synthesisNote: 'Central to the Ethiopian Solomonic dynasty tradition (Kebra Nagast link).',
    sampleChapters: [{ number: 8, verses: [{ number: 27, geezNumber: '፳፯', text: 'But will God indeed dwell on the earth? Behold, heaven and the heaven of heavens cannot contain You. How much less this temple which I have built!', geezText: 'ቦኑ አማን ይነብር እግዚአብሔር በዲበ ምድር፤ ናሁ ሰማይ ወሰማየ ሰማያት ኢየአክሎትከ፤ አኮኑ ፈድፋደ ዝንቱ ቤት ዘሐነጽኩ።' }] }]
  },
  {
    id: '2kings',
    number: 14,
    englishTitle: '2 Kings (4 Kings in Ge’ez)',
    geezTitle: 'መጽሐፈ ነገሥት ካልዕ',
    transliteration: 'Mäṣḥafä Nägäśt Kal’ə',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 25,
    description: 'Elisha’s miracles, the fall of Samaria, and the Babylonian captivity.',
    synthesisNote: 'Shared in all canons.',
    sampleChapters: [{ number: 2, verses: [{ number: 11, geezNumber: '፲፩', text: 'Then it happened, as they continued on and talked, that suddenly a chariot of fire appeared with horses of fire, and separated the two of them; and Elijah went up by a whirlwind into heaven.', geezText: 'ወእንዘ የሐውሩ ወይትናገሩ ናሁ ሠረገላ እሳት ወአፍራስ እሳት ወፈለጠ ማዕከሎሙ፤ ወዐርገ ኤልያስ ውስተ ሰማይ በዐውሎ ነፋስ።' }] }]
  },
  {
    id: '1chronicles',
    number: 15,
    englishTitle: '1 Chronicles',
    geezTitle: 'መጽሐፈ ዜና መዋዕል ቀዳማዊ',
    transliteration: 'Mäṣḥafä Zena Mäwa’əl Qädamawi',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 29,
    description: 'Genealogies from Adam and David’s preparation for the sanctuary.',
    synthesisNote: 'Chronicles is titled "Annals of Days" in Ge’ez.',
    sampleChapters: [{ number: 16, verses: [{ number: 8, geezNumber: '፰', text: 'Oh, give thanks to the Lord! Call upon His name; make known His deeds among the peoples!', geezText: 'ገንዩ ለእግዚአብሔር ወጸውዑ ስሞ፤ ወንግሩ ውስተ አሕዛብ ግብሮ።' }] }]
  },
  {
    id: '2chronicles',
    number: 16,
    englishTitle: '2 Chronicles',
    geezTitle: 'መጽሐፈ ዜና መዋዕል ካልዕ',
    transliteration: 'Mäṣḥafä Zena Mäwa’əl Kal’ə',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 36,
    description: 'Kings of Judah, reforms of Hezekiah and Josiah, and Cyrus’s decree.',
    synthesisNote: 'Includes the Prayer of Manasseh in Ethiopian text.',
    sampleChapters: [{ number: 7, verses: [{ number: 14, geezNumber: '፲፬', text: 'If My people who are called by My name will humble themselves, and pray and seek My face, and turn from their wicked ways, then I will hear from heaven, and will forgive their sin and heal their land.', geezText: 'እመ ተዋረዱ ሕዝብየ እለ ተሰምዩ በስምየ ወጸለዩ ወኀሠሡ ገጽየ ወተመይጡ እምፍኖቶሙ እኪት፤ አነ እሰምዕ እምሰማይ ወእሠሪ ኃጢአቶሙ ወአሐይው ምድሮሙ።' }] }]
  },
  {
    id: 'ezra1',
    number: 17,
    englishTitle: 'Ezra (Ezra 1)',
    geezTitle: 'መጽሐፈ ዕዝራ ቀዳማዊ',
    transliteration: 'Mäṣḥafä ‘Ezra Qädamawi',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 10,
    description: 'Return of the exiles under Zerubbabel and Ezra, rebuilding the altar.',
    synthesisNote: 'Followed by Ezra Sutuel in Ethiopian order.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'In the first year of Cyrus king of Persia, that the word of the Lord by the mouth of Jeremiah might be fulfilled.', geezText: 'በቀዳሚ ዓመት ለቂሮስ ንጉሠ ፋርስ ከመ ይትፈጸም ቃለ እግዚአብሔር በአፈ ኤርምያስ።' }] }]
  },
  {
    id: 'ezra2_sutuel',
    number: 18,
    englishTitle: 'Ezra Sutuel (4 Ezra / Apocalypse of Ezra)',
    geezTitle: 'መጽሐፈ ዕዝራ ሱቱኤል (ካልዕ)',
    transliteration: 'Mäṣḥafä ‘Ezra Sutu’él',
    category: 'old_testament',
    categoryLabel: 'Prophetic & Apocalyptic',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: false },
    canonCategory: 'kjv_apocrypha_shared',
    chaptersCount: 16,
    description: 'Ezra mourns the fall of Jerusalem, receives 7 visions from Uriel the Archangel regarding the cosmic destiny of Israel and the Messiah.',
    synthesisNote: 'Present in KJV 1611 Apocrypha as 2 Esdras, but excluded in Protestant 1885. The Ethiopian text preserves the complete Ge’ez version without the Latin textual gaps.',
    sampleChapters: [{ number: 3, verses: [{ number: 1, geezNumber: '፩', text: 'In the thirtieth year after the ruin of the city, I, Salathiel (who is also Ezra), was in Babylon, and lay troubled upon my bed, and my thoughts came up over my heart.', geezText: 'በሠላሳ ዓመት እምድኅረ ተሐጕለት ሀገር፤ አነ ሰላቲኤል ዘውእቱ ዕዝራ ሀለውኩ ውስተ ባቢሎን፤ ወእንዘ ይደክም ሥጋየ በዲበ ምስካብየ ኀለዩ ሕሊናሁ ልብየ።' }] }]
  },
  {
    id: 'nehemiah',
    number: 19,
    englishTitle: 'Nehemiah',
    geezTitle: 'መጽሐፈ ነህምያ',
    transliteration: 'Mäṣḥafä Nähəmya',
    category: 'old_testament',
    categoryLabel: 'Historical',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 13,
    description: 'Rebuilding the walls of Jerusalem amidst opposition; covenant renewal.',
    synthesisNote: 'Counted together with Ezra in several ancient lists.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'The words of Nehemiah the son of Hachaliah.', geezText: 'ቃለ ነህምያ ወልደ ሐካልያ።' }] }]
  },
  {
    id: 'tobit',
    number: 20,
    englishTitle: 'Tobit',
    geezTitle: 'መጽሐፈ ጦቢት',
    transliteration: 'Mäṣḥafä Ṭobit',
    category: 'old_testament',
    categoryLabel: 'Wisdom & Edifying History',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: false },
    canonCategory: 'kjv_apocrypha_shared',
    chaptersCount: 14,
    description: 'The righteous exiled Tobit, his son Tobias, and the ministry of Archangel Raphael.',
    synthesisNote: 'Included in KJV 1611 Apocrypha. Removed from Protestant Bibles in 1885. Integral part of the Ethiopian OT.',
    sampleChapters: [{ number: 13, verses: [{ number: 1, geezNumber: '፩', text: 'Then Tobit wrote a prayer of rejoicing, and said: Blessed be God who lives forever, and blessed be His kingdom!', geezText: 'ወጸሐፈ ጦቢት ጸሎተ ተፈሥሖ ወይቤ፡ ቡሩክ እግዚአብሔር ዘይሔው ለዓለም ወቡሩክ መንግሥቱ።' }] }]
  },
  {
    id: 'judith',
    number: 21,
    englishTitle: 'Judith',
    geezTitle: 'መጽሐፈ ዮዲት',
    transliteration: 'Mäṣḥafä Yodit',
    category: 'old_testament',
    categoryLabel: 'Heroic Narrative',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: false },
    canonCategory: 'kjv_apocrypha_shared',
    chaptersCount: 16,
    description: 'Judith delivers the city of Bethulia from the Assyrian general Holofernes.',
    synthesisNote: 'Part of KJV 1611 Apocrypha; retained in Ethiopian canon as an inspired archetype of heroic faith.',
    sampleChapters: [{ number: 16, verses: [{ number: 1, geezNumber: '፩', text: 'Begin a song to my God with tambourines, sing to my Lord with cymbals; tune to Him a new psalm, exalt Him and call upon His name.', geezText: 'አኀዙ መዝሙረ ለአምላክየ በከበሮ፤ ወዘምሩ ለእግዚእየ በጸናጽል፤ ሰርዓ ሎቱ መዝሙረ ሐዲሰ ወአዕብይዎ ወጸውዑ ስሞ።' }] }]
  },
  {
    id: 'esther',
    number: 22,
    englishTitle: 'Esther (with Additions)',
    geezTitle: 'መጽሐፈ አስቴር',
    transliteration: 'Mäṣḥafä Astér',
    category: 'old_testament',
    categoryLabel: 'Historical & Deliverance',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 16,
    description: 'Queen Esther and Mordecai deliver Israel from Haman’s decree. Includes the prayer of Mordecai and Esther.',
    synthesisNote: 'The Ethiopian canon integrates the Greek additions directly within the narrative flow, which KJV 1611 detached into Apocrypha.',
    sampleChapters: [{ number: 4, verses: [{ number: 14, geezNumber: '፲፬', text: 'For if you remain completely silent at this time, relief and deliverance will arise for the Jews from another place, but who knows whether you have come to the kingdom for such a time as this?', geezText: 'እስመ እመ አርመምኪ በዛቲ ጊዜ፤ ረድኤት ወድኅነት ይወፅእ ለአይሁድ እምባዕድ መካን፤ ወመኑ የአምር ለእመ ኢኮነ በእንተ ዛቲ ጊዜ ዘበጻሕኪ ውስተ መንግሥት።' }] }]
  },
  // --- 1, 2, 3 MEQABYAN (ETHIOPIAN MACCABEES) ---
  {
    id: '1meqabyan',
    number: 23,
    englishTitle: '1 Meqabyan (First Ethiopian Maccabees)',
    geezTitle: 'መጽሐፈ መቃብያን ቀዳማዊ',
    transliteration: 'Mäṣḥafä Mäqabyan Qädamawi',
    category: 'old_testament',
    categoryLabel: 'Martyrdom & Faith Resistance',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 36,
    description: 'Unique to the Ethiopian Canon! Not the Greek Maccabees. Relates the martyrdom of Meqabis and his sons by the king of Moab/Media (Siru’ats / Antiochus) for keeping the law of God.',
    synthesisNote: 'Crucial distinction: Western scholars often confuse Ethiopian Meqabyan with 1-4 Maccabees in the Septuagint. Ethiopian Meqabyan is an independent Semitic composition found nowhere else in world Bibles.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'In the days when Siru’ats king of Media ruled, he made an idolatrous decree that all men should bow down to idols.', geezText: 'በመዋዕሊሁ ለሢሩአጽ ንጉሠ ሜዶን፤ አዘዘ ትእዛዘ ርኩስ ከመ ኵሉ ይሰግድ ለጣዖት።' },
          { number: 2, geezNumber: '፪', text: 'And Meqabis with his sons, who were zealous for the law of the God of their fathers, refused to worship the work of men’s hands.', geezText: 'ወመቃቢስ ምስለ ደቂቁ እለ ቀኑ ለሕጉ ለአምላከ አበዊሆሙ፤ አበዩ ሰጊደ ለግብረ እደ ሰብእ።' },
          { number: 3, geezNumber: '፫', text: 'They answered the king: "We serve the living God of heaven, and though our bodies be burned in the furnace, our souls belong to our Creator."', geezText: 'ወአውሥእዎ ለንጉሥ፡ ንሕነ ነመልኮ ለአምላከ ሰማይ ሕያው፤ ወእመኒ ተቃጸለ ሥጋነ በእቶነ እሳት፤ ነፍስነሰ ለፈጣሪነ ይእቲ።' }
        ]
      }
    ]
  },
  {
    id: '2meqabyan',
    number: 24,
    englishTitle: '2 Meqabyan (Second Ethiopian Maccabees)',
    geezTitle: 'መጽሐፈ መቃብያን ካልዕ',
    transliteration: 'Mäṣḥafä Mäqabyan Kal’ə',
    category: 'old_testament',
    categoryLabel: 'Theological Discourse on Sheol & Resurrection',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 21,
    description: 'Relates King Meqabis of Moab learning true righteousness and repentance, alongside profound theological discourses on the afterlife and resurrection.',
    synthesisNote: 'Completely unique to Ethiopia. Teaches the resurrection and recompense for the faithful who suffer for God’s commandments.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'And it came to pass that the righteous king sought understanding concerning the life of the soul and the day when God shall judge the living and the dead.', geezText: 'ወኮነ አመ ኀሠሠ ንጉሥ ጻድቅ አእምሮተ በእንተ ሕይወታ ለነፍስ ወበእንተ ዕለት አመ ይደይን እግዚአብሔር ሕያዋነ ወሙታነ።' },
          { number: 2, geezNumber: '፪', text: 'Blessed is the man who walks not in wickedness, for the Lord remembers every deed in the heavenly records.', geezText: 'ቡሩክ ብእሲ ዘኢሖረ በኀጢአት፤ እስመ እግዚአብሔር ይዜክር ኵሎ ግብረ ውስተ መጻሕፍተ ሰማይ።' }
        ]
      }
    ]
  },
  {
    id: '3meqabyan',
    number: 25,
    englishTitle: '3 Meqabyan (Third Ethiopian Maccabees)',
    geezTitle: 'መጽሐፈ መቃብያን ሣልስ',
    transliteration: 'Mäṣḥafä Mäqabyan Śaləs',
    category: 'old_testament',
    categoryLabel: 'Covenant Wisdom & Vigilance',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 10,
    description: 'A brief and potent wisdom treatise on salvation, repentance, Adam and Eve, and maintaining undefiled faith in trials.',
    synthesisNote: 'Forms the completion of the Ethiopian Maccabean trilogy.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'Hear now, O beloved, the words of instruction: that no one who repents with all his heart will be cast away from the presence of God.', geezText: 'ስምዑ እንከ ኦ ፍቁራን ቃለ ተግሣጽ፤ ከመ ኢይሰደድ እምቅድመ ገጹ ለእግዚአብሔር ኵሉ ዘነስሐ በኵሉ ልቡ።' }
        ]
      }
    ]
  },
  {
    id: 'job',
    number: 26,
    englishTitle: 'Job',
    geezTitle: 'መጽሐፈ ኢዮብ',
    transliteration: 'Mäṣḥafä Iyyob',
    category: 'old_testament',
    categoryLabel: 'Poetry & Wisdom',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 42,
    description: 'The suffering of the righteous, divine sovereignty, and redemption.',
    synthesisNote: 'Celebrated in Ethiopian hymnody for unwavering patience (Te’egəst).',
    sampleChapters: [{ number: 19, verses: [{ number: 25, geezNumber: '፳፭', text: 'For I know that my Redeemer lives, and He shall stand at last on the earth.', geezText: 'አእምር አነ ከመ ሕያው ውእቱ መድኅንየ፤ ወበደኃሪ ይቀውም በዲበ ምድር።' }] }]
  },
  {
    id: 'psalms',
    number: 27,
    englishTitle: 'Psalms (with Psalm 151)',
    geezTitle: 'መዝሙረ ዳዊት',
    transliteration: 'Mäzmura Dawit',
    category: 'old_testament',
    categoryLabel: 'Poetry & Prayer',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 151,
    description: 'The heartbeat of Ethiopian liturgical life; contains all 150 canonical Psalms plus Psalm 151 ("I was small among my brothers").',
    synthesisNote: 'Psalm 151 was confirmed in the Dead Sea Scrolls (11QPs_a) after Protestants had rejected it as uncanonical.',
    sampleChapters: [
      {
        number: 23,
        verses: [
          { number: 1, geezNumber: '፩', text: 'The Lord is my shepherd; I shall not want.', geezText: 'እግዚአብሔር ይርዕየኒ ወአልቦ ዘየኀጥአኒ።' },
          { number: 2, geezNumber: '፪', text: 'He makes me to lie down in green pastures; He leads me beside the still waters.', geezText: 'ውስተ ብሔር ሐመልሚል ህየ አኅደረኒ፤ ወኀበ ማየ ዕረፍት መርሐኒ።' },
          { number: 3, geezNumber: '፫', text: 'He restores my soul; He leads me in the paths of righteousness for His name’s sake.', geezText: 'ወአግብአ ነፍስየ፤ ወመርሐኒ ውስተ ፍኖተ ጽድቅ በእንተ ስሙ።' }
        ]
      },
      {
        number: 151,
        verses: [
          { number: 1, geezNumber: '፩', text: 'I was small among my brothers, and the youngest in my father’s house; I tended my father’s sheep.', geezText: 'ንዑስ አነ እምአኃውየ፤ ወወራዙት በቤተ አቡየ፤ ወእርዒ አባግዐ አቡየ።' },
          { number: 2, geezNumber: '፪', text: 'My hands made an instrument, and my fingers tuned the harp. And who shall declare it to my Lord? The Lord Himself hears me.', geezText: 'እደውየ ገብራ መዝሙረ፤ ወአጻብዕየ አሠነያ መሰንቆ። ወመኑ ይነግሮ ለእግዚእየ፤ እግዚአብሔር ውእቱ ይሰምዐኒ።' }
        ]
      }
    ]
  },
  {
    id: 'proverbs',
    number: 28,
    englishTitle: 'Proverbs (Messale)',
    geezTitle: 'መጽሐፈ ምሳሌ',
    transliteration: 'Mäṣḥafä Məsallé',
    category: 'old_testament',
    categoryLabel: 'Wisdom',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 31,
    description: 'Solomonic maxims on moral discipline, justice, and the fear of the Lord.',
    synthesisNote: 'In the Ethiopian canon, split into distinct books: Messale and Tegsats.',
    sampleChapters: [{ number: 3, verses: [{ number: 5, geezNumber: '፭', text: 'Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths.', geezText: 'ተወከል በእግዚአብሔር በኵሉ ልብከ ወኢትትአመን በልቦናከ፤ በኵሉ ፍኖትከ አእምሮ ወውእቱ ያቀንዕ ፍኖተከ።' }] }]
  },
  {
    id: 'tegsats',
    number: 29,
    englishTitle: 'Tegsats (Book of Admonition)',
    geezTitle: 'መጽሐፈ ተግሣጽ',
    transliteration: 'Mäṣḥafä Tägsaṣ',
    category: 'old_testament',
    categoryLabel: 'Wisdom',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 24,
    description: 'Moral instructions and reprimands traditionally gathered from Solomonic wisdom literature in Ge’ez reckoning.',
    synthesisNote: 'Counted as a standalone canonical book in the 81/88 Ethiopian count.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'Hear, my son, the instruction of your father, and forsake not the law of your mother.', geezText: 'ስማዕ ወልድየ ተግሣጸ አቡከ፤ ወኢትኅድግ ሕገ እምከ።' }] }]
  },
  {
    id: 'ecclesiastes',
    number: 30,
    englishTitle: 'Ecclesiastes',
    geezTitle: 'መጽሐፈ መክብብ',
    transliteration: 'Mäṣḥafä Mäkbəb',
    category: 'old_testament',
    categoryLabel: 'Wisdom',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 12,
    description: 'The vanity of earthly pursuits and the supreme duty to fear God.',
    synthesisNote: 'Shared across all canons.',
    sampleChapters: [{ number: 3, verses: [{ number: 1, geezNumber: '፩', text: 'To everything there is a season, a time for every purpose under heaven.', geezText: 'ለኵሉ ጊዜ ሎቱ፤ ወጊዜ ለኵሉ ግብር በመትሕተ ሰማይ።' }] }]
  },
  {
    id: 'songofsongs',
    number: 31,
    englishTitle: 'Song of Songs',
    geezTitle: 'መኃልየ መኃልይ ዘሰሎሞን',
    transliteration: 'Mäḥaləyä Mäḥaləy',
    category: 'old_testament',
    categoryLabel: 'Poetry & Allegory',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 8,
    description: 'The bridal song allegorically interpreted as the love between Christ and the Church / the Virgin Mary.',
    synthesisNote: 'Richly commented upon in the Ge’ez Andemta tradition.',
    sampleChapters: [{ number: 2, verses: [{ number: 1, geezNumber: '፩', text: 'I am the rose of Sharon, and the lily of the valleys.', geezText: 'አነ ጽጌ ረዳ ዘገዳም፤ ወዕምባባ ዘቈላ።' }] }]
  },
  {
    id: 'wisdom_of_solomon',
    number: 32,
    englishTitle: 'Wisdom of Solomon',
    geezTitle: 'ጥበበ ሰሎሞን',
    transliteration: 'Ṭəbäbä Sälomon',
    category: 'old_testament',
    categoryLabel: 'Wisdom & Eschatology',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: false },
    canonCategory: 'kjv_apocrypha_shared',
    chaptersCount: 19,
    description: 'Eulogy of Divine Wisdom, righteousness vs immortality of the wicked, and the messianic righteous sufferer.',
    synthesisNote: 'Included in KJV 1611 Apocrypha, deleted in 1885 Protestant Bibles. A foundational book for early Church Christology.',
    sampleChapters: [
      {
        number: 3,
        verses: [
          { number: 1, geezNumber: '፩', text: 'But the souls of the righteous are in the hand of God, and no torment will ever touch them.', geezText: 'ነፍሳተ ጻድቃንሰ በእደ እግዚአብሔር እማንቱ፤ ወኢይቀርቦን ኵሉ ጻዕር።' },
          { number: 2, geezNumber: '፪', text: 'In the eyes of the foolish they seemed to have died, and their departure was taken for misery, yet they are at peace.', geezText: 'በአዕይንተ አብዳን ይመስሉ ሙታነ፤ ወተኈለቀ ሞቶሙ ለሐሳር፤ ወእሙንቱሰ ሀለዉ በሰላም።' }
        ]
      }
    ]
  },
  {
    id: 'sirach',
    number: 33,
    englishTitle: 'Sirach (Ecclesiasticus)',
    geezTitle: 'መጽሐፈ ሲራክ',
    transliteration: 'Mäṣḥafä Sirak',
    category: 'old_testament',
    categoryLabel: 'Wisdom & Life Conduct',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: false },
    canonCategory: 'kjv_apocrypha_shared',
    chaptersCount: 51,
    description: 'Joshua son of Sirach’s monumental guide on ethical conduct, friendship, prayer, and praising the ancestors of faith.',
    synthesisNote: 'KJV 1611 kept Sirach in Apocrypha; 1885 Protestant Bible dropped it. Hebrew fragments discovered in Cairo Genizah and Masada proved Hebrew original.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'All wisdom comes from the Lord, and is with Him forever.', geezText: 'ኵላ ጥበብ እምኀበ እግዚአብሔር ይእቲ፤ ወምስሌሁ ሀለወት ለዓለም።' },
          { number: 14, geezNumber: '፲፬', text: 'The fear of the Lord is the beginning of wisdom; she was created with the faithful in the womb.', geezText: 'ቀዳሚሃ ለጥበብ ፈሪሃ እግዚአብሔር ውእቱ፤ ወምስለ ምእመናን ተፈጥረት ውስተ ማኅፀን።' }
        ]
      }
    ]
  },
  {
    id: 'isaiah',
    number: 34,
    englishTitle: 'Isaiah',
    geezTitle: 'ትንቢተ ኢሳይያስ',
    transliteration: 'Tənbitä Isayəyyas',
    category: 'old_testament',
    categoryLabel: 'Major Prophets',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 66,
    description: 'The Prince of Prophets; visions of the Holy One of Israel, the Virgin Birth (7:14), and the Suffering Servant (53).',
    synthesisNote: 'Quoted hundreds of times throughout Ethiopian liturgy and patristics.',
    sampleChapters: [
      {
        number: 9,
        verses: [
          { number: 6, geezNumber: '፮', text: 'For unto us a Child is born, unto us a Son is given; and the government will be upon His shoulder. And His name will be called Wonderful, Counselor, Mighty God, Everlasting Father, Prince of Peace.', geezText: 'እስመ ሕፃን ተወልደ ለነ ወወልድ ተውህበ ለነ፤ ወሥልጣኑ ዲበ መከየዱ፤ ወተሰምየ ስሙ መንክር መካር፤ አምላክ ኃያል፤ አበ ዘለዓለም፤ መልአከ ሰላም።' }
        ]
      }
    ]
  },
  {
    id: 'jeremiah',
    number: 35,
    englishTitle: 'Jeremiah',
    geezTitle: 'ትንቢተ ኤርምያስ',
    transliteration: 'Tənbitä Érməyas',
    category: 'old_testament',
    categoryLabel: 'Major Prophets',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 52,
    description: 'The weeping prophet; warning against hypocrisy, prophecy of the New Covenant written on hearts.',
    synthesisNote: 'In Ethiopian tradition, Jeremiah, Lamentations, Baruch, and 4 Baruch form a unified Jeremianic corpus.',
    sampleChapters: [{ number: 31, verses: [{ number: 33, geezNumber: '፴፫', text: 'I will put My law in their minds, and write it on their hearts; and I will be their God, and they shall be My people.', geezText: 'እሁብ ሕግየ ውስተ ልቦናሆሙ ወእጽሕፎ ውስተ ልቦሙ፤ ወእከውን አምላኮሙ ወእሙንቱሰ ይከውኑኒ ሕዝብየ።' }] }]
  },
  {
    id: 'lamentations',
    number: 36,
    englishTitle: 'Lamentations',
    geezTitle: 'ሰቆቃወ ኤርምያስ',
    transliteration: 'Säqoqawä Érməyas',
    category: 'old_testament',
    categoryLabel: 'Poetic Lament',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 5,
    description: 'Dirge over the fallen holy city of Zion and God’s enduring morning compassions.',
    synthesisNote: 'Chanted during Holy Week (Himamat) in Ethiopian Orthodox churches.',
    sampleChapters: [{ number: 3, verses: [{ number: 22, geezNumber: '፳፪', text: 'Through the Lord’s mercies we are not consumed, because His compassions fail not. They are new every morning; great is Your faithfulness.', geezText: 'ምሕረቱ ለእግዚአብሔር ዘኢይትኃለቅ፤ እስመ ኢየኃልቅ ሣህሉ፤ ሐዲስ ውእቱ በኵሉ ጽባሕ፤ ብዙኅ እሙንቱ ሃይማኖትከ።' }] }]
  },
  {
    id: 'baruch',
    number: 37,
    englishTitle: 'Baruch',
    geezTitle: 'መጽሐፈ ባሮክ',
    transliteration: 'Mäṣḥafä Barok',
    category: 'old_testament',
    categoryLabel: 'Prophetic',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: false },
    canonCategory: 'kjv_apocrypha_shared',
    chaptersCount: 5,
    description: 'Scribe Baruch’s prayer of exile, confession of sins, hymn to wisdom, and comfort for Jerusalem.',
    synthesisNote: 'Included in KJV 1611 Apocrypha, deleted in 1885 Protestant canon. Contains Baruch 3:37 ("Afterward He appeared on earth and dwelt with men").',
    sampleChapters: [{ number: 3, verses: [{ number: 37, geezNumber: '፴፯', text: 'Afterward He appeared upon earth, and conversed with men.', geezText: 'እምድኅረ ዝንቱ በምድር አስተርአየ፤ ወምስለ ሰብእ ተዛወረ።' }] }]
  },
  {
    id: '4baruch',
    number: 38,
    englishTitle: '4 Baruch (Paralipomena of Jeremiah / Tärefe Barok)',
    geezTitle: 'ተረፈ ባሮክ',
    transliteration: 'Täräfä Barok ("The Rest of Baruch")',
    category: 'old_testament',
    categoryLabel: 'Unique Prophetic Narrative',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 9,
    description: 'Exclusively canonical in Ethiopia! Relates the preservation of the temple vessels, Abimelech’s 66-year miraculous sleep under the fig tree, and Jeremiah’s martyrdom.',
    synthesisNote: 'A captivating apocalyptic narrative emphasizing the resurrection through fresh figs preserved through six decades of exile.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'It came to pass, when the children of Israel were led into captivity by the king of the Chaldeans, that God said unto Jeremiah: Jeremiah, My chosen one, arise and go forth with Baruch from this city.', geezText: 'ወኮነ አመ ተሰደዱ ደቂቀ እስራኤል በንጉሠ ከለዳውያን፤ ይቤሎ እግዚአብሔር ለኤርምያስ፡ ኤርምያስ ኅሩይየ ተንሥእ ወፃእ ምስለ ባሮክ እምዛቲ ሀገር።' },
          { number: 2, geezNumber: '፪', text: 'And Jeremiah wept, saying: Why dost Thou deliver Thy holy house into the hands of the Gentiles?', geezText: 'ወበከየ ኤርምያስ ወይቤ፡ ለምንት ትሜጥዎ ለቤትከ ቅዱስ ውስተ እደ አሕዛብ።' }
        ]
      }
    ]
  },
  {
    id: 'ezekiel',
    number: 39,
    englishTitle: 'Ezekiel',
    geezTitle: 'ትንቢተ ሕዝቅኤል',
    transliteration: 'Tənbitä Ḥəzqə’él',
    category: 'old_testament',
    categoryLabel: 'Major Prophets',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 48,
    description: 'The throne chariot (Merkavah), valley of dry bones resurrection, and the vision of the closed eastern gate.',
    synthesisNote: 'Ezekiel 44:2 is applied in Ethiopian Mariology to the perpetual virginity of St. Mary.',
    sampleChapters: [{ number: 37, verses: [{ number: 4, geezNumber: '፬', text: 'Again He said to me, "Prophesy to these bones, and say to them, ‘O dry bones, hear the word of the Lord!’"', geezText: 'ወይቤለኒ ተነበይ ላዕለ እሉ አዕፅምት ወበሎሙ፡ ኦ አዕፅምት የቡሳን ስምዑ ቃለ እግዚአብሔር።' }] }]
  },
  {
    id: 'daniel',
    number: 40,
    englishTitle: 'Daniel (with Susanna & Bel and Dragon)',
    geezTitle: 'ትንቢተ ዳንኤል',
    transliteration: 'Tənbitä Dan’él',
    category: 'old_testament',
    categoryLabel: 'Prophetic & Apocalyptic',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 14,
    description: 'The four empires, the Son of Man vision, the lions’ den, and the additions of Susanna and Bel and the Dragon.',
    synthesisNote: 'The Ethiopian text keeps Susanna and Bel as integrated parts of the prophet Daniel.',
    sampleChapters: [{ number: 7, verses: [{ number: 13, geezNumber: '፲፫', text: 'I was watching in the night visions, and behold, One like the Son of Man, coming with the clouds of heaven!', geezText: 'ርኢኩ በራእየ ሌሊት ወናሁ ከመ ወልደ እጓለ እመሕያው ይመጽእ በደመና ሰማይ።' }] }]
  },
  {
    id: 'minor_prophets_12',
    number: 41,
    englishTitle: 'The Twelve Minor Prophets (Hosea to Malachi)',
    geezTitle: 'ደቂቀ ነቢያት (ሆሴዕ - ሚልክያስ)',
    transliteration: 'Däqiqä Näbiyat',
    category: 'old_testament',
    categoryLabel: 'Prophets',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 67,
    description: 'Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, and Malachi.',
    synthesisNote: 'Universally accepted across all Christian canons.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'The word of the Lord that came to the prophets of Israel to turn the hearts of the people back to righteousness.', geezText: 'ቃለ እግዚአብሔር ዘመጽአ ኀበ ነቢያተ እስራኤል ከመ ይመይጡ ልበ ሕዝብ ውስተ ጽድቅ።' }] }]
  },
  {
    id: 'pseudo_josephus',
    number: 42,
    englishTitle: 'Zena Ayhud (History of the Jews / Josippon)',
    geezTitle: 'መጽሐፈ ዜና አይሁድ',
    transliteration: 'Mäṣḥafä Zena Ayhud',
    category: 'old_testament',
    categoryLabel: 'Second Temple History',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 32,
    description: 'The chronicle of the Second Temple, the Maccabean resistance, and the siege of Jerusalem attributed to Joseph ben Gorion (Josippon).',
    synthesisNote: 'Frequently included in the official 81-book lists of the Ethiopian Orthodox Tewahedo Church to bridge Old and New Testaments.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'Here begins the history of the house of Israel and the holy sanctuary in Jerusalem in the era of the Second Temple.', geezText: 'ናሁ ይትወጠን ዜና ቤተ እስራኤል ወመቅደስ ቅዱስ በኢየሩሳሌም በመዋዕለ ካልዕ መቅደስ።' }] }]
  },

  // --- NEW TESTAMENT (27 GOSPELS & EPISTLES) ---
  {
    id: 'matthew',
    number: 43,
    englishTitle: 'Gospel of Matthew',
    geezTitle: 'የማቴዎስ ወንጌል',
    transliteration: 'Wängelä Matéwos',
    category: 'new_testament',
    categoryLabel: 'Gospels',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 28,
    description: 'The Gospel of the Messiah King; the Sermon on the Mount, Kingdom parables, and the Great Commission.',
    synthesisNote: 'Part of the canonical Four Gospels in all traditions.',
    sampleChapters: [
      {
        number: 5,
        verses: [
          { number: 3, geezNumber: '፫', text: 'Blessed are the poor in spirit, for theirs is the kingdom of heaven.', geezText: 'ብፁዓን ነዳያነ መንፈስ እስመ ሎሙ ይእቲ መንግሥተ ሰማያት።' },
          { number: 4, geezNumber: '፬', text: 'Blessed are those who mourn, for they shall be comforted.', geezText: 'ብፁዓን ኅዙናን እስመ እሙንቱ ይትፌሥሑ።' },
          { number: 5, geezNumber: '፭', text: 'Blessed are the meek, for they shall inherit the earth.', geezText: 'ብፁዓን የዋሃን እስመ እሙንቱ ይወርስዋ ለምድር።' }
        ]
      }
    ]
  },
  {
    id: 'mark',
    number: 44,
    englishTitle: 'Gospel of Mark',
    geezTitle: 'የማርቆስ ወንጌል',
    transliteration: 'Wängelä Marqos',
    category: 'new_testament',
    categoryLabel: 'Gospels',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 16,
    description: 'The swift-moving testimony of the Servant-Son of God, the Cross, and Resurrection.',
    synthesisNote: 'St. Mark is the founder of the Alexandrian see with which Ethiopia shared hierarchical lineage.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'The beginning of the gospel of Jesus Christ, the Son of God.', geezText: 'ቀዳሜ ወንጌሉ ለኢየሱስ ክርስቶስ ወልደ እግዚአብሔር።' }] }]
  },
  {
    id: 'luke',
    number: 45,
    englishTitle: 'Gospel of Luke',
    geezTitle: 'የሉቃስ ወንጌል',
    transliteration: 'Wängelä Luqas',
    category: 'new_testament',
    categoryLabel: 'Gospels',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 24,
    description: 'The orderly account; the Magnificat of Mary, parables of mercy, and the journey to Jerusalem.',
    synthesisNote: 'Features richly in Ethiopian Marian and theological discourse.',
    sampleChapters: [{ number: 1, verses: [{ number: 46, geezNumber: '፵፮', text: 'And Mary said: "My soul magnifies the Lord, and my spirit has rejoiced in God my Savior."', geezText: 'ወትቤ ማርያም፡ ታዐብዮ ነፍስየ ለእግዚአብሔር፤ ወትትፌሣሕ መንፈስየ በአምላኪየ መድኅንየ።' }] }]
  },
  {
    id: 'john',
    number: 46,
    englishTitle: 'Gospel of John',
    geezTitle: 'የዮሐንስ ወንጌል',
    transliteration: 'Wängelä Yoḥannəs',
    category: 'new_testament',
    categoryLabel: 'Gospels',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 21,
    description: 'The spiritual Gospel; the eternal Logos made flesh, the seven signs, and the High Priestly prayer.',
    synthesisNote: 'The prologue of John (Qädamawi Qal) is chanted daily in morning Tewahedo services.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'In the beginning was the Word, and the Word was with God, and the Word was God.', geezText: 'በቀዳሚ ቃለ ነበረ፤ ውእቱ ቃል ኀበ እግዚአብሔር ነበረ፤ ወእግዚአብሔር ውእቱ ውእቱ ቃል።' },
          { number: 2, geezNumber: '፪', text: 'He was in the beginning with God.', geezText: 'ውእቱ በቀዳሚ ኀበ እግዚአብሔር ነበረ።' },
          { number: 3, geezNumber: '፫', text: 'All things were made through Him, and without Him nothing was made that was made.', geezText: 'ኵሉ በእዲሁ ኮነ፤ ወዘእንበሌሁሰ አልቦ ዘኮነ፤ ወኢምንትኒ ዘኮነ።' },
          { number: 14, geezNumber: '፲፬', text: 'And the Word became flesh and dwelt among us, and we beheld His glory, the glory as of the only begotten of the Father, full of grace and truth.', geezText: 'ውእቱ ቃል ሥጋ ኮነ ወኀደረ ላዕሌነ፤ ወርኢነ ስብሐቲሁ ከመ ስብሐተ አሐዱ ዋሕድ ለአቡሁ፤ ምሉዐ ጸጋ ወጽድቅ።' }
        ]
      }
    ]
  },
  {
    id: 'acts',
    number: 47,
    englishTitle: 'Acts of the Apostles',
    geezTitle: 'የሐዋርያት ሥራ',
    transliteration: 'Gəbrä Ḥawaryat',
    category: 'new_testament',
    categoryLabel: 'Apostolic History',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 28,
    description: 'Descent of the Holy Spirit, growth of the Church, and Philip baptizing the Ethiopian royal official (Acts 8:26-40).',
    synthesisNote: 'Acts 8 records Ethiopia’s foundational direct apostolic connection with Christianity via the Queen Candace treasurer.',
    sampleChapters: [{ number: 8, verses: [{ number: 30, geezNumber: '፴', text: 'So Philip ran to him, and heard him reading the prophet Isaiah, and said, "Do you understand what you are reading?"', geezText: 'ወሮጸ ፊልጶስ ወሰምዖ እንዘ ያነብብ ትንቢተ ኢሳይያስ ነቢይ፤ ወይቤሎ ቦኑ ተአምር ዘታነብብ።' }] }]
  },
  {
    id: 'romans',
    number: 48,
    englishTitle: 'Romans',
    geezTitle: 'ወደ ሮሜ ሰዎች',
    transliteration: 'Mäliktä Pawlos ḫabä Romé',
    category: 'new_testament',
    categoryLabel: 'Pauline Epistles',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 16,
    description: 'Justification by faith, grace reigning over sin, and the union of believers in the body of Christ.',
    synthesisNote: 'Universal in all canons.',
    sampleChapters: [{ number: 8, verses: [{ number: 38, geezNumber: '፴፰', text: 'For I am persuaded that neither death nor life, nor angels nor principalities, nor things present nor things to come, shall be able to separate us from the love of God.', geezText: 'እስመ ተአመንኩ ከመ አልቦ ሞት ወኢሕይወት ወኢመላእክት ወኢሥልጣናት ዘይክል ፈሊጦትነ እምፍቅረ እግዚአብሔር።' }] }]
  },
  {
    id: 'pauline_corpus',
    number: 49,
    englishTitle: 'Pauline Epistles (1 & 2 Cor, Gal, Eph, Phil, Col, Thess, Tim, Tit, Philem, Heb)',
    geezTitle: 'መልእክታተ ጳውሎስ (13 መልእክታት)',
    transliteration: 'Mäliktatä Pawlos',
    category: 'new_testament',
    categoryLabel: 'Pauline Epistles',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 71,
    description: 'The 13 canonical epistles of Paul instructing congregations on order, charity, resurrection, and pastoral stewardship.',
    synthesisNote: 'Always kept intact as 14 letters with Hebrews in Orthodox canon.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'Paul, an apostle of Jesus Christ by the will of God, to the saints who are faithful in Christ Jesus.', geezText: 'ጳውሎስ ሐዋርያሁ ለኢየሱስ ክርስቶስ በፈቃደ እግዚአብሔር ለቅዱሳን እለ በሃይማኖት በክርስቶስ ኢየሱስ።' }] }]
  },
  {
    id: 'catholic_epistles',
    number: 50,
    englishTitle: 'Catholic Epistles (James, 1 & 2 Peter, 1-3 John, Jude)',
    geezTitle: 'መልእክታት ሐዋርያት (ያዕቆብ፣ ጴጥሮስ፣ ዮሐንስ፣ ይሁዳ)',
    transliteration: 'Mäliktat Hawaryat',
    category: 'new_testament',
    categoryLabel: 'General Epistles',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 21,
    description: 'General epistles emphasizing active faith, suffering without fear, holy love, and contending for truth.',
    synthesisNote: 'Jude 1:14-15 quotes 1 Enoch 1:9 directly, establishing an apostolic endorsement of the Ethiopian canon.',
    sampleChapters: [{ number: 1, verses: [{ number: 14, geezNumber: '፲፬', text: 'Now Enoch, the seventh from Adam, prophesied about these men also, saying, "Behold, the Lord comes with ten thousands of His saints..."', geezText: 'ወተነበየ በእንተ እሉ ሄኖክኒ ሳብዕ እምአዳም እንዘ ይብል፡ ናሁ መጽአ እግዚአብሔር ምስለ አእላፍ ቅዱሳኑ።' }] }]
  },
  {
    id: 'revelation',
    number: 51,
    englishTitle: 'Revelation (Apocalypse of John)',
    geezTitle: 'የዮሐንስ ራእይ',
    transliteration: 'Ra’əyä Yoḥannəs',
    category: 'new_testament',
    categoryLabel: 'Apocalypse',
    canonStatus: { ethiopian: true, kjv1611: true, protestant1885: true },
    canonCategory: 'universal_core',
    chaptersCount: 22,
    description: 'Visions of the glorified Christ, the throne room, the Lamb who was slain, the New Jerusalem and the river of life.',
    synthesisNote: 'Accepted in all three modern canons.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 8, geezNumber: '፰', text: '"I am the Alpha and the Omega, the Beginning and the End," says the Lord, "who is and who was and who is to come, the Almighty."', geezText: 'አነ ውእቱ አልፋ ወዖ፤ ቀዳማዊ ወደኃሪ፤ ይብል እግዚአብሔር አምላክ፤ ዘሀሎ ወዘነበረ ወዘይመጽእ፤ ኃያል።' }
        ]
      },
      {
        number: 21,
        verses: [
          { number: 1, geezNumber: '፩', text: 'Now I saw a new heaven and a new earth, for the first heaven and the first earth had passed away.', geezText: 'ወርኢኩ ሰማየ ሐዲሰ ወምድረ ሐዲሰ፤ እስመ ሰማይ ቀዳማዊ ወምድር ቀዳሚት ኀለፉ።' },
          { number: 4, geezNumber: '፬', text: 'And God will wipe away every tear from their eyes; there shall be no more death, nor sorrow, nor crying. There shall be no more pain.', geezText: 'ወይደምስስ እግዚአብሔር ኵሎ አንብዐ እምአዕይንቲሆሙ፤ ወአልቦ ሞት እምይእዜ፤ ወኢኃዘን ወኢጽራሕ ወኢጻዕር።' }
        ]
      }
    ]
  },

  // --- BROADER CANON: CHURCH ORDERS & ECCLESIASTICAL WORKS (81-88 EXPANDED WORKS) ---
  {
    id: 'sinodos_serate_seyon',
    number: 52,
    englishTitle: 'Sinodos: Ser’atä Ṣeyon (Order of Zion)',
    geezTitle: 'መጽሐፈ ሲኖዶስ - ሥርዓተ ጽዮን',
    transliteration: 'Mäṣḥafä Sinodos: Śər‘atä Ṣeyon',
    category: 'broader_canon',
    categoryLabel: 'Broader Canon (Apostolic Sinodos)',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 30,
    description: 'The first division of the Ethiopian Sinodos, containing apostolic canons regarding episcopal appointments, deacons, liturgy, and ecclesiastical boundaries.',
    synthesisNote: 'The Sinodos forms part of the Ethiopian broader New Testament canon, preserving authentic post-apostolic governance.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'This is the order of the Holy Church established by the Apostles on Mount Zion for the guidance of all who minister before God.', geezText: 'ዝንቱ ውእቱ ሥርዓተ ቤተ ክርስቲያን ቅድስት ዘሠርዓ ሐዋርያት ውስተ ደብረ ጽዮን ለመምህራን እለ ይትለአኩ ቅድመ እግዚአብሔር።' },
          { number: 2, geezNumber: '፪', text: 'Let the bishops and priests maintain pure fellowship and walk in the fear of the Lord who bought them with His blood.', geezText: 'ይዕቀቡ ኤጲስ ቆጶሳት ወቀሳውስት ኅብረተ ንጹሐ ወየሐውሩ በፈሪሃ እግዚአብሔር ዘተሣየጦሙ በደሙ።' }
        ]
      }
    ]
  },
  {
    id: 'sinodos_teezaz',
    number: 53,
    englishTitle: 'Sinodos: Te’ezaz (Apostolic Commandments)',
    geezTitle: 'መጽሐፈ ሲኖዶስ - ትእዛዝ',
    transliteration: 'Mäṣḥafä Sinodos: Tə’əzaz',
    category: 'broader_canon',
    categoryLabel: 'Broader Canon (Apostolic Sinodos)',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 20,
    description: 'The commandments and precepts of the Apostles concerning the order of prayers, fasting schedules, and care for widows and orphans.',
    synthesisNote: 'Provides the legislative bedrock for Ethiopian monastic and parish discipline.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'These are the holy commandments delivered by the twelve apostles concerning fasting, prayer, and hospitality to strangers.', geezText: 'እሉ እማንቱ ትእዛዛት ቅዱሳት ዘአወፈዩ ዓሠርቱ ወክልኤቱ ሐዋርያት በእንተ ጾም ወጸሎት ወተወክፎ ነግድ።' }
        ]
      }
    ]
  },
  {
    id: 'sinodos_giezew',
    number: 54,
    englishTitle: 'Sinodos: Giezew (Canons of the Apostles)',
    geezTitle: 'መጽሐፈ ሲኖዶስ - ግዕዘው',
    transliteration: 'Mäṣḥafä Sinodos: Gə’əzäw',
    category: 'broader_canon',
    categoryLabel: 'Broader Canon (Apostolic Sinodos)',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 18,
    description: 'Third section of the Sinodos; liturgical protocols, baptismal formulas, and rites for receiving the catechumens.',
    synthesisNote: 'Reflects ancient early church practices before the Great Schism.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'Concerning the holy baptism and the laying on of hands: let everything be performed with reverence.', geezText: 'በእንተ ጥምቀት ቅድስት ወአንብሮ እድ፤ ኵሉ ይኩን በክብር ወበተዐቅቦ።' }] }]
  },
  {
    id: 'sinodos_abtilis',
    number: 55,
    englishTitle: 'Sinodos: Abtilis (The 81 Apostolic Canons)',
    geezTitle: 'መጽሐፈ ሲኖዶስ - አብጥሊስ',
    transliteration: 'Mäṣḥafä Sinodos: Abṭilis',
    category: 'broader_canon',
    categoryLabel: 'Broader Canon (Apostolic Sinodos)',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 81,
    description: 'The venerable 81 Canons attributed to the Apostles transmitted through Clement of Rome.',
    synthesisNote: 'Explicitly defines the Ethiopian canon numbering tradition of 81 works.',
    sampleChapters: [{ number: 81, verses: [{ number: 1, geezNumber: '፩', text: 'Let these canons be binding upon all clergy, that the unity of Christ’s body be preserved across generations.', geezText: 'ይጽንዑ እሉ አብጥሊሳት ዲበ ኵሎሙ ካህናት ከመ ተዕቀብ አሐቲ ሥጋ ክርስቶስ ለትውልደ ትውልድ።' }] }]
  },
  {
    id: 'clement1',
    number: 56,
    englishTitle: '1 Clement (Qäləmänṭos Part 1)',
    geezTitle: 'መጽሐፈ ቀሌምንጦስ ቀዳማዊ',
    transliteration: 'Mäṣḥafä Qäləmänṭos Qädamawi',
    category: 'broader_canon',
    categoryLabel: 'Broader Canon (Clementine Works)',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 25,
    description: 'Clement’s apostolic discourses with Peter regarding secrets revealed to him by Christ concerning the cosmos and end times.',
    synthesisNote: 'Part of the Broader Canon of the New Testament recognized in traditional Ethiopian church manuscripts.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'Peter taught Clement his disciple saying: Keep these mysteries in your heart and write them for the faithful.', geezText: 'ጴጥሮስ መሀሮ ለቀሌምንጦስ ረድኡ እንዘ ይብል፡ ዕቀብ እሉ ኅቡዓተ ውስተ ልብከ ወጽሐፎሙ ለምእመናን።' }] }]
  },
  {
    id: 'clement2',
    number: 57,
    englishTitle: '2 Clement (Qäləmänṭos Part 2)',
    geezTitle: 'መጽሐፈ ቀሌምንጦስ ካልዕ',
    transliteration: 'Mäṣḥafä Qäləmänṭos Kal’ə',
    category: 'broader_canon',
    categoryLabel: 'Broader Canon (Clementine Works)',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 20,
    description: 'Continuation of Clement’s testament on church discipline, spiritual warfare, and keeping the soul spotless.',
    synthesisNote: 'Deepens the Petrine apostolic tradition treasured in Ethiopia.',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'The Lord said: Be vigilant at all times, for you know not the hour when the Bridegroom shall call.', geezText: 'ይቤ እግዚእ፡ ንቁ በኵሉ ጊዜ፤ እስመ ኢተአምሩ ሰዓተ አመ ይጼውዕ መርዓዊ።' }] }]
  },
  {
    id: 'book_of_covenant_1',
    number: 58,
    englishTitle: 'Book of the Covenant 1 (Mäṣḥafä Kidan 1)',
    geezTitle: 'መጽሐፈ ኪዳን ቀዳማዊ',
    transliteration: 'Mäṣḥafä Kidan Qädamawi',
    category: 'broader_canon',
    categoryLabel: 'Broader Canon (Testamentum Domini)',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 30,
    description: 'The post-resurrection discourse of Jesus Christ to His disciples instructing them on Church structure, holy communion, and eschatology.',
    synthesisNote: 'Equivalent to the ancient Testamentum Domini Nostri Jesu Christi; canonical in the Ethiopian broader NT.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'After His resurrection from the dead, our Lord and Savior Jesus Christ appeared unto His holy disciples and opened their minds to understand the heavenly covenant.', geezText: 'እምድኅረ ተንሥአ እምሙታን እግዚእነ ወመድኃኒነ ኢየሱስ ክርስቶስ አስተርአየ ለሐዋርያቲሁ ቅዱሳን ወከሠተ ልቦናሆሙ ከመ ያእምሩ ኪዳነ ሰማይ።' },
          { number: 2, geezNumber: '፪', text: 'He said unto them: "Peace be unto you! Teach the nations to observe all that I have commanded you."', geezText: 'ወይቤሎሙ፡ ሰላም ለክሙ፤ መሀሩ አሕዛበ ከመ ይዕቀቡ ኵሎ ዘአዘዝኩክሙ።' }
        ]
      }
    ]
  },
  {
    id: 'book_of_covenant_2',
    number: 59,
    englishTitle: 'Book of the Covenant 2 (Mäṣḥafä Kidan 2)',
    geezTitle: 'መጽሐፈ ኪዳን ካልዕ',
    transliteration: 'Mäṣḥafä Kidan Kal’ə',
    category: 'broader_canon',
    categoryLabel: 'Broader Canon (Testamentum Domini)',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 20,
    description: 'Detailed instructions from the resurrected Christ regarding prayers, church hours, the eucharistic liturgy, and the sign of the cross.',
    synthesisNote: 'The liturgical foundation for Ethiopian Orthodox Qeddase (Anaphoras).',
    sampleChapters: [{ number: 1, verses: [{ number: 1, geezNumber: '፩', text: 'Let the priest approach the altar with clean hands and humble heart, offering the sacrifice of thanksgiving in truth.', geezText: 'ይቅረብ ካህን ኀበ ምሥዋዕ በእደው ንጹሕ ወበልብ ትሑት፤ እንዘ ያቀርብ መሥዋዕተ አኰቴት በጽድቅ።' }] }]
  },
  {
    id: 'didascalia',
    number: 60,
    englishTitle: 'Ethiopian Didascalia (Didesqəlya)',
    geezTitle: 'መጽሐፈ ዲድስቅልያ',
    transliteration: 'Mäṣḥafä Didəsəqəlya',
    category: 'broader_canon',
    categoryLabel: 'Broader Canon (Apostolic Didascalia)',
    canonStatus: { ethiopian: true, kjv1611: false, protestant1885: false },
    canonCategory: 'ethiopian_exclusive',
    chaptersCount: 43,
    description: 'The Apostolic Didascalia; ethical and canonical treatise on church life, family relations, fasting, honoring bishops, and celebrating the Resurrection.',
    synthesisNote: 'While Western churches relegated Didascalia to historical patristics, the Ethiopian Church retains it in the broader scriptural canon as living guidance.',
    sampleChapters: [
      {
        number: 1,
        verses: [
          { number: 1, geezNumber: '፩', text: 'The twelve apostles of our Lord Jesus Christ gathered together in Jerusalem and wrote this holy teaching for all who believe in the name of the Father, and of the Son, and of the Holy Spirit.', geezText: 'ዓሠርቱ ወክልኤቱ ሐዋርያቲሁ ለእግዚእነ ኢየሱስ ክርስቶስ ተጋብኡ ውስተ ኢየሩሳሌም ወጸሐፉ ዛተ ትምህርተ ቅድስት ለኵሎሙ እለ አምኑ በስመ አብ ወወልድ ወመንፈስ ቅዱስ።' },
          { number: 2, geezNumber: '፪', text: 'Walk in love as Christ loved us, doing good to all men and eschewing every evil way.', geezText: 'ሑሩ በፍቅር በከመ ክርስቶስ አፍቀረነ፤ እንዘ ትገብሩ ሠናየ ለኵሉ ሰብእ ወትርሕቁ እምኵሉ ፍኖተ እከይ።' }
        ]
      }
    ]
  }
];

// Helper synthesis metrics for dashboard
export const CANON_METRICS = {
  ethiopianTotal: 88,
  ethiopianOfficial81: 81,
  kjv1611Total: 80,
  kjvApocryphaCount: 14,
  protestant1885Total: 66,
  ethiopianExclusiveCount: 22, // Enoch, Jubilees, 1-3 Meqabyan, 4 Baruch, Zena Ayhud, Sinodos (4), Clement (2), Book of Covenant (2), Didascalia, etc.
  sharedApocryphaCount: 14 // Tobit, Judith, Wisdom, Sirach, Baruch, 1-2 Esdras, etc.
};

export const CANON_SYNTHESIS_INSIGHTS = [
  {
    title: 'The Dead Sea Scrolls Vindication (Qumran 1947)',
    summary: 'Protestant reformers in the 16th-19th centuries excluded 1 Enoch and Jubilees as "late fabrications". However, in 1947, cave discoveries in Qumran revealed Hebrew and Aramaic fragments of both books dating between 300 BC and 100 AD. The Ethiopian Church was the sole custodian of these complete texts for over 1,500 years.',
    tag: 'Archaeology & Preservation',
    canonImpact: 'Ethiopian 88 Canon preservation proved historically authentic.'
  },
  {
    title: 'The Meqabyan Mystery: Ethiopian vs Greek Maccabees',
    summary: 'Most Western scholars assume "Maccabees" always means the Greek historical revolt against Antiochus IV Epiphanes (1-4 Maccabees in the Septuagint & KJV Apocrypha). In contrast, the Ethiopian 1, 2, and 3 Meqabyan are independent Semitic works telling the martyrdom of Meqabis under King Siru’ats—retaining a unique indigenous theological message.',
    tag: 'Distinct Identity',
    canonImpact: 'Completely unique to Ethiopia; absent from all other world canons.'
  },
  {
    title: 'The 1885 British Bible Society Purge',
    summary: 'While King James Version 1611 included 80 books (66 proto-canonical + 14 Apocrypha), in 1885 the British and Foreign Bible Society permanently stripped the 14 books to cut printing costs and accommodate Puritan pushback. This created the modern 66-book standard, disconnecting Western readers from 2,000 years of church history.',
    tag: 'Historical Modification',
    canonImpact: 'Reduced Protestant canon from 80 to 66 books.'
  },
  {
    title: 'The Broader Canon: Living Apostolic Orders',
    summary: 'The Ethiopian Church differentiates between the Narrower Canon (81 books) and Broader Canon (88 works). Works like the Sinodos (Canons of Zion), Didascalia, and Book of the Covenant (Meshafe Kidan) represent post-resurrection apostolic legislation kept as active inspired guides for community life.',
    tag: 'Living Tradition',
    canonImpact: 'Preserves early church constitutional orders in scripture.'
  }
];
