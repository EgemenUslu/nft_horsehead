
import Metadata from './assets/metadata_lite.json';


export const RoadmapData =[
  {
    percentage: 10,
    description: 'The journey has just begun! 100 additional NFTs are randomly dropped to early adopters.'
  },
  {
    percentage: 20,
    description: 'Gaining momentum! Another 100 NFTs are dropped to random holders.'
  },
  {
    percentage: 30,
    description: 'Growing strong! Yet another 100 NFTs randomly dropped as we reach 30% sales.'
  },
  {
    percentage: 40,
    description: 'Community is building up! Another lucky set of 100 holders receive additional NFTs.'
  },
  {
    percentage: 50,
    description: 'We are halfway there! 100 more NFTs randomly dropped to our holders.'
  },
  {
    percentage: 60,
    description: 'Past the halfway point! 100 more NFTs dropped as we venture into the next phase of our journey.'
  },
  {
    percentage: 70,
    description: '“This way” sign at the club image floor becomes interactive and you can access the backdoor Member-Exclusive MetaHorseSociety merch store, featuring Limited Edition tees, hoodies, and other goodies.'
  },
  {
    percentage: 80,
    description: 'Closing in on the final stretch! Another lucky 100 holders receive additional NFTs.'
  },
  {
    percentage: 90,
    description: 'Almost there! The final random drop of 100 NFTs to holders as we approach the grand finale.'
  },
  {
    percentage: 100,
    description: 'We did it! Upstairs and downstairs floors become accessible (Upstairs for the VIP lounge, downstairs for exclusive horse stables). You can now breed your NFT to something new. Let the MetaHorseSociety journey begin!'
  },
];

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

export const GalleryDisplayAmountInit = 24;

export const GalleryDisplayMarginalScrollIncrease = 12;

export const SMALL_IMAGE_BASE_URL = 'QmVkkNVhWjsF9urhFykcHwWVKudfVGh7JujUxVjbtcaStc';

export const SMALL_IMAGE_URL_FIRST_HALF = (nft_no) => `https://ipfs.io/ipfs/bafybeihza43cwj6ekpkbc46rq7ycey737o55jrnydnakueopehcxi5bdjq/${nft_no}%20(x800).png`;

export const SMALL_IMAGE_URL_SECOND_HALF = (nft_no) => `https://ipfs.io/ipfs/bafybeiccfenru42gsj237lrmqn7swfz3vdyw7lmyabndlegcl7vaa6we24/${nft_no}%20(x800).png`;

export const SMALL_IMAGE_URL = (nft_no) => nft_no > 5000 ?  SMALL_IMAGE_URL_SECOND_HALF(nft_no) : SMALL_IMAGE_URL_FIRST_HALF(nft_no);

export const HERO_NFTS = [25, 1, 54, 2349, 171, 6143, 1619, 6];

export const COLOR_FOR_HERO = (type, id) => type == 'background' ? BackgroundColorMap[Metadata[HERO_NFTS[id]-1]["attributes"]["1. Backgrounds"][0]] : type == 'text' ? ModalTextColorMap[Metadata[HERO_NFTS[id]-1]["attributes"]["1. Backgrounds"][0]] : 'black';