import React, { useEffect, useRef } from "react";

function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
        window.removeEventListener("click", playAudio);
      }
    };

    window.addEventListener("click", playAudio);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} loop hidden>
        <source src="/music/jingle-bells.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default BackgroundMusic;
