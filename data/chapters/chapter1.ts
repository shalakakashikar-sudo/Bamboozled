
import { Chapter } from '../../types';

export const chapter1: Chapter = {
  id: 1,
  title: "Understanding Voice: The Foundation",
  parts: [
    { type: 'heading', title: "1.1 What is Voice in Grammar?" },
    { 
      type: 'text', 
      content: "Voice is a grammatical category that shows the relationship between the subject of a sentence and the action expressed by the verb. It tells us whether the subject is performing the action or receiving it." 
    },
    
    { type: 'heading', title: "1. Active Voice Highlights" },
    {
      type: 'list',
      items: [
        "The subject performs the action.",
        "The focus is on WHO does the action.",
        "Direct and straightforward.",
        "More common in everyday speech."
      ]
    },
    { type: 'formula', title: "Active Formula", content: "Subject + Verb + Object" },
    {
      type: 'list',
      title: "Active Examples",
      items: [
        "The teacher explains the lesson.",
        "Shakespeare wrote Hamlet.",
        "I am reading a book.",
        "They will complete the project."
      ]
    },

    { type: 'heading', title: "2. Passive Voice Highlights" },
    {
      type: 'list',
      items: [
        "The subject receives the action.",
        "The focus is on WHAT happens or WHO/WHAT receives the action.",
        "More formal and indirect.",
        "Common in academic and scientific writing."
      ]
    },
    { type: 'formula', title: "Passive Formula", content: "Object (becomes Subject) + be + Past Participle (V3) + by + Subject (becomes Agent)" },
    {
      type: 'list',
      title: "Passive Examples",
      items: [
        "The lesson is explained by the teacher.",
        "Hamlet was written by Shakespeare.",
        "A book is being read by me.",
        "The project will be completed by them."
      ]
    },

    { type: 'heading', title: "1.2 Why Do We Use Passive Voice?" },
    {
      type: 'situation',
      title: "Situation 1: The Agent (Doer) is Unknown",
      description: "When we don't know who performed the action.",
      content: "✓ My wallet was stolen. (Unknown culprit) \n✓ The window has been broken. (Unknown culprit) \n✓ The files were deleted. (Unknown person)"
    },
    {
      type: 'situation',
      title: "Situation 2: The Agent is Unimportant or Obvious",
      description: "When the doer doesn't add value to the sentence.",
      content: "✓ Rice is grown in India. \n✓ English is spoken all over the world. \n✓ The criminal was arrested. (Obviously by police) \n✓ The patient was operated on. (Obviously by a surgeon)"
    },
    {
      type: 'situation',
      title: "Situation 3: Emphasizing the Action or Receiver",
      description: "When we want to highlight what happened, not who did it.",
      content: "✓ The Taj Mahal was built in 1653. \n✓ The results have been announced. \n✓ A cure for the disease was discovered."
    },
    {
      type: 'situation',
      title: "Situation 4: Formal, Academic, or Scientific Writing",
      description: "Maintaining objectivity and formality.",
      content: "✓ The experiment was conducted under controlled conditions. \n✓ The samples were analyzed using spectroscopy. \n✓ Three hypotheses were tested. \n✓ The data were collected over six months."
    },
    {
      type: 'situation',
      title: "Situation 5: Avoiding Blame or Responsibility",
      description: "Being diplomatic or tactful.",
      content: "✓ A mistake was made. (Instead of 'You made a mistake') \n✓ The deadline was missed. (Instead of 'We missed the deadline') \n✓ The order was cancelled. (Instead of 'They cancelled the order')"
    },
    {
      type: 'situation',
      title: "Situation 6: News Reporting",
      description: "Reporting events objectively.",
      content: "✓ The bank was robbed yesterday. \n✓ Five people were injured in the accident. \n✓ The new policy has been approved."
    },

    { type: 'heading', title: "1.3 Understanding the Basic Formula Breakdown" },
    {
      type: 'comparison',
      title: "Example 1: The Cat & Mouse",
      active: "The cat (Subject) chased (Verb) the mouse (Object).",
      passive: "The mouse (New Subject) was (be) chased (V3) by (connector) the cat (Agent)."
    },
    {
      type: 'comparison',
      title: "Example 2: Writing Letters",
      active: "She (Subject) writes (Verb) letters (Object).",
      passive: "Letters (New Subject) are (be) written (V3) by (connector) her (Agent)."
    },
    {
      type: 'comparison',
      title: "Example 3: Building a House",
      active: "They (Subject) are building (Verb) a house (Object).",
      passive: "A house (New Subject) is being (be) built (V3) by (connector) them (Agent)."
    },

    { type: 'heading', title: "1.4 Key Terms You MUST Know" },
    {
      type: 'list',
      title: "Core Definitions",
      items: [
        "SUBJECT: The person/thing performing the action in active. Becomes 'Agent' in passive.",
        "OBJECT: The person/thing receiving the action in active. Becomes the 'New Subject' in passive.",
        "AGENT: The original doer in passive, usually introduced by 'by'. Can be omitted if unknown.",
        "TRANSITIVE: Verbs that take an object (write, eat). Can be changed to passive.",
        "INTRANSITIVE: Verbs with no object (sleep, arrive). CANNOT be changed to passive.",
        "TENSE: The time of action. Determines the auxiliary verb."
      ]
    },
    {
      type: 'list',
      title: "Auxiliary Verbs (The Helpers)",
      items: [
        "Forms of BE: am, is, are, was, were, been, being",
        "Forms of HAVE: have, has, had",
        "MODALS: will, shall, would, should, can, could, may, might, must"
      ]
    },
    {
      type: 'list',
      title: "The Three Verb Forms (The Foundation)",
      items: [
        "V1 (Base Form): write, eat, go, make",
        "V2 (Past Tense): wrote, ate, went, made",
        "V3 (Past Participle): written, eaten, gone, made",
        "CRITICAL: ALWAYS use V3 in passive voice!"
      ]
    }
  ]
};
