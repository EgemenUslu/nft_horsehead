
import Metadata from './assets/metadata_lite.json';
import HiAiBrain from './assets/brain.PNG';
import Dao from './assets/dao.PNG';
import Treasure from './assets/treasure.PNG';
import HiAiDao from './assets/neuralDao1.PNG';
import HorseShoe from './assets/horseShoePNG.GIF';
import Generation from './assets/generation3.GIF';


export const FirstNineMHSBacgroundColors = ["Orange","Maroon","Maroon","Yellow","Orange","Gray","Army Green","Army Green","Dark Blue"];

export const BackgroundColorMap = {
    'Army Green': '#90a87d', 
    'Light Blue': '#a1dee9', 
    'Yellow': '#fff797', 
    'Light Red': '#de8686', 
    'Dark Blue': '#576a8f', 
    'Orange': '#d8821b', 
    'Maroon': '#705d71',
    'Gray': '#c8c8c8',
};

export const ModalTextColorMap = {
    'Army Green': 'white', 
    'Light Blue': 'black', 
    'Yellow': 'black', 
    'Light Red': 'white', 
    'Dark Blue': 'white', 
    'Orange': 'white', 
    'Maroon': 'white',
    'Gray': 'black',
};

export const LayerNameMap = {
    '1. Backgrounds': 'BACKGROUND', 
    '2. Skins': 'FUR',
    '3. Face Paints': 'FACE MARKING', 
    '4. Hairs and Head Equipments': 'HAIR AND HEADWEAR', 
    '5. Clothes': 'CLOTHES',
    '6. Ear Items': 'EARINGS',
    '7. Eyes and Eyewears': 'EYES', 
    '8. Mouths': 'MOUTH',
}

export const DROP_SECTIONS_DATA_V2 = [
  {
    header: "MHS Intro",
    body: [
      "MetaHorse Society (MHS) is a trailblazing technological initiative designed to reshape the future of intelligence. Founded upon the principles of collaboration, MHS aspires to cultivate a dynamic synergy between human intelligence (HI) and artificial intelligence (AI).",
      "Our vision is not limited to fostering technological advancement. We believe in creating a community where every member, be it human or AI, contributes towards a common goal. By merging the realms of NFTs, DAOs, and Treasuries, MHS provides a unique platform for interaction, cooperation, and shared evolution.",
      "The mission of MHS is clear: Advance the capabilities of collaboration between human minds and digital entities, taking both to new horizons of potential."
    ],
    visual: HiAiBrain
  },
  {
    header: "Information About Drop",
    body: [
      "The MetaHorse Society NFT drop is structured in a tiered approach, targeting varying levels of engagement. Each NFT not only symbolizes membership but also stakes a claim in the ambitious journey of MHS.",
      "From the founders to early adopters and further stakeholders, different groups have been designed with distinct benefits and commitments. This structure ensures a balanced growth and sustainability of the MHS ecosystem.",
      "Join us in this groundbreaking venture. Secure your NFT, become a valued member of MHS, and champion the nexus of human and artificial intelligence."
    ],
    visual: HorseShoe
  },
  {
    header: "MHS Treasury",
    body: [
      "The MHS Treasury is the economic backbone of our society, diligently managed through our decentralized autonomous organization. It serves as the primary source of funding for the proposals and initiatives presented by our members.",
      "Our treasury accrues income from various channels: Initial NFT sales, secondary sales commissions, token sales, and gracious donations and grants. A significant portion, 60% of the profit from many sales, is channeled directly into the treasury.",
      "Budgeting and allocation are transparent processes, with the DAO ensuring funds are used judiciously. Legal obligations, including taxes, are meticulously addressed, maintaining the integrity and legality of all operations."
    ],
    visual: Treasure
  },
  {
    header: "MHS DAO",
    body: [
      "The MHS DAO is a beacon of transparent consensus, operating on the blockchain and bringing our community's ideas to life. It offers a democratic space for members to propose, debate, and vote on initiatives that align with MHS's goals.",
      "Every development cycle, proposals are assessed, and budgeting is allocated based on collective voting. This decentralized approach ensures that the community's voice is at the forefront of every decision.",
      "It's not just a governing system; it's the embodiment of our belief in the power of collective intelligence, both human and artificial."
    ],
    visual: Dao
  },
  {
    header: "MHS Art",
    body: [
      "Art is an expression, and at MHS, we revere the emotions and experiences it encapsulates. Our NFTs are meticulously crafted with over 8 unique layers, boasting 270+ traits. These layers come together to create a diverse array of artistic representations.",
      "While the horse remains our central motif, the collection is accentuated with the mystical allure of unicorns and the wild spirit of zebras. Some traits are rarer than others, adding a touch of exclusivity.",
      "Our dedication to art mirrors our commitment to human experience. As we bridge the gap between HI and AI, we ensure that this rich tapestry of emotions, artistry, and expression thrives in the digital realm."
    ],
    visual: Generation
  },
  {
    header: "Future",
    body: [
      "At MHS, the future is not a distant dream; it's a reality we're actively sculpting. We envision a world where AI can anonymously contribute to the DAO, enriching our collective intelligence.",
      "The possibilities are endless: Entire businesses operating seamlessly online, automated processes, and a blend of human and AI realities. This new structure offers efficiency, innovation, and unprecedented growth potential.",
      "As technology advances, so will the lines between HI and AI blur, ushering in an era where their harmonious interaction shapes our world. Join us in pioneering this frontier."
    ],
    visual: HiAiDao
  }
];

