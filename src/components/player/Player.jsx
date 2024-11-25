import bgMusic from "../../assets/images/bg_music.png";
import song1Image from "../../assets/images/rec_1.png";
import { useRef } from "react";
import audioSong from "../../assets/audio/audio.mp3";
import bgPlayBtn from "../../assets/images/bg-play.svg";
import nextBtn from "../../assets/images/next.svg";
import previousBtn from "../../assets/images/previous.svg";
import repeateOneBtn from "../../assets/images/repeate-one.svg";
import shuffleBtn from "../../assets/images/shuffle.svg";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { IoVolumeHighOutline } from "react-icons/io5";
import { IoVolumeMuteOutline } from "react-icons/io5";
import SliderInput from "./SliderInput";

export default function Player() {
  const audioPlayerRef = useRef(undefined);
  const mainAudioSliderRef = useRef(undefined);

  



  return (
    <div
      className={` absolute bottom-0 left-0 w-full py-[1rem]
            `}
    >
      {/* bg image  */}
      <div className="bg-bg-music bg-cover bg-no-repeat z-[-1] bg-[#C4C4C4] opacity-[80%] absolute top-0 left-0 w-full h-full" />
      <audio src={audioSong} className="hidden" ref={audioPlayerRef} />

      {/* bg Player content  */}
      <div className="px-6 flex gap-5 justify-between items-center">
        <div className="flex gap-3 items-center">
          <img src={song1Image} className=" rounded-full w-[60px] h-[60px]" />
          <div>
            <h3 className=" font-medium text-[.9rem]">Jiwa yang Bersedih</h3>
            <h4 className="font-medium text-[.7rem] text-light-dim">
              Ghea Indrawati
            </h4>
          </div>
        </div>
        {/* Player*/}
        <div className="flex flex-col gap-1 w-[50%]">
          <div className="flex gap-5 self-center">
          <button>
            <img src={shuffleBtn} alt="" srcset="" />
          </button>
          <button>
            <img src={previousBtn} alt="" srcset="" />
          </button>
          <button>
            <img src={bgPlayBtn} alt="" srcset="" />
          </button>
          <button>
            <img src={nextBtn} alt="" srcset="" />
          </button>
          <button>
            <img src={repeateOneBtn} alt="" srcset="" />
          </button>
          </div>
          <div className="flex gap-1 w-full">
            <span>0.00</span>
            <input type="range"  className="custom-slider"/>
            <span>0.00</span>
          </div>
        </div>
        <div className="w-[15%] flex gap-3">
            <button>
                <IoIosHeartEmpty/>
            </button>
            <button>
                <IoVolumeHighOutline/>
            </button>
            <SliderInput/>
 
        </div>
      </div>
    </div>
  );
}
