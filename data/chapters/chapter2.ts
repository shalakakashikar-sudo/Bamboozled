import { Chapter } from '../../types';

export const chapter2: Chapter = {
  id: 2,
  title: "Verb Forms Mastery",
  parts: [
    { type: 'heading', title: "2.1 Understanding the Three Verb Forms" },
    { 
      type: 'text', 
      content: "The foundation of passive voice is using the correct form of verbs. Every verb has three main forms:" 
    },
    {
      type: 'list',
      items: [
        "V1 - BASE FORM (Infinitive): Used with Simple Present, Simple Future, and Modals. Examples: write, speak, eat, go, make, do.",
        "V2 - PAST TENSE FORM: Used with Simple Past. Examples: wrote, spoke, ate, went, made, did.",
        "V3 - PAST PARTICIPLE: Used with Perfect tenses and ALL passive voice constructions. Examples: written, spoken, eaten, gone, made, done."
      ]
    },
    {
      type: 'tip',
      title: "MoMo's Golden Rule",
      content: "⚠️ CRITICAL RULE: Passive voice ALWAYS uses V3 (Past Participle), never V2!"
    },

    { type: 'heading', title: "2.2 Common Irregular Verbs (Essential List)" },
    {
      type: 'table',
      headers: ["V1 (Base)", "V2 (Past)", "V3 (Past Participle)"],
      rows: [
        ["be", "was/were", "been"],
        ["have", "had", "had"],
        ["do", "did", "done"],
        ["go", "went", "gone"],
        ["come", "came", "come"],
        ["see", "saw", "seen"],
        ["take", "took", "taken"],
        ["give", "gave", "given"],
        ["make", "made", "made"],
        ["know", "knew", "known"],
        ["think", "thought", "thought"],
        ["get", "got", "gotten/got"],
        ["write", "wrote", "written"],
        ["speak", "spoke", "spoken"],
        ["break", "broke", "broken"],
        ["choose", "chose", "chosen"],
        ["drive", "drove", "driven"],
        ["eat", "ate", "eaten"],
        ["fall", "fell", "fallen"],
        ["fly", "flew", "flown"],
        ["forget", "forgot", "forgotten"],
        ["grow", "grew", "grown"],
        ["hide", "hid", "hidden"],
        ["ride", "rode", "ridden"],
        ["rise", "rose", "risen"],
        ["sing", "sang", "sung"],
        ["swim", "swam", "swum"],
        ["throw", "threw", "thrown"],
        ["wear", "wore", "worn"],
        ["begin", "began", "begun"],
        ["drink", "drank", "drunk"],
        ["ring", "rang", "rung"],
        ["run", "ran", "run"],
        ["bring", "brought", "brought"],
        ["buy", "bought", "bought"],
        ["catch", "caught", "caught"],
        ["fight", "fought", "fought"],
        ["teach", "taught", "taught"],
        ["build", "built", "built"],
        ["send", "sent", "sent"],
        ["spend", "spent", "spent"],
        ["lend", "lent", "lent"],
        ["feel", "felt", "felt"],
        ["keep", "kept", "kept"],
        ["sleep", "slept", "slept"],
        ["leave", "left", "left"],
        ["meet", "met", "met"],
        ["lose", "lost", "lost"],
        ["sell", "sold", "sold"],
        ["tell", "told", "told"],
        ["find", "found", "found"],
        ["win", "won", "won"],
        ["hold", "held", "held"],
        ["say", "said", "said"],
        ["pay", "paid", "paid"],
        ["stand", "stood", "stood"],
        ["understand", "understood", "understood"],
        ["sit", "sat", "sat"],
        ["become", "became", "become"],
        ["cut", "cut", "cut"],
        ["put", "put", "put"],
        ["shut", "shut", "shut"],
        ["let", "let", "let"],
        ["hit", "hit", "hit"],
        ["hurt", "hurt", "hurt"],
        ["cost", "cost", "cost"],
        ["read", "read", "read"]
      ]
    },

    { type: 'heading', title: "2.3 Common Mistakes with Verb Forms" },
    {
      type: 'mistake',
      title: "Error: Using V2 instead of V3",
      passive: "The letter was wrote by me.",
      active: "The letter was written by me."
    },
    {
      type: 'mistake',
      title: "Error: Irregular V2 instead of V3",
      passive: "The window was broke.",
      active: "The window was broken."
    },
    {
      type: 'mistake',
      title: "Error: Incorrect Perfect Passive",
      passive: "The car had been drove.",
      active: "The car had been driven."
    },
    {
      type: 'mistake',
      title: "Error: Using V1 instead of V3",
      passive: "The door is close.",
      active: "The door is closed."
    },
    {
      type: 'mistake',
      title: "Error: Missing V3 in Future Passive",
      passive: "The building will be construct.",
      active: "The building will be constructed."
    },

    { type: 'heading', title: "2.4 PRO TIPS for Mastering Verb Forms" },
    {
      type: 'list',
      items: [
        "TIP 1: Create flashcards with V1, V2, V3 for irregular verbs.",
        "TIP 2: Practice writing sentences using each form.",
        "TIP 3: When in doubt, check if V2 and V3 are the same or different (e.g., 'made' vs 'written').",
        "TIP 4: Learn verbs in groups with similar patterns (sing-sang-sung, ring-rang-rung).",
        "TIP 5: Always use a dictionary to verify irregular forms."
      ]
    }
  ]
};