
import { Chapter } from '../../types';

export const chapter11: Chapter = {
  id: 11,
  title: "Quick Reference Tables",
  parts: [
    { type: 'heading', title: "11.1 Complete Tense Chart" },
    {
      type: 'table',
      headers: ["Tense", "Active Structure", "Passive Structure"],
      rows: [
        ["Present Simple", "V1 / V1(s/es) / do / does", "am/is/are + V3"],
        ["Present Continuous", "am/is/are + V-ing", "am/is/are + being + V3"],
        ["Present Perfect", "has/have + V3", "has/have + been + V3"],
        ["Past Simple", "V2 / did", "was/were + V3"],
        ["Past Continuous", "was/were + V-ing", "was/were + being + V3"],
        ["Past Perfect", "had + V3", "had + been + V3"],
        ["Future Simple", "will + V1", "will + be + V3"],
        ["Future Perfect", "will + have + V3", "will + have been + V3"],
        ["Modal", "Modal + V1", "Modal + be + V3"]
      ]
    },

    { type: 'heading', title: "11.2 Common Irregular Verbs (Quick List)" },
    {
      type: 'table',
      headers: ["V1 (Base)", "V2 (Past)", "V3 (Past Participle)"],
      rows: [
        ["write", "wrote", "written"],
        ["speak", "spoke", "spoken"],
        ["break", "broke", "broken"],
        ["take", "took", "taken"],
        ["give", "gave", "given"],
        ["see", "saw", "seen"],
        ["do", "did", "done"],
        ["go", "went", "gone"],
        ["eat", "ate", "eaten"],
        ["make", "made", "made"]
      ]
    },

    { type: 'heading', title: "11.3 Dos and Don'ts" },
    {
      type: 'list',
      title: "DO:",
      items: [
        "✓ Always use V3 in passive voice.",
        "✓ Use 'being' with continuous tenses.",
        "✓ Use 'been' with perfect tenses.",
        "✓ Match the auxiliary verb with the new subject.",
        "✓ Keep prepositions attached to phrasal verbs."
      ]
    },
    {
      type: 'list',
      title: "DON'T:",
      items: [
        "✗ Don't use V2 in passive constructions.",
        "✗ Don't forget auxiliary verbs.",
        "✗ Don't use 'being' with modals.",
        "✗ Don't change intransitive verbs to passive.",
        "✗ Don't separate prepositions from their verbs."
      ]
    },

    { 
      type: 'tip', 
      title: "Shoot's Master Sheet", 
      content: "Keep this chapter bookmarked! It's the ultimate 'Panda Shield' against grammar mistakes during your exams. 🎋🐼🛡️" 
    }
  ]
};
