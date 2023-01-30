


export const sleepTrackerQuestions = [
  {
    id: 1,
    question: "Did you take day time naps yesterday?",
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
    id: 2,
    question: "Did you feel sleepy during the day yesterday?",
    options: {
      questionId: 2,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
  {
    id: 3,
    question: "Did you take any coffee in the last 6 hours before bed?",
    options: {
      questionId: 3,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
  {
    id: 4,
    question: "Did you take any alcohol in the last six hours before bed?",
    options: {
      questionId: 4,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
  {
    id: 5,
    question: "What time did you go to bed?",
    options: {
      questionId: 5,
      inputType: "TIME",
      timeType: "SLEEPTIME",
      values: [""],
    },
    helperText: "",
  },

  {
    id: 6,
    question: "How long does it take you to fall asleep after you go to bed?",
    options: {
      questionId: 6,
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
    id: 7,
    question: "On average, how many times do you wake up during sleep?",
    options: {
      questionId: 7,
      helperText: "",
      inputType: "BUTTON",
      values: [
        { text: "Less than thrice", databaseEntry: "<3" },
        { text: "Three times or more", databaseEntry: ">3" },
      ],
    },
  },
  {
    id: 8,
    question:
      "How long does it take you to go back to sleep after an interruption?",
    helperText: "",
    options: {
      questionId: 8,
      inputType: "BUTTON",
      values: [
        { text: "20 minutes or less", databaseEntry: "<20" },
        { text: "More than 20 minutes", databaseEntry: ">20" },
      ],
    },
  },
  {
    id: 9,
    question: "What time do you finally wake up from sleep?",
    options: {
      questionId: 9,
      helperText: "",
      inputType: "TIME",
      timeType: "WAKETIME",
      values: [""],
    },
  },
  {
    id: 10,
    question: "Did you use any medications or substances to aid sleep?",
    options: {
      questionId: 10,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
  {
    id: 11,
    question: "How would describe the quality of your sleep?",
    options: {
      questionId: 11,
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
    id: 12,
    question: "Did you wake up with a headache?",
    options: {
      questionId: 12,
      inputType: "BUTTON",
      values: [
        { text: "Yes", databaseEntry: true },
        { text: "No", databaseEntry: false },
      ],
    },
    helperText: "",
  },
];
