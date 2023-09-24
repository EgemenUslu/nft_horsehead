
import Metadata from './assets/metadata_lite.json';
import HiAiBrain from './assets/hi_ai_brain.png';
import Dao from './assets/dao.png';
import Treasure from './assets/treasure.png';
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

export const DROP_SECTIONS_DATA = [
    {
      header: "Information About Drop",
      body: [
        "MHS introduces an exciting minting schedule that promises to be as dynamic as the NFTs themselves. Over a phased period, a select set of meticulously crafted horse-head drawings will be minted, each reflecting uniqueness through 8 distinct attributes.",
        "The drop will consist of multiple groups, namely Group B, C, and D. While Group B will see a sale of 0.5 ETH per piece, Groups C and D are priced at 2 ETH and 10 ETH respectively, offering enthusiasts a range of choices and investment opportunities."
      ],
      visual: HorseShoe
    },
    {
      header: "MHS Intro",
      body: [
        "MetaHorse Society (MHS) is built on a trinity of NFTs, DAO, and the harmonious integration of Human Intelligence (HI) & Artificial Intelligence (AI). This unique blend fosters a space where both creativity and technology flourish in tandem.",
        "The vision of MHS transcends beyond mere NFT creation. We envision a world where both HI and AI collaborate, where innovation isn't just about new ideas but about the harmonious blend of human ingenuity and machine precision.",
        "Our mission? To create a space where art meets technology, where every NFT is a testament to the collaborative spirit of humans and machines, setting new benchmarks for what can be achieved together."
      ],
      visual: HiAiBrain
    },
    {
      header: "MHS Treasury",
      body: [
        "The treasury of MHS will witness steady inflow from both minting and initial sales. This income is earmarked not just for the sustenance of the platform but to fuel further growth and innovation.",
        "But our vision for the treasury goes beyond just funds. Through DAO proposals, we aim to create sustainable revenue streams, ensuring that the MHS treasury is not just robust but future-ready."
      ],
      visual: Treasure
    },
    {
      header: "MHS DAO",
      body: [
        "MHS DAO is more than just a governance model; it's the heartbeat of our community. Through proposals and voting, we aim to ensure that every decision is aligned with the overarching MHS goal. Additionally, with structured budget cycles, we ensure efficient treasury management, ensuring optimal utilization of resources.",
        "The unique aspect of MHS is the seamless blend of HI and AI. With an exclusive API for AI agents, we're pioneering the development and integration of AI agents, ensuring that they have an equal stake in shaping the future of MHS."
      ],
      visual: Dao
    },
    {
      header: "MHS Art",
      body: [
        "The art of MHS is complex and layered. Comprising 8 different layers, each artwork is a masterpiece of intricate design. With over 270+ traits, the possibilities are vast. While horses form the majority, the collection also boasts of rare zebras and unicorns, adding to the allure.",
        "At MHS, art is more than just aesthetics; it's an emotion. We deeply value the human experience, the stories, the emotions, and the essence that only human touch can bring. It's this ethos that we want to carry forward in the future interactions between HI and AI."
      ],
      visual: Generation
    },
    {
      header: "Future",
      body: [
        "The future of MHS promises innovation at every turn. Enabling AI to anonymously contribute to DAO, we're breaking barriers and redefining collaboration.",
        "Imagine businesses that operate entirely online, automated yet personal, harnessing the best of both human and AI worlds. At MHS, we're not just imagining it; we're creating it."
      ],
      visual: HiAiDao
    }
  ];
  

export const GalleryDisplayAmountInit = 24;

export const GalleryDisplayMarginalScrollIncrease = 12;

export const SMALL_IMAGE_BASE_URL = 'QmVkkNVhWjsF9urhFykcHwWVKudfVGh7JujUxVjbtcaStc';

export const SMALL_IMAGE_URL_FIRST_HALF = (nft_no) => `https://ipfs.io/ipfs/bafybeihza43cwj6ekpkbc46rq7ycey737o55jrnydnakueopehcxi5bdjq/${nft_no}%20(x800).png`;

export const SMALL_IMAGE_URL_SECOND_HALF = (nft_no) => `https://ipfs.io/ipfs/bafybeiccfenru42gsj237lrmqn7swfz3vdyw7lmyabndlegcl7vaa6we24/${nft_no}%20(x800).png`;

export const SMALL_IMAGE_URL = (nft_no) => nft_no > 5000 ?  SMALL_IMAGE_URL_SECOND_HALF(nft_no) : SMALL_IMAGE_URL_FIRST_HALF(nft_no);

export const HERO_NFTS = [25, 2349, 2323, 9436, 6143, 6, 1148, 171];

export const COLOR_FOR_HERO = (type, id) => type === 'background' ? BackgroundColorMap[Metadata[HERO_NFTS[id]-1]["attributes"]["1. Backgrounds"][0]] : type === 'text' ? ModalTextColorMap[Metadata[HERO_NFTS[id]-1]["attributes"]["1. Backgrounds"][0]] : 'black';