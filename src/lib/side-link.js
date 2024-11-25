import { FaHome } from "react-icons/fa"
import { RiMic2Line } from "react-icons/ri";
import { IoIosAlbums } from "react-icons/io";
import { IoMdBook } from "react-icons/io";


const SIDE_LINKS = [

  {
      text:"Home",
      href:"/",
      Icon:FaHome,
      active:true
  },
  {
      text:"Artists",
      href:"/artists",
      Icon:RiMic2Line,
      active:false
  },
  {
      text:"Albums",
      href:"/albums",
      Icon:IoIosAlbums,
      active:false
  },
  {
      text:"Podcast",
      href:"/podcast",
      Icon:RiMic2Line,
      active:false
  },
  {
      text:"Audio Book",
      href:"/audio-book",
      Icon:IoMdBook,
      active:false
  },
  {
    text:"Audio Book",
    href:"/audio-book",
    Icon:IoMdBook,
    active:false
},
]



export default SIDE_LINKS