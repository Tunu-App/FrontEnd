export const amSleepQuestions = [
  {
    id: 1,
    question: "What time did you go to bed?",
    options: { inputType: "TIME", values: [""] },
    helperText: "",
  },

  {
    id: 2,
    question: "How long does it take you to fall asleep after you go to bed?",
    options: {
      helperText: "",
      inputType: "BUTTON",
      values: [
        "I fall asleep immediately",
        "I fall asleep within 20 minutes",
        "It takes more than 20 minutes",
      ],
    },
  },
  {
    id: 3,
    question: "On average, how many times do you wake up during sleep?",
    options: {
      helperText: "",
      inputType: "BUTTON",
      values: ["Less than thrice", "Three times or more"],
    },
  },
  {
    id: 4,
    question:
      "How long does it take you to go back to sleep after an interruption?",
    helperText: "",
    options: {
      inputType: "BUTTON",
      values: ["20 minutes or less", "More than 20 minutes"],
    },
  },
  {
    id: 5,
    question: "What time do you finally wake up from sleep?",
    options: {
      helperText: "",
      inputType: "TIME",
      values: [""],
    },
  },
  {
    id: 6,
    question: "Did you use any medications or substances to aid sleep?",
    options: {
      helperText: "",
      inputType: "BUTTON",
      values: ["Yes", "No"],
    },
  },
  {
    id: 7,
    question: "How would describe the quality of your sleep?",
    options: {
      helperText:
        "A good way to know this is by assessing how refreshed you feel upon waking up.",
      inputType: "BUTTON",
      values: ["Excellent", "Average", "Poor"],
    },
  },
  {
    id: 8,
    question: "Did you wake up with a headache?",
    options: {
      helperText:
        "A good way to know this is by assessing how refreshed you feel upon waking up.",
      inputType: "BUTTON",
      values: ["Yes", "No"],
    },
  },
];
export const pmSleepQuestions = [
  {
    id: 1,
    question: "Did you take day time naps?",
    options: { inputType: "BUTTON", values: ["Yes", "No"] },
    helperText: "",
  },

  {
    id: 2,
    question: "Did you feel sleepy during the day?",
    options: {
      helperText: "",
      inputType: "BUTTON",
      values: ["Yes", "No"],
    },
  },
  {
    id: 3,
    question: "Did you take any coffee in the last 6 hours?",
    options: {
      helperText: "",
      inputType: "BUTTON",
      values: ["Yes", "No"],
    },
  },
  {
    id: 4,
    question: "Did you take any alcohol in the last six hours?",
    helperText: "",
    options: {
      inputType: "BUTTON",
      values: ["Yes", "No"],
    },
  },
];
