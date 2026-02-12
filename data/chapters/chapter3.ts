
import { Chapter } from '../../types';

export const chapter3: Chapter = {
  id: 3,
  title: "Passive Voice Across All Tenses",
  parts: [
    { type: 'heading', title: "3.1 PRESENT SIMPLE TENSE" },
    { type: 'formula', title: "Present Simple Formula", content: "Active: Subject + V1/V1(s/es) + Object\nPassive: Object + am/is/are + V3 + (by + Subject)" },
    {
      type: 'list',
      title: "Auxiliary Verb Selection",
      items: [
        "am → with 'I'",
        "is → with He, She, It, and singular subjects",
        "are → with You, We, They, and plural subjects"
      ]
    },
    { type: 'text', title: "Examples - Affirmative", content: "See how the object takes the lead:" },
    { type: 'example', active: "I write letters.", passive: "Letters are written by me." },
    { type: 'example', active: "She writes letters.", passive: "Letters are written by her." },
    { type: 'example', active: "He teaches English.", passive: "English is taught by him." },
    { type: 'example', active: "They speak Spanish.", passive: "Spanish is spoken by them." },
    { type: 'example', active: "Farmers grow rice.", passive: "Rice is grown by farmers." },
    
    { type: 'text', title: "Examples - Negative", content: "Use 'do/does not' in active, 'am/is/are not' in passive." },
    { type: 'example', active: "I do not write letters.", passive: "Letters are not written by me." },
    { type: 'example', active: "She does not teach French.", passive: "French is not taught by her." },

    { type: 'text', title: "Examples - Questions", content: "The auxiliary comes first." },
    { type: 'example', active: "Do you write letters?", passive: "Are letters written by you?" },
    { type: 'example', active: "Does she teach English?", passive: "Is English taught by her?" },
    { type: 'example', active: "Who teaches you?", passive: "By whom are you taught?" },

    { type: 'heading', title: "Common Present Simple Mistakes" },
    { type: 'mistake', title: "Error: Wrong Verb Form", active: "English is spoken here.", passive: "✗ English is spoke here." },
    { type: 'mistake', title: "Error: Subject-Verb Agreement", active: "The books are read.", passive: "✗ The books is read." },
    { type: 'mistake', title: "Error: Using V1", active: "The door is closed.", passive: "✗ The door is close." },

    { type: 'heading', title: "3.2 PRESENT CONTINUOUS TENSE" },
    { type: 'formula', title: "Present Continuous Formula", content: "Active: Subject + am/is/are + V1+ing + Object\nPassive: Object + am/is/are + being + V3 + (by + Subject)" },
    { type: 'tip', title: "The 'Being' Rule", content: "Key Point: ALWAYS use 'being' between auxiliary and V3 to show the action is in progress!" },
    
    { type: 'text', title: "Examples", content: "" },
    { type: 'example', active: "I am writing a letter.", passive: "A letter is being written by me." },
    { type: 'example', active: "She is reading a book.", passive: "A book is being read by her." },
    { type: 'example', active: "They are building a house.", passive: "A house is being built by them." },
    { type: 'example', active: "He is repairing the car.", passive: "The car is being repaired by him." },
    { type: 'example', title: "Negative", active: "I am not writing a letter.", passive: "A letter is not being written by me." },
    { type: 'example', title: "Question", active: "Are you writing a letter?", passive: "Is a letter being written by you?" },

    { type: 'heading', title: "Common Present Continuous Mistakes" },
    { type: 'mistake', title: "Error: Missing 'being'", active: "A letter is being written by me.", passive: "✗ A letter is written by me. (This is Simple Present!)" },
    { type: 'mistake', title: "Error: Using 'been'", active: "The car is being repaired.", passive: "✗ The car is been repaired." },

    { type: 'heading', title: "3.3 PRESENT PERFECT TENSE" },
    { type: 'formula', title: "Present Perfect Formula", content: "Active: Subject + has/have + V3 + Object\nPassive: Object + has/have + been + V3 + (by + Subject)" },
    { type: 'tip', title: "The 'Been' Rule", content: "Key Point: ALWAYS use 'been' between has/have and V3!" },
    
    { type: 'text', title: "Examples", content: "" },
    { type: 'example', active: "I have finished the work.", passive: "The work has been finished by me." },
    { type: 'example', active: "She has written a letter.", passive: "A letter has been written by her." },
    { type: 'example', active: "They have completed the project.", passive: "The project has been completed by them." },
    { type: 'example', active: "Someone has broken the window.", passive: "The window has been broken." },
    { type: 'example', title: "Negative", active: "I have not finished the work.", passive: "The work has not been finished by me." },
    { type: 'example', title: "Question", active: "Have you finished the work?", passive: "Has the work been finished by you?" },
    { type: 'example', title: "Who Question", active: "Who has done this?", passive: "By whom has this been done?" },

    { type: 'heading', title: "Common Present Perfect Mistakes" },
    { type: 'mistake', title: "Error: Missing 'been'", active: "The work has been finished.", passive: "✗ The work has finished. (Active meaning!)" },
    { type: 'mistake', title: "Error: Missing V3", active: "The task has been completed.", passive: "✗ The task has been complete." },

    { type: 'heading', title: "3.4 PAST SIMPLE TENSE" },
    { type: 'formula', title: "Past Simple Formula", content: "Active: Subject + V2 + Object\nPassive: Object + was/were + V3 + (by + Subject)" },
    {
      type: 'list',
      title: "Auxiliary Selection",
      items: [
        "was → I, He, She, It, singular subjects",
        "were → You, We, They, plural subjects"
      ]
    },
    { type: 'text', title: "Examples", content: "" },
    { type: 'example', active: "I wrote a letter.", passive: "A letter was written by me." },
    { type: 'example', active: "She sang a song.", passive: "A song was sung by her." },
    { type: 'example', active: "They built the bridge.", passive: "The bridge was built by them." },
    { type: 'example', active: "He broke the window.", passive: "The window was broken by him." },
    { type: 'example', active: "Columbus discovered America.", passive: "America was discovered by Columbus." },
    { type: 'example', title: "Negative", active: "I did not write a letter.", passive: "A letter was not written by me." },
    { type: 'example', title: "Question", active: "Did you write a letter?", passive: "Was a letter written by you?" },

    { type: 'heading', title: "Common Past Simple Mistakes" },
    { type: 'mistake', title: "Error: Subject-Verb Agreement", active: "The windows were broken.", passive: "✗ The windows was broken." },
    { type: 'mistake', title: "Error: Using V2 instead of V3", active: "The song was sung.", passive: "✗ The song was sang." },

    { type: 'heading', title: "3.5 PAST CONTINUOUS TENSE" },
    { type: 'formula', title: "Past Continuous Formula", content: "Active: Subject + was/were + V1+ing + Object\nPassive: Object + was/were + being + V3 + (by + Subject)" },
    { type: 'tip', title: "The 'Being' Rule", content: "Key Point: ALWAYS use 'being' between was/were and V3!" },
    { type: 'example', active: "I was writing a letter.", passive: "A letter was being written by me." },
    { type: 'example', active: "She was reading a book.", passive: "A book was being read by her." },
    { type: 'example', active: "They were building a house.", passive: "A house was being built by them." },
    { type: 'example', title: "Negative", active: "I was not writing a letter.", passive: "A letter was not being written by me." },
    { type: 'example', title: "Question", active: "Was she reading a book?", passive: "Was a book being read by her?" },

    { type: 'heading', title: "3.6 PAST PERFECT TENSE" },
    { type: 'formula', title: "Past Perfect Formula", content: "Active: Subject + had + V3 + Object\nPassive: Object + had + been + V3 + (by + Subject)" },
    { type: 'tip', title: "The 'Had Been' Rule", content: "Key Point: ALWAYS use 'had been' with ALL subjects!" },
    { type: 'example', active: "I had finished the work.", passive: "The work had been finished by me." },
    { type: 'example', active: "She had written the letter.", passive: "The letter had been written by her." },
    { type: 'example', active: "They had completed the task.", passive: "The task had been completed by them." },

    { type: 'heading', title: "3.7 FUTURE SIMPLE TENSE" },
    { type: 'formula', title: "Future Simple Formula", content: "Active: Subject + will/shall + V1 + Object\nPassive: Object + will/shall + be + V3 + (by + Subject)" },
    { type: 'example', active: "I will write a letter.", passive: "A letter will be written by me." },
    { type: 'example', active: "She will complete the task.", passive: "The task will be completed by her." },
    { type: 'example', active: "They will build the bridge.", passive: "The bridge will be built by them." },
    { type: 'example', title: "Negative", active: "I will not write the letter.", passive: "The letter will not be written by me." },
    { type: 'example', title: "Question", active: "Will you write the letter?", passive: "Will the letter be written by you?" },

    { type: 'heading', title: "3.8 FUTURE PERFECT TENSE" },
    { type: 'formula', title: "Future Perfect Formula", content: "Active: Subject + will/shall + have + V3 + Object\nPassive: Object + will/shall + have been + V3 + (by + Subject)" },
    { type: 'example', active: "I will have finished the work by 5 PM.", passive: "The work will have been finished by 5 PM." },
    { type: 'example', active: "They will have built the stadium by January.", passive: "The stadium will have been built by January." },
    { type: 'example', title: "Negative", active: "I will not have finished the work.", passive: "The work will not have been finished." },

    { type: 'heading', title: "3.9 Quick Tense Reference Chart" },
    {
      type: 'table',
      headers: ["Tense", "Active Structure", "Passive Structure"],
      rows: [
        ["Present Simple", "V1 / V1(s/es) / do / does", "am/is/are + V3"],
        ["Present Continuous", "am/is/are + V1+ing", "am/is/are + being + V3"],
        ["Present Perfect", "has/have + V3", "has/have + been + V3"],
        ["Past Simple", "V2 / did+V1", "was/were + V3"],
        ["Past Continuous", "was/were + V1+ing", "was/were + being + V3"],
        ["Past Perfect", "had + V3", "had + been + V3"],
        ["Future Simple", "will + V1", "will + be + V3"],
        ["Future Perfect", "will + have + V3", "will + have been + V3"]
      ]
    }
  ]
};