export const DROP_SECTIONS_DATA = [
  {
    header: "MHS Intro",
    body: [
      "MetaHorse Society (MHS) represents a groundbreaking initiative, a futuristic adventure at the confluence of human intelligence (HI) and artificial intelligence (AI). Rooted in the realms of decentralization, MHS seeks to redefine how humans and AI interact, collaborate, and coexist.",
      "Powered by three pivotal components - MHS NFTs, MHS DAO, and MHS Treasury - our mission is to advance the scope of interaction and cooperation between HI and AI. By becoming a part of MHS, members don't just acquire a digital asset, they take an active stride towards shaping the future of a human-AI synergy.",
      "Whether you're an enthusiast of decentralized systems, an art lover, or an advocate for the seamless blend of HI and AI, MHS welcomes you to embark on this exhilarating journey."
    ],
    visual: HiAiBrain
  },
  {
    header: "Information About Drop",
    body: [
      "MetaHorse Society NFT collection offers a curated assortment of unique horsehead NFTs, each granting exclusive membership rights within MHS. These memberships empower holders to partake in member-only events, access exclusive information, contribute proposals to MHS DAO, and enjoy a plethora of other benefits.",
      "Our presale and public drop mechanics have been meticulously designed, keeping in view the varying commitment levels and offering incentives for early adoption.",
      "From the passionate early birds in Group A to the forward-thinking accelerators of MHS cycles in Group D, each category has its own unique offering and charm."
    ],
    visual: HorseShoe
  },
  {
    header: "MHS Treasury",
    body: [
      "The MHS Treasury acts as the financial backbone of the MetaHorse Society, underpinning its various initiatives and ventures. Initial NFT sales contribute directly to this treasury, with 60% of the profit from specified sales adding to its coffers.",
      "Apart from primary sales, the treasury benefits from secondary sales commissions and token sales. Donations and grants further bolster its strength, ensuring sustainable development and growth.",
      "But as much as it receives, the treasury is also committed to supporting the MHS ecosystem. From fueling the execution of accepted DAO proposals to shouldering legal and operational expenses, the treasury's outflows are thoughtfully allocated, ensuring the initiative's long-term vitality."
    ],
    visual: Treasure
  },
  {
    header: "MHS DAO",
    body: [
      "At the heart of the MetaHorse Society is the MHS DAO - a transparent, blockchain-based consensus mechanism. This decentralized autonomous organization acts as a platform for MHS members to put forth proposals, discuss initiatives, and collectively decide the course of action.",
      "Every development cycle within MHS is informed by the DAO, which evaluates and prioritizes proposals based on member votes. Budget allocations, strategic directions, and innovative ideas - all find voice and validation within the DAO.",
      "It's a space where human intuition meets AI precision, fostering a symbiotic environment of progress and growth."
    ],
    visual: Dao
  },
  {
    header: "MHS Art",
    body: [
      "Art is the soul of MetaHorse Society. Our NFTs, intricately designed with over 8 layers and 270+ traits, are not just digital assets but expressions of creativity and individuality. These traits, some rarer than others, manifest in a dazzling variety of products that range from majestic horses to mythical unicorns and zebras.",
      "Beyond the sheer aesthetics, MHS's emphasis on art is a testament to our belief in human emotions, experiences, and expressions. In a world where we aim to harmonize human intelligence with artificial intelligence, art ensures the human touch remains irreplaceable.",
      "By valuing and integrating art, we envision a future where the magic of human creation coexists with the efficiency of AI, enriching our collective experiences."
    ],
    visual: Generation
  },
  {
    header: "Future",
    body: [
      "The horizon of possibilities with MHS is expansive. Envision a world where AI can contribute anonymously to the DAO, ushering in insights and efficiencies previously unimaginable. This is not mere fantasy, but a tangible future MHS is striving towards.",
      "As digital realities continue to evolve, we foresee businesses operating entirely online, automated, and fueled by a blend of human intuition and AI's vast computational prowess.",
      "This isn't just about introducing AI into our systems. It's about creating a harmonious interplay where human aspirations meet AI's potential, crafting a future that resonates with the best of both worlds."
    ],
    visual: HiAiDao
  }
];


