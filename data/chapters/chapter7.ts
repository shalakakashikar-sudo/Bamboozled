
import { Chapter } from '../../types';

export const chapter7: Chapter = {
  id: 7,
  title: "Sentences That Cannot Be Changed",
  parts: [
    { type: 'heading', title: "7.1 INTRANSITIVE VERBS" },
    { 
      type: 'text', 
      content: "Intransitive verbs do not take objects. No object = no passive. In English, if there is no object to receive the action, there is nothing to move to the subject position in a passive construction." 
    },
    {
      type: 'list',
      title: "Common Intransitive Verbs by Category",
      items: [
        "Movement: come, go, arrive, depart, rise, fall",
        "Occurrence: happen, occur, take place",
        "Physical reactions: sleep, wake, cry, laugh, smile",
        "Natural phenomena: rain, snow, shine",
        "Other: die, grow, bloom, live"
      ]
    },
    
    {
      type: 'table',
      title: "Examples That CANNOT Be Changed",
      headers: ["Active (Correct)", "✗ Incorrect Passive"],
      rows: [
        ["The accident happened yesterday.", "✗ Was happened the accident."],
        ["The sun rises in the east.", "✗ The east is risen in."],
        ["He laughed loudly.", "✗ Loudly was laughed."],
        ["The baby cried all night.", "✗ All night was cried."],
        ["Birds fly in the sky.", "✗ The sky is flown in."],
        ["It rained heavily.", "✗ Heavily was rained."],
        ["The old man died peacefully.", "✗ Peacefully was died."],
        ["The flowers bloomed.", "✗ Were bloomed the flowers."]
      ]
    },

    { type: 'heading', title: "7.2 STATIVE VERBS" },
    { type: 'text', content: "Stative verbs describe states rather than actions. Because they don't show an action being 'done' to someone, they usually cannot be converted to passive voice." },
    {
      type: 'list',
      title: "Common Stative Verbs",
      items: [
        "Possession: have (possess), own, belong, possess",
        "Relationships: resemble, consist of, contain"
      ]
    },

    { type: 'text', title: "Examples That CANNOT Be Changed", content: "Conversion of these states sounds unnatural and is grammatically incorrect:" },
    { type: 'mistake', title: "HAVE (Possession)", active: "I have a car.", passive: "✗ A car is had by me." },
    { type: 'mistake', title: "BELONG", active: "This belongs to me.", passive: "✗ This is belonged to me." },
    { type: 'mistake', title: "RESEMBLE", active: "She resembles her mother.", passive: "✗ Her mother is resembled by her." },
    { type: 'mistake', title: "CONSIST OF", active: "Water consists of H₂O.", passive: "✗ H₂O is consisted of." },
    { type: 'mistake', title: "CONTAIN", active: "This box contains books.", passive: "✗ Books are contained by this box." },

    { type: 'heading', title: "7.3 LINKING VERBS (COPULAR VERBS)" },
    { type: 'text', content: "Linking verbs connect the subject to a complement (an adjective or noun that describes the subject). They act like an equal sign (=)." },
    {
      type: 'list',
      title: "Common Linking Verbs",
      items: [
        "BE: am, is, are, was, were",
        "BECOME: become, get, turn, go, grow",
        "SEEM: seem, appear, look, sound, feel, taste, smell"
      ]
    },

    { type: 'text', title: "Examples of Linking Dead-Ends", content: "These describe the subject rather than an action performed on an object:" },
    { type: 'example', title: "BE", active: "She is a teacher.", passive: "✗ A teacher is been by her." },
    { type: 'example', title: "BE (2)", active: "The sky is blue.", passive: "✗ Blue is been by the sky." },
    { type: 'example', title: "BECOME", active: "He became a doctor.", passive: "✗ A doctor was become by him." },
    { type: 'example', title: "LOOK (Linking)", active: "She looks beautiful.", passive: "✗ Beautiful is looked by her." },
    { type: 'example', title: "TASTE (Linking)", active: "The food tastes delicious.", passive: "✗ Delicious is tasted by the food." },
    { type: 'example', title: "SMELL (Linking)", active: "The rose smells sweet.", passive: "✗ Sweet is smelt by the rose." },

    { 
      type: 'comparison', 
      title: "⚠️ IMPORTANT DISTINCTION", 
      active: "LINKING VERB (No passive): The cake tastes good. (Describes a quality - Linking)", 
      passive: "ACTION VERB (Can be passive): I tasted the cake. → The cake was tasted by me. (Action)" 
    },

    { type: 'heading', title: "7.4 COMMON MISTAKES" },
    {
      type: 'list',
      title: "✗ Incorrect Passives (Do Not Use!)",
      items: [
        "✗ The accident was happened. (Correct: The accident happened.)",
        "✗ The flowers were bloomed. (Correct: The flowers bloomed.)",
        "✗ The baby was cried. (Correct: The baby cried.)",
        "✗ The sun was rose. (Correct: The sun rose.)",
        "✗ A car is had by me. (Correct: I have a car.)",
        "✗ Two books are belonged to her. (Correct: Two books belong to her.)",
        "✗ Sweet is smelt by the rose. (Correct: The rose smells sweet.)",
        "✗ Delicious is tasted by the food. (Correct: The food tastes delicious.)"
      ]
    },

    { type: 'heading', title: "7.5 HOW TO IDENTIFY IF A VERB CAN BE PASSIVE" },
    { type: 'tip', title: "Quick Test: The 'Who' or 'What' Question", content: "Ask yourself: 'Can I answer WHO or WHAT after the verb?'" },
    { 
      type: 'list',
      title: "Test Results Breakdown",
      items: [
        "If YES → Can be passive: 'Write WHAT?' → a letter (TRANSITIVE). 'Eat WHAT?' → food (TRANSITIVE).",
        "If NO → Cannot be passive: 'Sleep WHAT?' → (None - INTRANSITIVE). 'Happen WHAT?' → (None - INTRANSITIVE)."
      ]
    },
    { type: 'tip', title: "Shoot's Summary", content: "Always look for the receiver of the action. No receiver (Object) = No Passive. Simple as eating a bamboo shoot! 🎋" }
  ]
};
