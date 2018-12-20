export const LightningTalkTypes = {
  GURU_FE_MEETING: "GURU_FE_MEETING",
};

export const lightningTalks = [
  {
    date: "Dec. 2018",
    deck:
      "https://docs.google.com/presentation/d/1YGxkB5c41sFidbBLbxwL4HJZ7VlPxTjnMkMvGs2bqIU/edit?usp=sharing",
    description:
      "As front-end developers, we use a lot tools to get our work done. One of the most powerful is JSX, a JavaScript language extension.",
    link: "https://www.getguru.com",
    title: "What the heck is JSX?",
    type: LightningTalkTypes.GURU_FE_MEETING,
  },
  {
    date: "Aug. 2018",
    deck:
      "https://docs.google.com/presentation/d/1srXZjj9euhrSuJdFEOV6sV0qPK3ZeQB3465v_S56axQ/edit?usp=sharing",
    description:
      "In React, props and state are updated asynchronously. This makes their  values unreliable when calculating state and can cause unexpected behavior.",
    link: "https://www.getguru.com",
    title: "Functional setState in React",
    type: LightningTalkTypes.GURU_FE_MEETING,
  },
];
