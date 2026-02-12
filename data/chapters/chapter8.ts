
import { Chapter } from '../../types';

export const chapter8: Chapter = {
  id: 8,
  title: "Contextual Usage Guidelines",
  parts: [
    { type: 'heading', title: "8.1 USE ACTIVE VOICE WHEN:" },
    
    { 
      type: 'text', 
      title: "1. The Doer is Important", 
      content: "Focus on the person or entity responsible for the action." 
    },
    { type: 'list', items: [
      "Shakespeare wrote Hamlet.",
      "Einstein discovered the theory of relativity.",
      "Steve Jobs founded Apple."
    ]},

    { 
      type: 'text', 
      title: "2. Personal Narratives or Stories", 
      content: "Makes stories more engaging and direct." 
    },
    { type: 'list', items: [
      "I woke up early and prepared breakfast.",
      "She opened the door and saw a stranger.",
      "We went to the market and bought vegetables."
    ]},

    { 
      type: 'text', 
      title: "3. Clarity and Directness are Priority", 
      content: "For clear accountability and straightforward communication." 
    },
    { type: 'list', items: [
      "The manager approved the proposal.",
      "Our team won the championship.",
      "I made a mistake."
    ]},

    { 
      type: 'text', 
      title: "4. Instructions Requiring Action", 
      content: "Clear directives for the user or reader." 
    },
    { type: 'list', items: [
      "Press the red button to start.",
      "Add salt to taste.",
      "Mix the ingredients thoroughly."
    ]},

    { 
      type: 'text', 
      title: "5. Sports Reporting", 
      content: "Capturing dynamic, real-time action." 
    },
    { type: 'list', items: [
      "Ronaldo scored a magnificent goal!",
      "The runner broke the world record!"
    ]},

    { type: 'heading', title: "8.2 USE PASSIVE VOICE WHEN:" },

    { 
      type: 'text', 
      title: "1. The Doer is Unknown", 
      content: "When you simply don't know who performed the action." 
    },
    { type: 'list', items: [
      "My wallet was stolen. (We don't know who stole it)",
      "The window has been broken. (Unknown culprit)",
      "The files were deleted. (Unknown person)"
    ]},

    { 
      type: 'text', 
      title: "2. The Doer is Unimportant or Obvious", 
      content: "When the agent adds no value or is understood by context." 
    },
    { type: 'list', items: [
      "Rice is grown in India. (Who grows it is unimportant)",
      "English is spoken all over the world. (Obvious that people speak it)",
      "The criminal was arrested. (Obviously by police)",
      "The patient was operated on. (Obviously by a surgeon)"
    ]},

    { 
      type: 'text', 
      title: "3. Emphasizing the Action or Receiver", 
      content: "Highlighting what happened, not who did it." 
    },
    { type: 'list', items: [
      "The Taj Mahal was built in 1653. (Focus on the monument)",
      "The results have been announced. (Focus on results)",
      "A cure for the disease was discovered. (Focus on the cure)"
    ]},

    { 
      type: 'text', 
      title: "4. Scientific, Academic, or Technical Writing", 
      content: "Maintaining objectivity and formality in research." 
    },
    { type: 'list', items: [
      "The experiment was conducted under controlled conditions.",
      "The samples were analyzed using spectroscopy.",
      "Three hypotheses were tested.",
      "The data were collected over six months."
    ]},

    { 
      type: 'text', 
      title: "5. News Reporting", 
      content: "Reporting events objectively and factually." 
    },
    { type: 'list', items: [
      "The bank was robbed yesterday.",
      "Five people were injured in the accident.",
      "The new policy has been approved."
    ]},

    { 
      type: 'text', 
      title: "6. Avoiding Blame or Responsibility", 
      content: "Being diplomatic or tactful in communication." 
    },
    { type: 'list', items: [
      "A mistake was made. (Instead of 'You made a mistake')",
      "The deadline was missed. (Instead of 'We missed the deadline')",
      "The order was cancelled. (Instead of 'They cancelled the order')"
    ]},

    { 
      type: 'text', 
      title: "7. Legal and Formal Documents", 
      content: "Standard impersonal phrasing for laws and rules." 
    },
    { type: 'list', items: [
      "The defendant is charged with theft.",
      "Trespassers will be prosecuted.",
      "All applications must be submitted by Friday."
    ]},

    { 
      type: 'text', 
      title: "8. Historical Writing", 
      content: "Focusing on large-scale events and structures." 
    },
    { type: 'list', items: [
      "The pyramids were built 4,500 years ago.",
      "The printing press was invented by Gutenberg."
    ]},

    { type: 'heading', title: "8.3 CONTEXT-BASED EXAMPLES" },
    
    { 
      type: 'situation', 
      title: "Scientific Lab Report", 
      description: "Passive for Objectivity", 
      content: "✓ Better: The solution was heated to 80°C. The catalyst was then added. A reaction was observed within 2 minutes." 
    },

    { 
      type: 'situation', 
      title: "Personal Email", 
      description: "Active for Connection", 
      content: "✓ Better: I received your message yesterday. I have reviewed the attached file." 
    },

    { 
      type: 'situation', 
      title: "News Report", 
      description: "Passive for Factual Reporting", 
      content: "✓ Good: Three people were injured when a car crashed into a tree yesterday. The victims were taken to City Hospital." 
    },

    { 
      type: 'situation', 
      title: "Recipe", 
      description: "Active for Instructions", 
      content: "✓ Better: Preheat the oven to 180°C. Mix flour and sugar. Add eggs one at a time." 
    },

    { 
      type: 'situation', 
      title: "Job Application", 
      description: "Active for Impact", 
      content: "✓ Good: I managed a team of 10 people. I increased sales by 25%. I developed a new marketing strategy." 
    },

    { type: 'tip', title: "Shoot's Final Selection Guide", content: "Remember: Context is everything! If the doer is the hero, use Active. If the result is the hero (or the doer is a mystery), go Passive! 🎋" }
  ]
};