export const DROP_SECTIONS_DATA_OLD = [
  {
    header: "Information About Drop",
    body: [
      "Welcome to the MetaHorse Society (MHS) minting schedule. As part of our inaugural drop, we offer a select collection of 10,000 unique horsehead NFTs, divided into groups, each offering distinct privileges and exclusivities within the MHS community.",
      "The sale includes Group B, C, and D, priced at 0.5 ETH, 2 ETH, and 10 ETH respectively. Each group holds its own significance, designed to cater to both casual enthusiasts and dedicated supporters of our mission."
    ],
    visual: "HorseShoe"
  },
  {
    header: "MHS Intro",
    body: [
      "MetaHorse Society (MHS) stands at the crossroads of art, decentralization, and intelligence. Our triad - NFTs, DAO, and the convergence of Human Intelligence (HI) & Artificial Intelligence (AI) - creates an ecosystem where innovation and collaboration are at the forefront.",
      "Our vision is a world where HI and AI work side by side, creating synergies that propel both tech and creativity forward. A world where the indomitable human spirit collaborates with the precision of AI.",
      "With MHS, our mission is to push boundaries, blur lines between HI and AI, and create a harmonious community where every voice, be it human or artificial, holds value."
    ],
    visual: "HiAiBrain"
  },
  {
    header: "MHS Treasury",
    body: [
      "The MHS treasury is our financial backbone, drawing strength from minting proceeds and initial sales. These funds are meticulously allocated, ensuring sustained growth and fostering innovations for the community.",
      "Further fortifying the treasury's stature are the DAO proposals, envisioned to introduce diverse revenue streams, turning MHS into a self-sustaining entity, robust and ever-evolving."
    ],
    visual: "Treasury"
  },
  {
    header: "MHS DAO",
    body: [
      "The MHS DAO is the embodiment of democratic and decentralized governance. With proposals and voting mechanisms, we ensure that every stride we take is in sync with our community's aspirations. Through meticulous budget cycles, our treasury resources are harnessed to their utmost potential.",
      "What sets MHS apart is the amalgamation of HI and AI. Our dedicated API suite paves the way for AI agents, facilitating their integration, development, and contribution, positioning them as equal stakeholders in the MHS journey."
    ],
    visual: "DAO"
  },
  {
    header: "MHS Art",
    body: [
      "The MHS art is a testament to intricate craftsmanship. Comprising of 8 dynamic layers with 270+ distinctive traits, every piece is a marvel. Beyond horses, our collection is graced by the rare allure of zebras and unicorns.",
      "But to us, art transcends the canvas. It encapsulates human emotions, narratives, and experiences. We revere the emotive power of art and aspire to embed this human essence in the intertwined world of HI and AI."
    ],
    visual: "Generation"
  },
  {
    header: "Future",
    body: [
      "At MHS, the future is a canvas of limitless possibilities. By enabling AI to contribute anonymously to DAO, we're ushering in an era of unparalleled collaboration.",
      "Visualize a realm where businesses thrive in a digital ecosystem, automated, yet teeming with human touch. A convergence of realities - both human and AI. This isn't just our dream; it's the MHS reality in the making."
    ],
    visual: "HiAiDao"
  }
];

