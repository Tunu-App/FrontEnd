export const amSleepQuestions = [
  {
    id: 1,
    question: "What time did you go to bed?",
    options: { inputType: "TIME", timeType: "SLEEPTIME", values: [""] },
    helperText: "",
  },

  {
    id: 2,
    question: "How long does it take you to fall asleep after you go to bed?",
    options: {
      helperText: "",
      inputType: "BUTTON",
      values: [
        { text: "I fall asleep immediately", databaseEntry: "0" },
        { text: "I fall asleep within 20 minutes", databaseEntry: "< 20" },
        { text: "It takes more than 20 minutes", databaseEntry: ">20" },
      ],
    },
  },
  {
    id: 3,
    question: "On average, how many times do you wake up during sleep?",
    options: {
      helperText: "",
      inputType: "BUTTON",
      values: [
        { text: "Less than thrice", databaseEntry: "<3" },
        { text: "Three times or more", databaseEntry: ">3" },
      ],
    },
  },
  {
    id: 4,
    question:
      "How long does it take you to go back to sleep after an interruption?",
    helperText: "",
    options: {
      inputType: "BUTTON",
      values: [
        { text: "20 minutes or less", databaseEntry: "<20" },
        { text: "More than 20 minutes", databaseEntry: ">20" },
      ],
    },
  },
  {
    id: 5,
    question: "What time do you finally wake up from sleep?",
    options: {
      helperText: "",
      inputType: "TIME",
      timeType: "WAKETIME",
      values: [""],
    },
  },
  // {
  //   id: 6,
  //   question: "Did you use any medications or substances to aid sleep?",
  //   options: {
  //     helperText: "",
  //     inputType: "BUTTON",
  //     values: ["Yes", "No"],
  //   },
  // },
  // {
  //   id: 7,
  //   question: "How would describe the quality of your sleep?",
  //   options: {
  //     helperText:
  //       "A good way to know this is by assessing how refreshed you feel upon waking up.",
  //     inputType: "BUTTON",
  //     values: ["Excellent", "Average", "Poor"],
  //   },
  // },
  // {
  //   id: 8,
  //   question: "Did you wake up with a headache?",
  //   options: {
  //     helperText:
  //       "A good way to know this is by assessing how refreshed you feel upon waking up.",
  //     inputType: "BUTTON",
  //     values: ["Yes", "No"],
  //   },
  // },
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

export const sleepTrackerQuestions = [
  {
    id: 1,
    question: "Did you take day time naps?",
    options: {
      questionId: 1,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
  {
    id: 1,
    question: "Did you feel sleepy during the day yesterday?",
    options: {
      questionId: 1,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
  {
    id: 1,
    question: "Did you take any coffee in the last 6 hours before bed?",
    options: {
      questionId: 1,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
  {
    id: 1,
    question: "Did you take any alcohol in the last six hours before bed?",
    options: {
      questionId: 1,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
  {
    id: 1,
    question: "What time did you go to bed?",
    options: {
      questionId: 1,
      inputType: "TIME",
      timeType: "SLEEPTIME",
      values: [""],
    },
    helperText: "",
  },

  {
    id: 2,
    question: "How long does it take you to fall asleep after you go to bed?",
    options: {
      questionId: 2,
      helperText: "",
      inputType: "BUTTON",
      values: [
        { text: "I fall asleep immediately", databaseEntry: "0" },
        { text: "I fall asleep within 20 minutes", databaseEntry: "< 20" },
        { text: "It takes more than 20 minutes", databaseEntry: ">20" },
      ],
    },
  },
  {
    id: 3,
    question: "On average, how many times do you wake up during sleep?",
    options: {
      questionId: 3,
      helperText: "",
      inputType: "BUTTON",
      values: [
        { text: "Less than thrice", databaseEntry: "<3" },
        { text: "Three times or more", databaseEntry: ">3" },
      ],
    },
  },
  {
    id: 4,
    question:
      "How long does it take you to go back to sleep after an interruption?",
    helperText: "",
    options: {
      questionId: 4,
      inputType: "BUTTON",
      values: [
        { text: "20 minutes or less", databaseEntry: "<20" },
        { text: "More than 20 minutes", databaseEntry: ">20" },
      ],
    },
  },
  {
    id: 5,
    question: "What time do you finally wake up from sleep?",
    options: {
      questionId: 5,
      helperText: "",
      inputType: "TIME",
      timeType: "WAKETIME",
      values: [""],
    },
  },
  {
    id: 1,
    question: "Did you use any medications or substances to aid sleep?",
    options: {
      questionId: 1,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
  {
    id: 1,
    question: "How would describe the quality of your sleep?",
    options: {
      questionId: 1,
      inputType: "BUTTON",
      values: [
        { text: "Excellent", databaseEntry: "Excellent" },
        { text: "Average", databaseEntry: "Average" },
        { text: "Poor", databaseEntry: "Poor" },
      ],
    },
    helperText:
      "A good way to know this is by assessing how refreshed you feel upon waking up.",
  },
  {
    id: 1,
    question: "Did you wake up with a headache?",
    options: {
      questionId: 1,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
];
