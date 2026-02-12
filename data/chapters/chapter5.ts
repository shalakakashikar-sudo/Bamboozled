import { Chapter } from '../../types';

export const chapter5: Chapter = {
  id: 5,
  title: "Special Sentence Structures",
  parts: [
    { type: 'heading', title: "5.1 IMPERATIVE SENTENCES (Commands)" },
    
    { type: 'text', title: "5.1.1 Affirmative Imperatives", content: "These are direct commands telling someone to do something." },
    { type: 'formula', title: "Affirmative Imperative Formula", content: "Active: V1 + Object\nPassive: Let + Object + be + V3" },
    { type: 'example', active: "Open the door.", passive: "Let the door be opened." },
    { type: 'example', active: "Close the window.", passive: "Let the window be closed." },
    { type: 'example', active: "Help the poor.", passive: "Let the poor be helped." },
    { type: 'example', active: "Complete the assignment.", passive: "Let the assignment be completed." },
    { type: 'example', active: "Water the plants.", passive: "Let the plants be watered." },

    { type: 'text', title: "5.1.2 Negative Imperatives", content: "Commands telling someone NOT to do something." },
    { type: 'formula', title: "Negative Imperative Formula", content: "Active: Do not + V1 + Object\nPassive: Let + Object + not + be + V3" },
    { type: 'example', active: "Do not touch the switch.", passive: "Let the switch not be touched." },
    { type: 'example', active: "Do not waste your time.", passive: "Let your time not be wasted." },
    { type: 'example', active: "Do not insult the weak.", passive: "Let the weak not be insulted." },
    { type: 'example', active: "Do not break the glass.", passive: "Let the glass not be broken." },

    { type: 'text', title: "5.1.3 Polite Requests (Please/Kindly)", content: "Softening a command into a request." },
    { type: 'formula', title: "Request Formula", content: "Active: Please/Kindly + V1 + Object\nPassive: You are requested to + V1 + Object" },
    { type: 'example', active: "Please help me.", passive: "You are requested to help me." },
    { type: 'example', active: "Kindly grant me leave.", passive: "You are requested to grant me leave." },
    { type: 'example', active: "Please open your book.", passive: "You are requested to open your book." },
    { type: 'example', active: "Kindly close the gate.", passive: "You are requested to close the gate." },

    { type: 'text', title: "5.1.4 'Let' Structures (Suggestions)", content: "When 'Let' is used in the active voice for suggestions." },
    { type: 'formula', title: "'Let' Structure Formula", content: "Active: Let + Object + V1\nPassive: Let + Object + be + V3" },
    { type: 'example', active: "Let him do the work.", passive: "Let the work be done by him." },
    { type: 'example', active: "Let her sing a song.", passive: "Let a song be sung by her." },
    { type: 'example', active: "Let them play the game.", passive: "Let the game be played by them." },

    { type: 'heading', title: "5.2 INTERROGATIVE SENTENCES (Questions)" },
    
    { type: 'text', title: "5.2.1 Yes/No Questions", content: "Questions that can be answered with a simple Yes or No." },
    { type: 'formula', title: "Yes/No Question Formula", content: "Active: Aux + Subject + V + Object?\nPassive: Aux + Object + be + V3 + by Subject?" },
    { type: 'text', title: "Examples by Tense:", content: "Observe how the auxiliary verb changes based on the tense:" },
    { type: 'example', title: "Present Simple (Do)", active: "Do you write letters?", passive: "Are letters written by you?" },
    { type: 'example', title: "Present Simple (Does)", active: "Does she teach English?", passive: "Is English taught by her?" },
    { type: 'example', title: "Past Simple (Did)", active: "Did you finish the work?", passive: "Was the work finished by you?" },
    { type: 'example', title: "Past Simple (Did)", active: "Did she sing the song?", passive: "Was the song sung by her?" },
    { type: 'example', title: "Future Simple (Will)", active: "Will you complete the task?", passive: "Will the task be completed by you?" },
    { type: 'example', title: "Present Perfect (Have)", active: "Have you finished the work?", passive: "Has the work been finished by you?" },
    { type: 'example', title: "Modals (Can)", active: "Can you solve this?", passive: "Can this be solved by you?" },
    { type: 'example', title: "Modals (Should)", active: "Should we help them?", passive: "Should they be helped by us?" },

    { type: 'text', title: "5.2.2 WH-Questions", content: "Questions starting with What, When, Why, Who, etc." },
    
    { type: 'text', title: "When WH-word asks about the OBJECT", content: "The WH-word stays at the beginning." },
    { type: 'formula', title: "WH-Object Formula", content: "Active: WH + Aux + Subject + V?\nPassive: WH + Aux + be + V3 + by Subject?" },
    { type: 'example', active: "What did you see?", passive: "What was seen by you?" },
    { type: 'example', active: "What did she write?", passive: "What was written by her?" },
    { type: 'example', active: "What are they building?", passive: "What is being built by them?" },
    { type: 'example', active: "When did they build it?", passive: "When was it built?" },
    { type: 'example', active: "Why did he break the glass?", passive: "Why was the glass broken by him?" },

    { type: 'text', title: "When WH-word asks about the SUBJECT (WHO)", content: "The 'Who' becomes 'By whom' in passive." },
    { type: 'formula', title: "WH-Subject Formula", content: "Active: Who + V + Object?\nPassive: By whom + Aux + Object + be + V3?" },
    { type: 'example', active: "Who teaches you?", passive: "By whom are you taught?" },
    { type: 'example', active: "Who wrote this book?", passive: "By whom was this book written?" },
    { type: 'example', active: "Who discovered America?", passive: "By whom was America discovered?" },
    
    { type: 'tip', title: "MoMo's Modern Alternative", content: "In modern natural English, we often keep 'Who' at the start and put 'by' at the end!" },
    { type: 'list', title: "Natural Phrasing Examples", items: [
      "Who are you taught by?",
      "Who was this book written by?"
    ]},

    { type: 'heading', title: "5.3 DOUBLE OBJECT SENTENCES" },
    { type: 'text', content: "Some verbs take two objects: a Direct Object (thing) and an Indirect Object (person). Common verbs include: give, send, show, teach, tell, offer, lend, write, bring, buy, make." },
    
    { type: 'formula', title: "Formula 1: Direct Object Focus (Thing)", content: "Direct Object + be + V3 + to/for + Indirect Object" },
    { type: 'formula', title: "Formula 2: Indirect Object Focus (Person)", content: "Indirect Object + be + V3 + Direct Object" },
    
    { type: 'example', title: "GIVE", active: "She gave me a book.", passive: "1. A book was given to me by her.\n2. I was given a book by her." },
    { type: 'example', title: "SEND", active: "She sent me a letter.", passive: "1. A letter was sent to me by her.\n2. I was sent a letter by her." },
    { type: 'example', title: "TEACH", active: "He taught us English.", passive: "1. English was taught to us by him.\n2. We were taught English by him." },
    
    { type: 'tip', title: "The 'For' Distinction", content: "Verbs like 'BUY' often use 'for' instead of 'to' when focusing on the thing!" },
    { type: 'example', title: "BUY", active: "She bought me a gift.", passive: "1. A gift was bought for me by her.\n2. I was bought a gift by her." },

    { type: 'heading', title: "5.4 VERBS FOLLOWED BY PREPOSITIONS (Phrasal Verbs)" },
    { type: 'tip', title: "MoMo's Sticky Rule", content: "⚠️ CRITICAL RULE: Keep the preposition with the verb! Do not separate them in passive voice." },
    
    { type: 'example', title: "LAUGH AT", active: "They laughed at him.", passive: "He was laughed at by them." },
    { type: 'example', title: "LOOK INTO", active: "The police are looking into the matter.", passive: "The matter is being looked into by the police." },
    { type: 'example', title: "LOOK AFTER", active: "She looks after the children.", passive: "The children are looked after by her." },
    { type: 'example', title: "TALK ABOUT", active: "They talked about the incident.", passive: "The incident was talked about by them." },
    { type: 'example', title: "CALL OFF", active: "They called off the meeting.", passive: "The meeting was called off by them." },
    { type: 'example', title: "CARRY OUT", active: "They carried out the plan.", passive: "The plan was carried out by them." },
    { type: 'example', title: "PUT OFF", active: "They put off the meeting.", passive: "The meeting was put off by them." },
    { type: 'example', title: "TURN DOWN", active: "She turned down the offer.", passive: "The offer was turned down by her." },

    { type: 'heading', title: "Common Phrasal Verb Mistakes" },
    { type: 'mistake', title: "Error: Separating Prepositions", active: "He was laughed at by them.", passive: "✗ He was laughed by them." },
    { type: 'mistake', title: "Error: Dropping the particle", active: "The meeting was called off.", passive: "✗ The meeting was called." }
  ]
};