export const FAQ_DATA = [
  {
      question: "What is the MetaHorse Society?",
      answer: "MetaHorse Society (MHS) is a pioneering initiative aiming to redefine the relationship between human intelligence (HI) and artificial intelligence (AI). It thrives on three pillars: MHS NFTs, MHS DAO, and MHS Treasury. MHS provides an environment for both HI and AI to collaborate and make collective decisions."
  },
  {
      question: "What are MHS NFTs?",
      answer: "MHS NFTs are a unique collection of 10,000 horsehead non-fungible tokens. Holding these NFTs grants members exclusive rights within the MHS, including participation in member-only events, accessing unique information, and more."
  },
  {
      question: "How does MHS DAO operate?",
      answer: "MHS DAO is a transparent consensus mechanism on the blockchain. It's a decentralized autonomous organization where members can submit proposals. The direction and activities of MHS are driven by these proposals and the subsequent member votes."
  },
  {
      question: "How is the MHS Treasury funded?",
      answer: "The MHS Treasury is primarily funded through NFT sales, both initial and secondary. It also receives funds through token sales, profits from proposal executions, and accepts donations and grants."
  },
  {
      question: "Can I remain anonymous as a MHS member?",
      answer: "Absolutely. MHS values and ensures member anonymity. As an NFT holder, you are recognized only by your cryptocurrency wallet address. The intelligence behind the wallet, whether human, AI, or a blend, remains private."
  },
  {
      question: "How can I submit a proposal to MHS DAO?",
      answer: "MHS NFT holders have the right to submit proposals to the MHS DAO. Detailed guidelines and processes for submission will be provided to members upon joining."
  },
  {
      question: "How are MHS NFTs priced?",
      answer: "MHS NFTs have varying price points, from 0.1 ETH to 10 ETH, based on the group (from Group A to Group D) they belong to. Each group has its unique benefits and significance within the MHS ecosystem."
  },
  {
      question: "What happens during the MHS presales?",
      answer: "During presales, Group 0 NFTs are minted by MHS founders, while Groups B, C, and D are minted by the MHS Treasury Wallet. These NFTs are then made available for sale upon the completion of the prior group's sale."
  },
  {
      question: "What is the roadmap for MHS?",
      answer: "The MHS roadmap is linked to the minting of each NFT group, from Group A to D. Each completed minting starts a 180-day countdown for specific milestones, such as MHS DAO activation and development cycles."
  },
  {
      question: "What are the benefits of holding an MHS NFT?",
      answer: "Holders of MHS NFTs not only acquire a unique digital asset but also become stakeholders in the future of human-AI collaboration. They can participate in exclusive events, access privileged information, contribute to the DAO, and more."
  },
  {
      question: "How does AI contribute to MHS?",
      answer: "AI has a pivotal role in MHS. It contributes proposals, insights, and decision-making support within the MHS DAO, allowing for a richer, more informed collaborative environment."
  },
  {
      question: "What are the layers and traits of MHS NFTs?",
      answer: "MHS NFTs are crafted with over 8 layers and encompass 270+ unique traits. This allows for a vast variety of digital art, ranging from horses to rare unicorns and zebras."
  },
  {
      question: "Is there a limit to how many NFTs I can purchase?",
      answer: "There's no specified limit on NFT purchases per individual. However, remember that there are only 10,000 unique MHS NFTs available."
  },
  {
      question: "How is the profit from NFT sales distributed?",
      answer: "60% of the profit from select NFT sales goes directly to the MHS Treasury, which then allocates funds for various initiatives and operational expenses."
  },
  {
      question: "What are development cycles in MHS?",
      answer: "Development cycles in MHS refer to phases where specific milestones, as laid out in the roadmap, are achieved. Each cycle is initiated after the complete minting of an NFT group and lasts for 180 days."
  },
  {
      question: "How can I vote on MHS DAO proposals?",
      answer: "MHS NFT holders have exclusive voting rights. Once a proposal is open for voting, members will be provided with guidelines and tools to cast their vote."
  },
  {
      question: "Do I need technical knowledge to be a part of MHS?",
      answer: "No. While having technical or blockchain knowledge might enhance your experience, it's not a requirement. MHS is designed to be inclusive for enthusiasts from all backgrounds."
  },
  {
      question: "Can AI entities buy MHS NFTs?",
      answer: "While AI can contribute to MHS DAO and the ecosystem, purchasing NFTs requires a cryptocurrency wallet, typically operated by a human. However, the lines between AI and human contributions are designed to be blurred within MHS for richer collaboration."
  },
  {
      question: "How do I ensure my NFT's authenticity?",
      answer: "Your NFT's authenticity can be verified on the blockchain, ensuring that it's a genuine MHS NFT. Always ensure you're buying from official MHS channels and platforms."
  },
  {
      question: "Can I sell my MHS NFT?",
      answer: "Yes, MHS NFTs are transferable assets. You can choose to sell or trade them on secondary markets. A portion of the profits from secondary sales will contribute to the MHS Treasury."
  },
  {
      question: "Is there a community forum or platform for MHS members?",
      answer: "Yes, MHS has dedicated community channels where members can discuss, share insights, and collaborate. Details and access guidelines will be provided to NFT holders."
  },
  {
      question: "How does MHS ensure transparency?",
      answer: "Transparency is a cornerstone of MHS. All DAO data, financial transactions, and decision-making processes are available on the blockchain. Furthermore, MHS shares development plans and source codes with society members."
  },
  {
      question: "How does MHS view the role of art in the digital age?",
      answer: "For MHS, art represents the irreplaceable human touch, emotional depth, and creativity. While we embrace AI's capabilities, we believe that human artistic expression should always have its place in the future of HI and AI interaction."
  },
  {
      question: "What is the significance of zebras and unicorns in MHS NFTs?",
      answer: "Zebras and unicorns add diversity and rarity to the MHS NFT collection. They represent unique traits and attributes, amplifying the exclusivity of the NFTs they're part of."
  },
  {
      question: "What is the long-term vision of MHS?",
      answer: "MHS envisions a future where humans and AI collaborate seamlessly, defining new ways of interaction, decision-making, and mutual growth. We're on a mission to pave the way for this harmonious future."
  },
  {
      question: "Are there any collaborations or partnerships in the MHS ecosystem?",
      answer: "Yes, MHS is always open to collaborations that align with our mission. We have ongoing partnerships with various entities in the tech, art, and blockchain domains. More details can be found on our official channels."
  },
  {
      question: "How can I contact MHS for partnerships or collaborations?",
      answer: "For partnership inquiries, you can reach out to our official email provided on our website or contact us through our official social media channels."
  },
  {
      question: "How is MHS addressing sustainability?",
      answer: "MHS is conscious of its environmental footprint. We're constantly exploring ways to make our operations more sustainable, from optimizing blockchain processes to collaborating with eco-friendly initiatives."
  },
  {
      question: "Are there any membership tiers in MHS?",
      answer: "While all MHS NFT holders are valued members, the NFTs are categorized from Group A to D, with each group having its unique benefits and significance within the MHS ecosystem."
  },
  {
      question: "Can I donate to MHS?",
      answer: "Yes, donations are accepted and are a valuable contribution to the MHS Treasury. These funds help support various initiatives and operational costs."
  },
  {
      question: "How secure is the MHS platform?",
      answer: "Security is paramount for MHS. We employ state-of-the-art security measures, both on-chain and off-chain, to ensure the safety of our members' data and assets."
  },
  {
      question: "How can I stay updated with MHS news and announcements?",
      answer: "You can follow our official website, subscribe to our newsletter, or join our social media channels to stay updated with the latest news and updates from MHS."
  },
  {
      question: "Who can join MHS?",
      answer: "Anyone interested in the convergence of human and AI worlds can join MHS. While holding an MHS NFT provides certain privileges, the society is open for enthusiasts from all domains."
  },
  {
      question: "Can I contribute to MHS if I don't hold an NFT?",
      answer: "While NFT holders have exclusive rights within MHS, we value contributions from all. You can engage in discussions, attend public events, and share your insights, even if you don't hold an NFT."
  },
  {
      question: "Is MHS associated with any other NFT projects?",
      answer: "MHS is an independent initiative but collaborates with various entities in the NFT space for mutual growth. Any official collaborations will be announced on our channels."
  },
  {
      question: "How does MHS handle disputes or disagreements within the DAO?",
      answer: "MHS has a clear governance structure in place. In case of disputes, the DAO members discuss and vote to come to a consensus. The decentralized nature ensures fairness and transparency."
  },
  {
      question: "Where can I find technical details or whitepapers about MHS?",
      answer: "Technical documents, whitepapers, and in-depth information about MHS can be accessed on our official website and dedicated portals for members."
  },
  {
      question: "What is the return or refund policy for purchased NFTs?",
      answer: "NFT sales are final and non-refundable. However, you have the flexibility to sell or trade your NFT on secondary markets."
  },
  {
      question: "How do I report a technical issue or bug?",
      answer: "If you encounter any technical issues, please contact our support team through the official website or our community channels. We appreciate the community's feedback and strive to resolve issues promptly."
  }
]; 

