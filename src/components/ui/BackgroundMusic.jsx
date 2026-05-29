import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Setup sample royalty-free premium cyberpunk/synthwave background track
  const audioUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Standard fallback track

  const togglePlayback = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log("Audio playback was blocked or failed: ", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Attempt auto-mute setups
    if (audioRef.current) {
      audioRef.current.volume = 0.15; // Soft ambient volume
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[99] flex items-center gap-3">
      {/* Mini Visualizer lines that bounce when playing */}
      {isPlaying && (
        <div className="flex items-end gap-[3px] h-6 px-2 py-1 rounded-lg glass border border-white/5">
          <span className="w-[2px] bg-neon-blue h-3 animate-[pulse_0.6s_infinite_alternate]" />
          <span className="w-[2px] bg-neon-purple h-5 animate-[pulse_0.4s_infinite_alternate_0.2s]" />
          <span className="w-[2px] bg-neon-pink h-2 animate-[pulse_0.8s_infinite_alternate_0.1s]" />
          <span className="w-[2px] bg-neon-cyan h-4 animate-[pulse_0.5s_infinite_alternate_0.3s]" />
        </div>
      )}

      {/* Floating Audio Button */}
      <button
        onClick={togglePlayback}
        className={`
          w-10 h-10 rounded-full flex items-center justify-center cursor-pointer glass border transition-all duration-300
          ${isPlaying ? 'border-neon-pink text-neon-pink neon-glow-pink' : 'border-white/10 text-slate-400 hover:text-white'}
        `}
      >
        {isPlaying ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
      </button>

      {/* HTML5 Audio API element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
      />
    </div>
  );
};

export default BackgroundMusic;
