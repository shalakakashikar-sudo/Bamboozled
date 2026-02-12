
import { Chapter } from '../../types';

export const chapter6: Chapter = {
  id: 6,
  title: "Complex and Advanced Patterns",
  parts: [
    { type: 'heading', title: "6.1 REPORTING VERBS (Impersonal Constructions)" },
    { 
      type: 'text', 
      content: "Reporting verbs allow us to share information without naming a specific speaker. Common verbs include: say, believe, think, know, report, expect, consider, suppose, and allege." 
    },
    
    { 
      type: 'comparison', 
      title: "The Two Passive Structures", 
      active: "Structure 1: It + be + V3 + that + clause (Impersonal 'It')", 
      passive: "Structure 2: Subject + be + V3 + to + infinitive (Personal Subject)" 
    },

    { 
      type: 'example', 
      title: "SAY", 
      active: "People say that he is very rich.", 
      passive: "1. It is said that he is very rich.\n2. He is said to be very rich." 
    },
    { 
      type: 'example', 
      title: "BELIEVE", 
      active: "They believe that she is honest.", 
      passive: "1. It is believed that she is honest.\n2. She is believed to be honest." 
    },
    { 
      type: 'example', 
      title: "KNOW", 
      active: "Everyone knows that honesty is the best policy.", 
      passive: "1. It is known that honesty is the best policy.\n2. Honesty is known to be the best policy." 
    },
    { 
      type: 'example', 
      title: "EXPECT", 
      active: "They expect that prices will rise.", 
      passive: "1. It is expected that prices will rise.\n2. Prices are expected to rise." 
    },
    { 
      type: 'example', 
      title: "REPORT", 
      active: "They report that the criminal has escaped.", 
      passive: "1. It is reported that the criminal has escaped.\n2. The criminal is reported to have escaped." 
    },

    { 
      type: 'tip', 
      title: "Shoot's Usage Guide", 
      content: "Structure 1 (It is said...) is common in news reporting and academic writing to maintain total distance. Structure 2 (He is said...) is more concise and puts the person being talked about as the subject." 
    },

    { type: 'heading', title: "6.2 INFINITIVES IN PASSIVE VOICE" },
    { type: 'formula', title: "Infinitive Formula", content: "Active Infinitive: to + V1\nPassive Infinitive: to be + V3" },
    { type: 'text', title: "Advanced Usage with NEED, REQUIRE, WANT", content: "Used when something is necessary or required to be done." },
    { type: 'example', active: "This document needs to sign.", passive: "This document needs to be signed." },
    { type: 'example', active: "The house requires to paint.", passive: "The house requires to be painted." },
    { type: 'example', active: "The car wants to wash.", passive: "The car wants to be washed." },
    { type: 'example', active: "The problem needs to solve.", passive: "The problem needs to be solved." },
    { type: 'example', active: "These clothes need to iron.", passive: "These clothes need to be ironed." },

    { type: 'heading', title: "6.3 CAUSATIVE STRUCTURES" },
    { type: 'text', title: "Have/Get Something Done", content: "Causative structures show that someone arranges for another person to do something for them." },
    { type: 'formula', title: "Causative Formula", content: "have + object + V3\nOR\nget + object + V3" },
    
    { type: 'list', title: "Examples with HAVE (Formal & Neutral)", items: [
      "The mechanic serviced my car. → I had my car serviced.",
      "A photographer took our pictures. → We had our pictures taken.",
      "The tailor altered my dress. → I had my dress altered.",
      "The dentist extracted her tooth. → She had her tooth extracted.",
      "The barber cut his hair. → He had his hair cut."
    ]},

    { type: 'list', title: "Examples with GET (Informal & Effort)", items: [
      "The mechanic fixed the brakes. → I got the brakes fixed.",
      "Someone painted the house. → They got the house painted."
    ]},

    { type: 'tip', title: "Formal vs Informal", content: "HAVE is neutral and used for standard services. GET is more common in speech and sometimes suggests that it was difficult to arrange the task." },

    { type: 'heading', title: "6.4 VERBS OF PERCEPTION" },
    { type: 'text', content: "Used with verbs like: See, Hear, Watch, Feel, Notice." },
    { type: 'formula', title: "Perception Passive Formula", content: "Active: Subject + see/hear/watch + Object + V1\nPassive: Object + was seen/heard/watched + to + V1" },
    
    { type: 'tip', title: "Shoot's Invisible 'To'", content: "⚠️ CRITICAL RULE: Even though 'to' is missing in the active form (e.g., 'I saw him open...'), you MUST add it in the passive form ('He was seen to open...')." },
    
    { type: 'example', title: "SEE (1)", active: "I saw him open the box.", passive: "He was seen to open the box." },
    { type: 'example', title: "SEE (2)", active: "They saw her enter the building.", passive: "She was seen to enter the building." },
    { type: 'example', title: "HEAR (1)", active: "I heard her sing.", passive: "She was heard to sing." },
    { type: 'example', title: "HEAR (2)", active: "They heard him shout.", passive: "He was heard to shout." },
    { type: 'example', title: "WATCH", active: "We watched them play.", passive: "They were watched to play." },
    { type: 'example', title: "NOTICE", active: "I noticed him leave.", passive: "He was noticed to leave." },

    { type: 'mistake', title: "Grammar Trap: Forgetting 'to'", active: "He was seen to open the box.", passive: "✗ He was seen open the box." },

    { type: 'heading', title: "6.5 MAKE and LET" },
    
    { type: 'text', title: "MAKE (Force/Compel)", content: "Used when someone is forced to perform an action." },
    { type: 'example', active: "They made him work hard.", passive: "He was made to work hard." },
    { type: 'example', active: "She made me wait.", passive: "I was made to wait by her." },
    { type: 'tip', content: "Just like perception verbs, 'Make' requires 'to' in the passive: 'made to work', 'made to wait'." },

    { type: 'text', title: "LET (Allow/Permit)", content: "Used when someone is given permission to do something." },
    { type: 'example', active: "They let him go.", passive: "He was allowed to go. (OR: He was permitted to go.)" },
    { type: 'example', active: "She let me use her phone.", passive: "I was allowed to use her phone." },
    { type: 'tip', content: "Note: The word 'let' is rarely used in its passive form. Instead, it transforms into 'be allowed to' or 'be permitted to'." }
  ]
};
