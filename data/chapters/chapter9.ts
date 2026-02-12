
import { Chapter } from '../../types';

export const chapter9: Chapter = {
  id: 9,
  title: "Common Errors and How to Avoid Them",
  parts: [
    { type: 'heading', title: "9.1 ERROR 1: Using V2 Instead of V3" },
    { type: 'text', content: "Passive voice constructions strictly require the Past Participle (V3). Using the Simple Past (V2) is one of the most frequent mistakes made by learners." },
    { type: 'mistake', title: "WRITE Error", active: "The letter was written.", passive: "✗ The letter was wrote." },
    { type: 'mistake', title: "BREAK Error", active: "The window was broken.", passive: "✗ The window was broke." },
    { type: 'mistake', title: "SING Error", active: "The song was sung.", passive: "✗ The song was sang." },
    { type: 'mistake', title: "EAT Error", active: "The food was eaten.", passive: "✗ The food was ate." },
    { type: 'mistake', title: "DRIVE Error", active: "The car had been driven.", passive: "✗ The car had been drove." },

    { type: 'heading', title: "9.2 ERROR 2: Wrong Auxiliary Verb" },
    { type: 'text', content: "The auxiliary verb (am, is, are, was, were) must always agree with the NEW subject (the original object), not the original doer." },
    { type: 'mistake', title: "Plural Agreement", active: "The books are read.", passive: "✗ The books is read." },
    { type: 'mistake', title: "Uncountable Agreement", active: "English is spoken.", passive: "✗ English are spoken." },
    { type: 'mistake', title: "Singular Past", active: "The letter was written.", passive: "✗ The letter were written." },
    { type: 'mistake', title: "Plural Past", active: "The windows were broken.", passive: "✗ The windows was broken." },

    { type: 'heading', title: "9.3 ERROR 3: Forgetting 'Being' in Continuous" },
    { type: 'text', content: "The word 'being' is essential to distinguish an ongoing action from a habitual state." },
    { type: 'mistake', title: "Present Continuous", active: "A letter is being written.", passive: "✗ A letter is written." },
    { type: 'mistake', title: "Construction Focus", active: "The house is being built.", passive: "✗ The house is built." },
    { type: 'mistake', title: "Past Continuous", active: "A letter was being written.", passive: "✗ A letter was written." },

    { type: 'heading', title: "9.4 ERROR 4: Forgetting 'Been' in Perfect" },
    { type: 'text', content: "Forgetting 'been' in perfect tenses often reverses the meaning, making it sound like the object performed the action." },
    { type: 'mistake', title: "Present Perfect (S)", active: "The work has been finished.", passive: "✗ The work has finished." },
    { type: 'mistake', title: "Present Perfect (P)", active: "Letters have been written.", passive: "✗ Letters have written." },
    { type: 'mistake', title: "Past Perfect", active: "The work had been finished.", passive: "✗ The work had finished." },

    { type: 'heading', title: "9.5 ERROR 5: Using 'Been' or 'Being' with Modals" },
    { type: 'text', content: "Passive modals use 'be + V3'. Adding 'been' or 'being' is a common error stemming from confusion with continuous or perfect tenses." },
    { type: 'mistake', title: "Modal + Been (Must)", active: "The work must be done.", passive: "✗ The work must been done." },
    { type: 'mistake', title: "Modal + Been (Should)", active: "The rules should be followed.", passive: "✗ The rules should been followed." },
    { type: 'mistake', title: "Modal + Being (Can)", active: "The file can be downloaded.", passive: "✗ The file can being downloaded." },
    { type: 'mistake', title: "Missing 'be' (Should)", active: "The rules should be followed.", passive: "✗ The rules should followed." },
    { type: 'mistake', title: "Missing 'be' (Must)", active: "The work must be done.", passive: "✗ The work must done." },

    { type: 'heading', title: "9.6 ERROR 6: Changing Intransitive Verbs" },
    { type: 'text', content: "Intransitive verbs cannot have a passive voice because they have no object to become the new subject." },
    { type: 'mistake', title: "Happen (Incorrect Passive)", active: "The accident happened.", passive: "✗ The accident was happened." },
    { type: 'mistake', title: "Bloom (Incorrect Passive)", active: "The flowers bloomed.", passive: "✗ The flowers were bloomed." },
    { type: 'mistake', title: "Rise (Incorrect Passive)", active: "The sun rose.", passive: "✗ The sun was rose." },

    { type: 'heading', title: "9.7 ERROR 7: Separating Prepositions" },
    { type: 'text', content: "Phrasal verbs must retain their prepositions in the passive voice. Separating them changes or destroys the meaning." },
    { type: 'mistake', title: "Laugh At", active: "He was laughed at by them.", passive: "✗ He was laughed by them." },
    { type: 'mistake', title: "Look Into", active: "The matter is being looked into.", passive: "✗ The matter is being looked." },
    { type: 'mistake', title: "Call Off", active: "The meeting was called off.", passive: "✗ The meeting was called." },

    { type: 'heading', title: "9.8 ERROR 8: Forgetting 'to' with Perception Verbs" },
    { type: 'text', content: "Verbs like see, hear, watch, and make do not use 'to' in the active form, but they MUST use 'to' in the passive form." },
    { type: 'mistake', title: "See Error", active: "He was seen to open the box.", passive: "✗ He was seen open the box." },
    { type: 'mistake', title: "Hear Error", active: "She was heard to sing.", passive: "✗ She was heard sing." },

    { type: 'tip', title: "Shoot's Safety Audit", content: "Before you submit your work, check for these 8 common traps! Mastery is as much about avoiding errors as it is about knowing the rules. 🎋🐼" }
  ]
};
