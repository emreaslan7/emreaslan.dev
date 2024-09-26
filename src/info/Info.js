// import self from "../img/self.png"
import self from "../img/self.png";
import mock1 from "../img/projects/HearthHue-mockup.png";
import mock2 from "../img/projects/ethscansimply-mockup.png";
import mock3 from "../img/projects/spendbitcoin-mockup.png";
import mock4 from "../img/projects/removiect-mockup.png";
import mock5 from "../img/projects/robopunksnft-mockup.png";
import mock6 from "../img/projects/metaversemarketplace-mockup.png";
import mock7 from "../img/projects/twitella-mockup.png";
import mock8 from "../img/projects/wifg-mockup.png";
import mock9 from "../img/projects/securify-mockup.png";

// import emreImg from "../img/emre.png";

import articleImg01 from "../img/articles/article01.png";
import articleImg02 from "../img/articles/article02.png";
import articleImg03 from "../img/articles/article03.png";
import articleImg04 from "../img/articles/article04.png";
import articleImg05 from "../img/articles/article05.png";
import articleImg06 from "../img/articles/article06.png";
import articleImg07 from "../img/articles/article07.png";
import articleImg08 from "../img/articles/article08.png";

// export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let colors = ["#92000a", "#E9967A"];

export const info = {
  firstName: "Emre",
  lastName: "Aslan",
  initials: "EA", // the example uses first and last, but feel free to use three or more if you like.
  avatarImage: self,
  position: "a Web3 Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
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
  portfolio: [
    {
      title: "Securify",
      descriptionProject: `Securify is an easy-to-use blockchain wallet designed for associations, companies and communities. You can create multiple wallets, group them and transfer USDC between different blockchains. All your transactions are recorded transparently on the blockchain.`,
      descriptionYou: ``,
      live: "https://securify-0.vercel.app/",
      source: "https://github.com/emreaslan7/securify",
      image: mock9,
      tags: ["Hackhathon", "Web3", "Nextjs"],
    },
    {
      title: "WIFG",
      descriptionProject: `The Solana Blockchain Data Explorer provides a user-friendly interface and real-time data, analyze, and understand blockchain information with ease.`,
      descriptionYou: `This Next.js-based project visualizes Solana blockchain data, and its modern interface, built with tools like Shadcn.ui, Tailwind CSS, and Hello Moon, is inspired by the "Dog Wif Hat" meme.`,
      live: "https://wifg-solana-explorer.vercel.app/",
      source: "https://github.com/emreaslan7/wifg-solana-explorer",
      image: mock8,
      tags: ["Web3", "Nextjs"],
    },
    {
      title: "Twitella",
      descriptionProject: `Twitella is a cutting-edge MERN (MongoDB, Express.js, React, Node.js) stack application that empowers users to connect, share, and engage in meaningful conversations.`,
      descriptionYou: `Whether you're looking to stay updated on the latest trends, share your thoughts, or connect with like-minded individuals, Twitella provides a seamless platform to express yourself.`,
      live: "https://twitella.vercel.app/",
      source: "https://github.com/emreaslan7/twitella",
      image: mock7,
      tags: ["Web3", "Nextjs"],
    },
    {
      title: "MetaverseMarketplace",
      descriptionProject: `MetaverseMarketplace allows artists and photographers to showcase and sell their artwork on the Polygon network. Also, art enthusiasts can explore the collections and buy the pieces they want.`,
      descriptionYou: `By writing smart contracts using Solidity and Hardhat, I aimed to enhance my skills in smart contract development, while also refining my expertise in Next.js and Tailwind CSS for creating a seamless user experience.`,
      live: "https://nftmarketplacepolygon.vercel.app/",
      source: "https://github.com/emreaslan7/nftmarketplacepolygon",
      image: mock6,
      tags: ["Web3", "Nextjs"],
    },
    {
      title: "RoboPunksNFT",
      descriptionProject: `It's 2078. Can the RoboPunks NFT save humans from destructive rampant NFT speculation? Mint RoboPunks to find out...`,
      descriptionYou: `This project is developed for improving ERC721 NFT contracts, solidity, hardhat and openzeppelin`,
      live: "https://robo-punks-nft-git-master-emreaslan7.vercel.app/",
      source: "https://github.com/emreaslan7/RoboPunksNFT-mintingwebsite",
      image: mock5,
      tags: ["Web3", "Nextjs"],
    },
    {
      title: "HearthHue",
      descriptionProject: `HearthHue is a charity organization aimed at collecting donations from people to help those in need.

            The project allows users to donate Ether (ETH), which are automatically stored and managed through a smart contract.`,
      descriptionYou: `This project is developed for improving Hardhat skills, learning smart contract testing.`,
      live: "https://hearth-hue.vercel.app/",
      source: "https://github.com/emreaslan7/ether-donation-dapp",
      image: mock1,
      tags: ["Web3", "Nextjs"],
    },
    {
      title: "ETHscanSimply",
      descriptionProject: `An easy-to-use interface for exploring Ethereum. Ideal for beginners and kids!
            Many people can use this interface to explore ethereum blockchain without having to worry about confusing things.`,
      descriptionYou: `This project is developed for improving Ethers.js skills, learning deep dive Next.js and ChakraUI.`,

      live: "https://ethscansimply.vercel.app/",
      source: "https://github.com/emreaslan7/EthScanSimply",
      image: mock2,
      tags: ["Web3", "Nextjs"],
    },
    {
      title: "Spend Bitcoin",
      descriptionProject: `Experience the Rise of Bitcoin! If you had 1 bitcoin in any year, what would you buy?

            Explore the historical price increases of Bitcoin and use your strategy to decide which year's investment is the best while having fun!`,
      descriptionYou: `This project is developed for improving React-Redux skills, learning deep dive TailwindCSS.`,

      live: "https://spend-bitcoin.vercel.app/",
      source: "https://github.com/emreaslan7/spend-bitcoin",
      image: mock3,
      tags: ["Web3", "Nextjs"],
    },
    {
      title: "Removiect",
      descriptionProject: `Removiect is a personal movie tracking application.

            You can search for any movie and and find information about them.`,
      descriptionYou: `Removiect is simply a project to develop React & tailwind skills.`,

      live: "https://removiect.netlify.app/",
      source: "https://github.com/emreaslan7/react-movie",
      image: mock4,
      tags: ["Hackhathon", "Web3", "Nextjs"],
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
  ],
  articles: [
    {
      title:
        "Upgradeable Smart Contracts in Solidity: A Practical Guide with Hardhat and OpenZeppelin",
      description:
        "Upgradability using Hardhat and OpenZeppelin. This repository serves as a hands-on guide for developers aiming to master the art of contract evolution",
      image: articleImg08,
      link: "https://emreaslan.hashnode.dev/upgradeable-smart-contracts-in-solidity-a-practical-guide-with-hardhat-and-openzeppelin",
      readTime: "10 minutes",
    },
    {
      title:
        "Scaling Ethereum Securely: Exploring the Innovation of Optimistic Rollups and Fraud Proofs",
      description:
        "Dive into the Optimistic Rollups and Fraud Proofs world, revolutionizing Ethereum's scalability while preserving utmost security and decentralization.",
      image: articleImg07,
      link: "https://emreaslan.hashnode.dev/scaling-ethereum-securely-exploring-the-innovation-of-optimistic-rollups-and-fraud-proofs",
      readTime: "16 minutes",
    },
    {
      title:
        "Double Spending Problem But Through The Eyes of Satoshi and Vitalik",
      description:
        "What is double spending? Can it be prevented in a completely transparent and confidential manner? Different solutions brought by Satoshi and Vitalik",
      image: articleImg06,
      link: "https://emreaslan.hashnode.dev/double-spending-problem-but-through-the-eyes-of-satoshi-and-vitalik",
      readTime: "9 minutes",
    },
    {
      title:
        "A Deep Dive into the Digital Signatures, Encryption, and Hash Function",
      description:
        "Digital signatures, Symmetric and Asymmetric Encryption, Hash Function, RSA and Elliptic Curve Algorithm, and more...",
      image: articleImg05,
      link: "https://emreaslan.hashnode.dev/a-deep-dive-into-the-digital-signatures-encryption-and-hash-function",
      readTime: "12 minutes",
    },
    {
      title: "What are Rentables NFTs? Sample Smart Contract With EIP-4907",
      description:
        "Using the EIP-4907, we learn about the structure of a rentable NFT by creating a simple smart contract.",
      image: articleImg04,
      link: "https://emreaslan.hashnode.dev/what-are-rentables-nfts-eip-4907",
      readTime: "7 minutes",
    },
    {
      title: "The Philosophy of Ownership and Decentralization in Web3",
      description:
        "From the perspective of the ownership and decentralization of the web.",
      image: articleImg03,
      link: "https://emreaslan.hashnode.dev/the-philosophy-of-web3",
      readTime: "8 minutes",
    },
    {
      title: "What are Soulbound Tokens SBT?",
      description:
        "Soulbound tokens are opening the door to a whole new era in the ownership and transfer of digital assets; Let's delve deeper into the workings, benefits and potential future implications of Soulbound technology.",
      image: articleImg02,
      link: "https://emreaslan.hashnode.dev/what-are-soulbound-tokens-sbt",
      readTime: "4 minute",
    },
    {
      title: "What are the Ethereum Protocols ERC || EIP",
      description:
        "So what, if I wanted to, I could set a standard and revolutionize the whole ethereum? Did anyone that?",
      image: articleImg01,
      link: "https://emreaslan.hashnode.dev/what-are-the-ethereum-protocols-erc-eip",
      readTime: "3 minute",
    },
  ],
};
