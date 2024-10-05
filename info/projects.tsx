import mock1 from "@/info/img/projects/HearthHue-mockup.png";
import mock2 from "@/info/img/projects/ethscansimply-mockup.png";
import mock3 from "@/info/img/projects/spendbitcoin-mockup.png";
import mock4 from "@/info/img/projects/removiect-mockup.png";
import mock5 from "@/info/img/projects/robopunksnft-mockup.png";
import mock6 from "@/info/img/projects/metaversemarketplace-mockup.png";
import mock7 from "@/info/img/projects/twitella-mockup.png";
import mock8 from "@/info/img/projects/wifg-mockup.png";
import mock9 from "@/info/img/projects/securify-mockup.png";

export const projects = [
  {
    description: "",
    title: "Securify",
    src: mock9,
    ctaText: "Visit",
    ctaLink: "https://securify-0.vercel.app/",
    content: () => {
      return (
        <p>
          Securify is an easy-to-use blockchain wallet designed for
          associations, companies and communities. You can create multiple
          wallets, group them and transfer USDC between different blockchains.
          All your transactions are recorded transparently on the blockchain.
        </p>
      );
    },
    source: "https://github.com/emreaslan7/securify",
    tags: ["Hackathon", "Web3", "Fullstack", "Circle"],
    isHackhathonWinner: true,
    tech: [
      "typescript",
      "nextjs",
      "tailwindcss",
      "shadcn",
      "mongodb",
      "prisma",
      "nextauth",
      "web3js",
    ],
  },
  {
    description: "",
    title: "WIFG",
    src: mock8,
    ctaText: "Visit",
    ctaLink: "https://wifg-solana-explorer.vercel.app/",
    content: () => {
      return (
        <p>
          The Solana Blockchain Data Explorer provides a user-friendly interface
          and real-time data, analyze, and understand blockchain information
          with ease.
          <br />
          <br />
          This Next.js-based project visualizes Solana blockchain data, and its
          modern interface, built with tools like Shadcn.ui, Tailwind CSS, and
          Hello Moon, is inspired by the "Dog Wif Hat" meme.
        </p>
      );
    },
    source: "https://github.com/emreaslan7/wifg-solana-explorer",

    tags: ["Hackathon", "Frontend", "Solana"],
    isHackhathonWinner: false,

    tech: ["typescript", "nextjs", "tailwindcss", "shadcn", "web3js"],
  },
  {
    description: "",
    title: "Twitella",
    src: mock7,
    ctaText: "Visit",
    ctaLink: "https://twitella.vercel.app/",
    content: () => {
      return (
        <p>
          Twitella is a cutting-edge MERN (MongoDB, Express.js, React, Node.js)
          stack application that empowers users to connect, share, and engage in
          meaningful conversations.
          <br />
          <br />
          Whether you're looking to stay updated on the latest trends, share
          your thoughts, or connect with like-minded individuals, Twitella
          provides a seamless platform to express yourself.
        </p>
      );
    },
    source: "https://github.com/emreaslan7/twitella",

    tags: ["Fullstack", "MERN", "Learning"],
    isHackhathonWinner: false,

    tech: [
      "javascript",
      "react",
      "nodejs",
      "materialui",
      "redux",
      "mongodb",
      "expressjs",
    ],
  },
  {
    description: "",
    title: "MetaverseMarketplace",
    src: mock6,
    ctaText: "Visit",
    ctaLink: "https://nftmarketplacepolygon.vercel.app/",
    content: () => {
      return (
        <p>
          MetaverseMarketplace allows artists and photographers to showcase and
          sell their artwork on the Polygon network. Also, art enthusiasts can
          explore the collections and buy the pieces they want.
          <br />
          <br />
          By writing smart contracts using Solidity and Hardhat, I aimed to
          enhance my skills in smart contract development, while also refining
          my expertise in Next.js and Tailwind CSS for creating a seamless user
          experience.
        </p>
      );
    },
    source: "https://github.com/emreaslan7/nftmarketplacepolygon",

    tags: ["Web3", "Frontend", "Polygon", "Learning"],
    isHackhathonWinner: false,

    tech: [
      "javascript",
      "nextjs",
      "tailwindcss",
      "solidity",
      "ethersjs",
      "hardhat",
    ],
  },
  {
    description: "",
    title: "RoboPunksNFT",
    src: mock5,
    ctaText: "Visit",
    ctaLink: "https://robo-punks-nft-git-master-emreaslan7.vercel.app/",
    content: () => {
      return (
        <p>
          It's 2078. Can the RoboPunks NFT save humans from destructive rampant
          NFT speculation? Mint RoboPunks to find out...
          <br />
          <br />
          This project is developed for improving ERC721 NFT contracts,
          solidity, hardhat and openzeppelin
        </p>
      );
    },
    source: "https://github.com/emreaslan7/RoboPunksNFT-mintingwebsite",

    tags: ["Web3", "Frontend", "Ethereum", "Learning"],
    isHackhathonWinner: false,

    tech: [
      "javascript",
      "react",
      "solidity",
      "ethersjs",
      "hardhat",
      "chakraui",
    ],
  },
  {
    description: "",
    title: "HearthHue",
    src: mock1,
    ctaText: "Visit",
    ctaLink: "https://hearth-hue.vercel.app/",
    content: () => {
      return (
        <p>
          HearthHue is a charity organization aimed at collecting donations from
          people to help those in need. The project allows users to donate Ether
          (ETH), which are automatically stored and managed through a smart
          contract.
          <br />
          <br />
          This project is developed for improving Hardhat skills, learning smart
          contract testing.
        </p>
      );
    },
    source: "https://github.com/emreaslan7/ether-donation-dapp",

    tags: ["Web3", "Frontend", "Ethereum", "Learning"],
    isHackhathonWinner: false,

    tech: ["javascript", "react", "solidity", "hardhat", "ethersjs"],
  },
  {
    description: "",
    title: "ETHscanSimply",
    src: mock2,
    ctaText: "Visit",
    ctaLink: "https://ethscansimply.vercel.app/",
    content: () => {
      return (
        <p>
          An easy-to-use interface for exploring Ethereum. Ideal for beginners
          and kids! Many people can use this interface to explore ethereum
          blockchain without having to worry about confusing things.
          <br />
          <br />
          This project is developed for improving Ethers.js skills, learning
          deep dive Next.js and ChakraUI.
        </p>
      );
    },
    source: "https://github.com/emreaslan7/EthScanSimply",

    tags: ["Web3", "Frontend", "Ethereum"],
    isHackhathonWinner: false,

    tech: ["javascript", "nextjs", "ethersjs", "chakraui"],
  },
  {
    description: "",
    title: "Spend Bitcoin",
    src: mock3,
    ctaText: "Visit",
    ctaLink: "https://spend-bitcoin.vercel.app/",
    content: () => {
      return (
        <p>
          Experience the Rise of Bitcoin! If you had 1 bitcoin in any year, what
          would you buy? Explore the historical price increases of Bitcoin and
          use your strategy to decide which year's investment is the best while
          having fun!
          <br />
          <br />
          This project is developed for improving React-Redux skills, learning
          deep dive TailwindCSS.
        </p>
      );
    },
    source: "https://github.com/emreaslan7/spend-bitcoin",

    tags: ["Frontend"],
    isHackhathonWinner: false,

    tech: ["javascript", "react", "redux", "tailwindcss"],
  },
  {
    description: "",
    title: "Removiect",
    src: mock4,
    ctaText: "Visit",
    ctaLink: "https://removiect.netlify.app/",
    content: () => {
      return (
        <p>
          Removiect is a personal movie tracking application. You can search for
          any movie and and find information about them.
          <br />
          <br />
          Removiect is simply a project to develop React & tailwind skills.
        </p>
      );
    },
    source: "https://github.com/emreaslan7/react-movie",
    tags: ["Frontend", "Learning"],
    isHackhathonWinner: false,
    tech: ["javascript", "react", "tailwindcss"],
  },
  // {
  //     title: "Project 5",
  //     descriptionProject:

  //     `HearthHue is a charity organization aimed at collecting donations from people to help those in need.

  //     The project allows users to donate Ether (ETH), which are automatically stored and managed through a smart contract.`,
  //     descriptionYou: `This project is developed for improving hardhat skills, learning smart contract testing...`,

  //     live: "https://paytonpierce.dev",
  //     source: "https://github.com/paytonjewell",
  //     image: mock5
  // }
];
