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
      text: "Writing About the Web3 Stuff",
    },
    {
      emoji: "📧",
      text: "emreaslan.eth@gmail.com",
    },
  ],
  bio: "Hello, I'm Emre, focusing on smart contract development and web solutions. Intrigued by web3 tech, including zk technology. Dedicated to creating innovative projects that contribute to the tech landscape. Let's connect and explore potential collaborations.",
  skills: {
    proficientWith: [
      "javascript",
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
      "chakra-ui",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
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