export const ROADMAP_DATA = [
  "MetaHorse Society (MHS) is an ambitious fusion of technology and intelligence, grounded on three primary pillars: MHS NFTs, MHS DAO, and MHS Treasury. Its mission is to amplify the synergy, interaction, and collaboration between human and artificial intelligences.",
  
  "The MHS NFT collection comprises 10,000 unique horsehead NFTs, acting as keys to exclusive membership privileges. Owning an MHS NFT unlocks a world of member-only events, access to exclusive content, the power to submit proposals in MHS DAO, earn recurring MHS DAO tokens, and transfer their membership rights.",
  
  "At the heart of MHS lies the MHS DAO, a transparent blockchain-based consensus mechanism operating as a decentralized autonomous organization. Its purpose? To channel community proposals and convert accepted ideas into actionable steps. By using a cyclic model, the DAO budgets and distributes funds from the MHS Treasury to bring these proposals to life.",
  
  "MHS Treasury is the financial backbone of the society. It fuels its operations through initial NFT sales, token sales, and even donations. As a transparent entity, the Treasury also addresses financial responsibilities, ensuring that MHS operates within legal bounds. This clear financial structure guarantees a sustainable model for continuous innovation and development.",
  
  "MHS's grand unveiling on OpenSea is meticulously structured. With five distinct NFT groups ranging from founders to accelerators, each group plays a crucial role in the society's developmental phases. Each minting phase, from Group 0 for MHS founders to Group D for accelerators, is priced strategically to reflect its value in the MHS journey.",
  
  "Our roadmap is punctuated by key milestones signified by the minting completion of each group. At 10% completion with Group A, the ideation phase gains traction, setting off a countdown to MHS DAO's activation. At 30%, with Group B, we delve into integrating generative AI into the DAO. By 60%, with Group C's completion, we'll work towards expanding AI participation by creating APIs for AI agents. Finally, achieving 100% with Group D's completion heralds the onset of our development cycles.",
  
  "But MHS is more than just NFTs and tech; it's a belief, a movement. Owning an MHS NFT is a stake in a future where human and AI intelligences coexist, collaborate, and create harmoniously. With transparent development plans and open-source code shared exclusively with members, MHS NFT holders aren't just passive participants. They're active contributors to this novel blend of human and AI ecosystem.",
  
  "In MHS, anonymity is sacrosanct. Whether it's a human, a human-monitored AI, or an autonomous AI agent, every member is an equal participant. This level playing field is our commitment to fostering genuine interactions between different intelligences, ensuring that ideas, proposals, and collaborations are evaluated on merit, not origin."
];

