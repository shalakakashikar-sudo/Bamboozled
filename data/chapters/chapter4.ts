
import { Chapter } from '../../types';

export const chapter4: Chapter = {
  id: 4,
  title: "Modal Verbs in Passive Voice",
  parts: [
    { type: 'heading', title: "4.1 Basic Formula for Modals" },
    { 
      type: 'formula', 
      title: "Modal Passive Formula", 
      content: "Active: Subject + Modal + V1 + Object\nPassive: Object + Modal + be + V3 + (by + Subject)" 
    },
    {
      type: 'list',
      title: "⚠️ CRITICAL RULES",
      items: [
        "1. ALWAYS use 'be' after the modal (NOT 'been' or 'being')",
        "2. Structure is: Modal + BE + V3"
      ]
    },

    { type: 'heading', title: "4.2 CAN (Ability, Permission)" },
    { type: 'example', active: "I can solve this problem.", passive: "This problem can be solved by me." },
    { type: 'example', active: "You can download the file.", passive: "The file can be downloaded." },
    { type: 'example', active: "She can speak five languages.", passive: "Five languages can be spoken by her." },
    { type: 'example', title: "Negative", active: "I cannot solve this.", passive: "This cannot be solved by me." },
    { type: 'example', title: "Question", active: "Can you solve this?", passive: "Can this be solved by you?" },

    { type: 'heading', title: "4.3 COULD (Past ability, Polite permission)" },
    { type: 'example', active: "I could solve the puzzle.", passive: "The puzzle could be solved by me." },
    { type: 'example', active: "We could organize a meeting.", passive: "A meeting could be organized." },
    { type: 'example', active: "They could see the mountain.", passive: "The mountain could be seen by them." },

    { type: 'heading', title: "4.4 MAY (Permission, Possibility)" },
    { type: 'example', active: "You may submit the form.", passive: "The form may be submitted." },
    { type: 'example', active: "They may cancel the event.", passive: "The event may be cancelled." },
    { type: 'example', active: "Students may use calculators.", passive: "Calculators may be used by students." },

    { type: 'heading', title: "4.5 MIGHT (Slight possibility)" },
    { type: 'example', active: "They might postpone the exam.", passive: "The exam might be postponed." },
    { type: 'example', active: "She might accept the offer.", passive: "The offer might be accepted by her." },

    { type: 'heading', title: "4.6 MUST (Strong obligation, Necessity)" },
    { type: 'example', active: "You must follow the rules.", passive: "The rules must be followed." },
    { type: 'example', active: "Students must wear uniforms.", passive: "Uniforms must be worn by students." },
    { type: 'example', active: "We must keep silence.", passive: "Silence must be kept." },
    { type: 'example', title: "Negative (Prohibition)", active: "You must not touch this.", passive: "This must not be touched." },

    { type: 'heading', title: "4.7 SHOULD (Advice, Recommendation)" },
    { type: 'example', active: "You should complete the work.", passive: "The work should be completed." },
    { type: 'example', active: "Students should respect teachers.", passive: "Teachers should be respected by students." },
    { type: 'example', active: "We should help the poor.", passive: "The poor should be helped." },
    { type: 'example', title: "Negative", active: "You should not waste time.", passive: "Time should not be wasted." },

    { type: 'heading', title: "4.8 WOULD (Conditional, Polite request)" },
    { type: 'example', active: "I would appreciate your help.", passive: "Your help would be appreciated." },
    { type: 'example', active: "They would complete the task.", passive: "The task would be completed by them." },

    { type: 'heading', title: "4.9 HAVE TO / HAS TO (External obligation)" },
    { type: 'example', title: "Present", active: "You have to submit the form.", passive: "The form has to be submitted." },
    { type: 'example', title: "Present (Singular)", active: "He has to complete the work.", passive: "The work has to be completed by him." },
    { type: 'example', title: "Past (HAD TO)", active: "I had to finish the report.", passive: "The report had to be finished by me." },

    { type: 'heading', title: "4.10 Common Mistakes with Modals" },
    { type: 'text', content: "Watch out for these frequent errors when mixing modals with passive voice:" },
    
    { type: 'text', title: "Error Type 1: Using 'been' instead of 'be'" },
    { type: 'mistake', title: "Mistake with MUST", active: "The work must be done.", passive: "✗ The work must been done." },
    { type: 'mistake', title: "Mistake with SHOULD", active: "The rules should be followed.", passive: "✗ The rules should been followed." },
    { type: 'mistake', title: "Mistake with CAN", active: "The file can be downloaded.", passive: "✗ The file can been downloaded." },

    { type: 'text', title: "Error Type 2: Using 'being'" },
    { type: 'mistake', title: "Mistake with MUST", active: "The work must be done.", passive: "✗ The work must being done." },
    { type: 'mistake', title: "Mistake with CAN", active: "The form can be submitted.", passive: "✗ The form can being submitted." },

    { type: 'text', title: "Error Type 3: Forgetting 'be' entirely" },
    { type: 'mistake', title: "Mistake with MUST", active: "The work must be done.", passive: "✗ The work must done." },
    { type: 'mistake', title: "Mistake with SHOULD", active: "The rules should be followed.", passive: "✗ The rules should followed." },

    { type: 'heading', title: "4.11 PRO TIPS for Modals" },
    {
      type: 'list',
      items: [
        "TIP 1: Memorize the rhythm: Modal + BE + V3.",
        "TIP 2: Never use 'been' or 'being' with modals in passive constructions.",
        "TIP 3: The modal word itself stays the same; only the verb following it changes to passive form.",
        "TIP 4: You can usually drop the 'by + agent' part if the doer is obvious or doesn't matter."
      ]
    }
  ]
};
