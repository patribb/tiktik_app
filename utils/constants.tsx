import { BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad } from 'react-icons/fa';
import { BiCameraMovie } from 'react-icons/bi'

export const topics = [
  {
    name: 'cine',
    icon: <BiCameraMovie />,
  },
  {
    name: 'humor',
    icon: <BsEmojiSunglasses />,
  },
  {
    name: 'juegos',
    icon: <FaGamepad />,
  },
  {
    name: 'comida',
    icon: <GiCakeSlice />,
  },
  {
    name: 'música',
    icon: <GiGalaxy />,
  },
  {
    name: 'belleza',
    icon: <GiLipstick />,
  },
  {
    name: 'animales',
    icon: <FaPaw />,
  },
  {
    name: 'deportes',
    icon: <FaMedal />,
  },
];

export const footerList1 = ['About', 'Newsroom', 'Store', 'Contact', 'Carrers', 'ByteDance', 'Creator Directory']
export const footerList2 = [ 'TikTik for Good','Advertise','Developers','Transparency','TikTik Rewards' ]
export const footerList3 = [ 'Help', 'Safety', 'Terms', 'Privacy', 'Creator Portal', 'Community Guidelines' ]