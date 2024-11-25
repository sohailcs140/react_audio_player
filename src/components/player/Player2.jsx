import React, { useState, useRef, useEffect } from "react";
import "../../style/player.css"


const AudioPlayer = ({ playlist = [] }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(1); // Default volume: 100%
  const [isMuted, setIsMuted] = useState(false); // Mute state
  const [isLoopingTrack, setIsLoopingTrack] = useState(false);
  const [isLoopingPlaylist, setIsLoopingPlaylist] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleNextTrack = () => {
    const nextTrack =
      isLoopingPlaylist || currentTrack + 1 < playlist.length
        ? (currentTrack + 1) % playlist.length
        : currentTrack;

    setCurrentTrack(nextTrack);
    setCurrentTime(0);
    setIsPlaying(false);
    audioRef.current.load();
    setTimeout(() => togglePlayPause(), 0); // Automatically play next track
  };

  const handlePrevTrack = () => {
    const prevTrack =
      isLoopingPlaylist || currentTrack > 0
        ? (currentTrack - 1 + playlist.length) % playlist.length
        : currentTrack;

    setCurrentTrack(prevTrack);
    setCurrentTime(0);
    setIsPlaying(false);
    audioRef.current.load();
    setTimeout(() => togglePlayPause(), 0); // Automatically play previous track
  };

  const seekForward = () => {
    const newTime = Math.min(audioRef.current.currentTime + 5, duration);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const seekBackward = () => {
    const newTime = Math.max(audioRef.current.currentTime - 5, 0);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    audioRef.current.muted = !isMuted;
  };

  const toggleLoopTrack = () => {
    setIsLoopingTrack(!isLoopingTrack);
    audioRef.current.loop = !isLoopingTrack;
  };

  const toggleLoopPlaylist = () => {
    setIsLoopingPlaylist(!isLoopingPlaylist);
  };

  useEffect(() => {
    const handleTrackEnd = () => {
      if (!isLoopingTrack) {
        handleNextTrack();
      }
    };

    const audioElement = audioRef.current;
    audioElement.addEventListener("ended", handleTrackEnd);

    return () => {
      audioElement.removeEventListener("ended", handleTrackEnd);
    };
  }, [isLoopingTrack, currentTrack, isLoopingPlaylist]);

  const progressPercentage = (currentTime / duration) * 100 || 0;

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md w-96 mx-auto">
      <audio
        ref={audioRef}
        src={playlist[currentTrack]}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
      />
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={handlePrevTrack}
          className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-500 transition"
        >
          Prev
        </button>
        <button
          onClick={seekBackward}
          className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-500 transition"
        >
          -5s
        </button>
        <button
          onClick={togglePlayPause}
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500 transition"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={seekForward}
          className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-500 transition"
        >
          +5s
        </button>
        <button
          onClick={handleNextTrack}
          className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-500 transition"
        >
          Next
        </button>
      </div>
      <div className="text-sm mb-2 text-center">
        {formatTime(currentTime)} / {formatTime(duration)}
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={progressPercentage}
        onChange={handleProgressChange}
        className="w-full h-1 rounded-lg appearance-none focus:outline-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #7C74EE ${progressPercentage}%, #D3D3D3 ${progressPercentage}%)`,
        }}
      />
      <div className="mt-4 flex items-center gap-4">
        <button
          onClick={toggleMute}
          className="px-2 py-1 bg-gray-600 rounded hover:bg-gray-500 transition"
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={isMuted ? 0 : volume * 100}
          onChange={handleVolumeChange}
          className="w-full h-1 rounded-lg appearance-none focus:outline-none cursor-pointer"
          style={{
            background: isMuted
              ? "#D3D3D3"
              : `linear-gradient(to right, #7C74EE ${volume * 100}%, #D3D3D3 ${volume * 100}%)`,
          }}
        />
        <style>
          {`
            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              height: 10px; /* Thin progress thumb */
              width: 10px;
              background-color: #7C74EE;
              border-radius: 0; /* Flat audio progress thumb */
              cursor: pointer;
              border: none;
            }

            input[type="range"]::-moz-range-thumb {
              appearance: none;
              height: 10px; /* Thin progress thumb */
              width: 10px;
              background-color: #7C74EE;
              border-radius: 0; /* Flat audio progress thumb */
              cursor: pointer;
              border: none;
            }

            /* Circular volume thumb */
            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              height: 10px;
              width: 10px;
              background-color: #7C74EE;
              border-radius: 50%; /* Circular volume thumb */
              cursor: pointer;
              border: none;
            }

            input[type="range"]::-moz-range-thumb {
              appearance: none;
              height: 10px;
              width: 10px;
              background-color: #7C74EE;
              border-radius: 50%; /* Circular volume thumb */
              cursor: pointer;
              border: none;
            }
          `}
        </style>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={toggleLoopTrack}
          className={`px-2 py-1 rounded ${isLoopingTrack ? "bg-blue-500" : "bg-gray-600"} hover:bg-gray-500 transition`}
        >
          Loop Track
        </button>
        <button
          onClick={toggleLoopPlaylist}
          className={`px-2 py-1 rounded ${isLoopingPlaylist ? "bg-blue-500" : "bg-gray-600"} hover:bg-gray-500 transition`}
        >
          Loop Playlist
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer;
