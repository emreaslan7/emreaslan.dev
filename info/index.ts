import self from "@/info/img/self.png";

export const colors = ["#92000a", "#E9967A"];

export const info = {
  firstName: "Emre",
  lastName: "Aslan",
  initials: "EA",
  avatarImage: self,
  position: "a Web3 Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🍵",
      text: "fueled by tea",
    },
    {
      emoji: "🌎",
      text: "based in the Istanbul, Turkey",
    },
    {
      emoji: "✍️",
      text: "Writing About the web3 & AI Stuff",
    },
    {
      emoji: "📧",
      text: "emreaslan.eth@gmail.com",
    },
  ],
  bio: `Electrical and Electronics Engineering student with a strong foundation in programming, artificial intelligence, and image processing.

        Passionate about applying engineering principles to real-world challenges, with hands-on experience in AI projects, image processing, and full-stack software development.

        Currently focusing on deep learning, machine learning, and blockchain development.

        Seeking opportunities to further develop my technical skills and contribute to innovative solutions.

        Let's connect and explore potential collaborations.`,
  skills: {
    proficientWith: [
      "javascript",
      "python",
      "tensorflow",
      "react",
      "nodejs",
      "express",
      "mongodb",
      "redux",
      "solidity",
      "hardhat",
      "ethers",
      "nextjs",
      "tailwind",
    ],
    exposedTo: ["nodejs", "adobe illustrator"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "music",
      emoji: "🎧",
    },
    {
      label: "swimming",
      emoji: "🏊‍♂️",
    },
    {
      label: "fitness",
      emoji: "💪",
    },
    // {
    //     label: 'camping',
    //     emoji: '🏕️'
    // },
    // {
    //     label: 'travel',
    //     emoji: '🗺️'
    // },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
};
