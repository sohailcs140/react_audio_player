import React from 'react'

import SectionHeading from '../../section-heading/SectionHeading'
import RecomendedSongCard from './RecomendedSongCard'
import OwlCarousel from "react-owl-carousel";
import Song1Image from "../../../assets/images/rec_1.png"
import Song2Image from "../../../assets/images/rec_2.png"
import Song3Image from "../../../assets/images/rec_3.png"
import Song4Image from "../../../assets/images/rec_4.png"
import Song5Image from "../../../assets/images/rec_5.png"
import Song6Image from "../../../assets/images/rec_6.png"



const options = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 5.5,
      }
    },
    nav: false,
    dots: false
  }


export default function RecomendedSongsList() {
  return (
    <div className="ps-6">
        <SectionHeading text={"Recommended"} href={"/"} />
        <OwlCarousel className="flex gap-4 owl-theme" loop margin={20} autoplay {...options}>
            <RecomendedSongCard image={Song1Image} title={"Jiwa yang Bersedih"} artist={"Ghea Indrawati"}/>
            <RecomendedSongCard image={Song2Image} title={"Jiwa yang Bersedih"} artist={"Ghea Indrawati"}/>
            <RecomendedSongCard image={Song3Image} title={"Jiwa yang Bersedih"} artist={"Ghea Indrawati"}/>
            <RecomendedSongCard image={Song4Image} title={"Jiwa yang Bersedih"} artist={"Ghea Indrawati"}/>
            <RecomendedSongCard image={Song5Image} title={"Jiwa yang Bersedih"} artist={"Ghea Indrawati"}/>
            <RecomendedSongCard image={Song6Image} title={"Jiwa yang Bersedih"} artist={"Ghea Indrawati"}/>
        </OwlCarousel>
    </div>
  )
}

