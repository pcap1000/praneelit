import { BiMovie } from 'react-icons/bi';
import { BsPatchQuestion } from 'react-icons/bs';
import { CgSandClock } from 'react-icons/cg';
import { FaRegStar } from 'react-icons/fa';
import {
  HiOutlineDocumentText,
  HiOutlineScale,
  HiOutlineSquares2X2,
  HiOutlineWrench,
} from 'react-icons/hi2';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import {
  IoBookOutline,
  IoHardwareChipOutline,
  IoMegaphoneOutline,
} from 'react-icons/io5';
import { LiaMicrophoneAltSolid } from 'react-icons/lia';
import { LuGamepad2 } from 'react-icons/lu';
import { PiRedditLogo, PiScroll } from 'react-icons/pi';
import { RiCommunityLine } from 'react-icons/ri';
import { TfiFaceSmile } from 'react-icons/tfi';

const iconProps = {
  size: '2rem',
  color: '#f3f4f7',
};

export const resources = [
  {
    id: 1,
    title: 'About Reddit',
    icon: <PiRedditLogo {...iconProps} />,
  },
  {
    id: 2,
    title: 'Advertise',
    icon: <IoMegaphoneOutline {...iconProps} />,
  },
  {
    id: 3,
    title: 'Help',
    icon: <IoMdHelpCircleOutline {...iconProps} />,
  },
  {
    id: 4,
    title: 'Blog',
    icon: <IoBookOutline {...iconProps} />,
  },
  {
    id: 5,
    title: 'Careers',
    icon: <HiOutlineWrench {...iconProps} />,
  },
  {
    id: 6,
    title: 'Press',
    icon: <LiaMicrophoneAltSolid {...iconProps} />,
  },
  {
    id: 7,
    title: 'Communities',
    icon: <RiCommunityLine {...iconProps} />,
  },
  {
    id: 8,
    title: 'Best of Reddit',
    icon: <CgSandClock {...iconProps} />,
  },
  {
    id: 9,
    title: 'Topics',
    icon: <HiOutlineSquares2X2 {...iconProps} />,
  },
  {
    id: 10,
    title: 'Content Policy',
    icon: <PiScroll {...iconProps} />,
  },
  {
    id: 11,
    title: 'Privicy Policy',
    icon: <HiOutlineScale {...iconProps} />,
  },
  {
    id: 12,
    title: 'UserAgreement',
    icon: <HiOutlineDocumentText {...iconProps} />,
  },
];

export const topics = [
  {
    id: 1,
    title: 'Internet Culture',
    icon: <TfiFaceSmile {...iconProps} />,
    links: [
      {
        id: 1,
        title: 'Amazing',
      },
      {
        id: 2,
        title: 'Animals & Pets',
      },
      {
        id: 3,
        title: 'Cringe & Facepalm',
      },
      {
        id: 4,
        title: 'Funny',
      },
      {
        id: 5,
        title: 'Interesting',
      },
      {
        id: 6,
        title: 'Memes',
      },
      {
        id: 7,
        title: 'Oddly Satisfying',
      },
      {
        id: 8,
        title: 'Reddit Meta',
      },
      {
        id: 9,
        title: 'Wholesome',
      },
    ],
  },
  {
    id: 2,
    title: 'Games',
    icon: <LuGamepad2 {...iconProps} />,
    links: [
      {
        id: 1,
        title: 'Action Games',
      },
      {
        id: 2,
        title: 'Adventure Games',
      },
      {
        id: 3,
        title: 'Esports',
      },
      {
        id: 4,
        title: 'Gaming Consoles & Gear',
      },
      {
        id: 5,
        title: 'Gaming News & Discussion',
      },
      {
        id: 6,
        title: 'Mobile Games',
      },
      {
        id: 7,
        title: 'Other Games',
      },
      {
        id: 8,
        title: 'Role-Playing Games',
      },
      {
        id: 9,
        title: 'Simulation Games',
      },
      {
        id: 10,
        title: 'Sports & Racing Games',
      },
      {
        id: 11,
        title: 'Strategy Games',
      },
      {
        id: 12,
        title: 'Tabletop Games',
      },
    ],
  },
  {
    id: 3,
    title: 'Q&As',
    icon: <BsPatchQuestion {...iconProps} />,
    links: [
      {
        id: 1,
        title: 'Q&As',
      },
      {
        id: 2,
        title: 'Stories & Confessions',
      },
    ],
  },
  {
    id: 4,
    title: 'Technology',
    icon: <IoHardwareChipOutline {...iconProps} />,
    links: [
      {
        id: 1,
        title: '3D Printing',
      },
      {
        id: 2,
        title: 'Artificial Intelligence & Machine Learning',
      },
      {
        id: 3,
        title: 'Computers & Hardware',
      },
      {
        id: 4,
        title: 'Consumer Electronics',
      },
      {
        id: 5,
        title: 'DIY Electronics',
      },
      {
        id: 6,
        title: 'Programming',
      },
      {
        id: 7,
        title: 'Software & Apps',
      },
      {
        id: 8,
        title: 'Streaming Services',
      },
      {
        id: 9,
        title: 'Tech News & Discussion',
      },
      {
        id: 10,
        title: 'Virtual & Augmented Reality',
      },
    ],
  },
  {
    id: 5,
    title: 'Pop Culture',
    icon: <FaRegStar {...iconProps} />,
    links: [
      {
        id: 1,
        title: 'Celebrities',
      },
      {
        id: 2,
        title: 'Creators & Influencers',
      },
      {
        id: 3,
        title: 'Generations & Nostalgia',
      },
      {
        id: 4,
        title: 'Podcasts',
      },
      {
        id: 5,
        title: 'Streamers',
      },
      {
        id: 6,
        title: 'Tarot & Astrology',
      },
    ],
  },
  {
    id: 6,
    title: 'Movies & TV',
    icon: <BiMovie {...iconProps} />,
    links: [
      {
        id: 1,
        title: 'Action Movies & Series',
      },
      {
        id: 2,
        title: 'Animated Movies & Series',
      },
      {
        id: 3,
        title: 'Comedy Movies & Series',
      },
      {
        id: 4,
        title: 'Crime, Mystery & Thriller Movies & Series',
      },
      {
        id: 5,
        title: 'Documentary Movies & Series',
      },
      {
        id: 6,
        title: 'Drama Movies & Series',
      },
      {
        id: 7,
        title: 'Fantasy Movies & Series',
      },
      {
        id: 8,
        title: 'Horror Movies & Series',
      },
      {
        id: 9,
        title: 'Movie News & Discussion',
      },
      {
        id: 10,
        title: 'Reality TV',
      },
      {
        id: 11,
        title: 'Romance Movies & Series',
      },
      {
        id: 12,
        title: 'Movie News & Discussion',
      },
      {
        id: 13,
        title: 'Sci-Fi Movies & Series',
      },
      {
        id: 14,
        title: 'Superhero Movies & Series',
      },
      {
        id: 15,
        title: 'TV News & Discussion',
      },
    ],
  },
];