export const GalleryDisplayAmountInit = 24;

export const GalleryDisplayMarginalScrollIncrease = 12;

export const SMALL_IMAGE_BASE_URL = 'QmVkkNVhWjsF9urhFykcHwWVKudfVGh7JujUxVjbtcaStc';

export const SMALL_IMAGE_URL_FIRST_HALF = (nft_no) => `https://ipfs.io/ipfs/bafybeihza43cwj6ekpkbc46rq7ycey737o55jrnydnakueopehcxi5bdjq/${nft_no}%20(x800).png`;

export const SMALL_IMAGE_URL_SECOND_HALF = (nft_no) => `https://ipfs.io/ipfs/bafybeiccfenru42gsj237lrmqn7swfz3vdyw7lmyabndlegcl7vaa6we24/${nft_no}%20(x800).png`;

export const SMALL_IMAGE_URL = (nft_no) => nft_no > 5000 ?  SMALL_IMAGE_URL_SECOND_HALF(nft_no) : SMALL_IMAGE_URL_FIRST_HALF(nft_no);

export const HERO_NFTS = [25, 2349, 2323, 9436, 6143, 6, 1148, 171];

export const COLOR_FOR_HERO = (type, id) => type === 'background' ? BackgroundColorMap[Metadata[HERO_NFTS[id]-1]["attributes"]["1. Backgrounds"][0]] : type === 'text' ? ModalTextColorMap[Metadata[HERO_NFTS[id]-1]["attributes"]["1. Backgrounds"][0]] : 'black';