import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import * as $ from "jquery"
import SideMenu from "./components/side-menu/SideMenu";
import Header from "./components/header/Header";
import RecomendedSongsList from "./components/songs/recomended/RecomendedSongsList";
import Player from "./components/player/Player";
import Player2 from "./components/player/Player2"

import audioSong from "./assets/audio/audio.mp3";
import song_a from "./assets/audio/a.mp3";
import song_b from "./assets/audio/b.mp3";
import song_c from "./assets/audio/c.mp3";
import song_d from "./assets/audio/d.mp3";
import song_e from "./assets/audio/e.mp3";
import song_f from "./assets/audio/f.mp3";

const playlist = [
  audioSong, song_a, song_b, song_c, song_e, song_d, song_f
]

function App() {
  return (
    <section className="h-screen relative flex">
      <SideMenu />
      <div className="relative right-0 top-0 w-[100%] h-screen overflow-hidden">
        <Header/>
        <RecomendedSongsList/>
        <Player2 audioSrc={audioSong} playlist={playlist}/>
      </div>
    </section>
  );
}

export default App;

