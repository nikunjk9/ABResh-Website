import React, { useState, useRef } from 'react';
import { Play, Users, Pause, Award, Music2 } from 'lucide-react';

interface Artist {
  id: number;
  name: string;
  genre: string;
  monthlyListeners: string;
  image: string;
  topSong: string;
  previewUrl: string;
  award: string;
}

const FeaturedArtists = () => {
  const [hoveredArtist, setHoveredArtist] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const artists: Artist[] = [
    {
      id: 1,
      name: "Billie Eilish",
      genre: "American singer-songwriter",
      monthlyListeners: "83.2M",
      image: '/images/artist2.jpg',
      topSong: "What Was I Made For?",
      previewUrl: '/images/audio3.mp3',
      award: "Artist of the Year"
    },
    {
      id: 2,
      name: 'Arijit Singh',
      genre: "Indian playback singer",
      monthlyListeners: "110.5M",
      image: '/images/artist8.jpg',
      topSong: "Ve Kamleya",
      previewUrl: '/images/audio18.mp3',
      award: "Top Voice"
    },
    {
      id: 3,
      name: "SZA",
      genre: "American singer-songwriter",
      monthlyListeners: "71.8M",
      image: '/images/artist4.png',
      topSong: "Snooze ft. Justin bieber ",
      previewUrl: '/images/audio17.mp3',
      award: "Audience Choice"
    }
  ];

  const handleMouseEnter = (artistId: number, previewUrl: string): void => {
    setHoveredArtist(artistId);
    if (audioRef.current) {
      audioRef.current.src = previewUrl;
      audioRef.current.currentTime = 10; // Start from 10 seconds
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch((error: Error) => console.log("Audio playback error:", error));
      setIsPlaying(artistId);
    }
  };

  const handleMouseLeave = (): void => {
    setHoveredArtist(null);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 10; // Reset to 10 seconds
      setIsPlaying(null);
    }
  };

  const togglePlay = (artistId: number, previewUrl: string, event: React.MouseEvent): void => {
    event.stopPropagation();
    if (audioRef.current) {
      if (isPlaying === artistId) {
        audioRef.current.pause();
        audioRef.current.currentTime = 10; // Reset to 10 seconds when manually paused
        setIsPlaying(null);
      } else {
        audioRef.current.src = previewUrl;
        audioRef.current.currentTime = 10; // Start from 10 seconds when manually played
        audioRef.current.play().catch((error: Error) => console.log("Audio playback error:", error));
        setIsPlaying(artistId);
      }
    }
  };

  // Rest of the component remains the same
  return (
    <div className="min-h-screen bg-black py-20 px-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          {/* Left Column - Title */}
          <div>
            <h2 className="text-6xl md:text-7xl lg:text-[92px] font-bold text-white leading-tight">
              Featured
              <span className="block bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                Artists
              </span>
            </h2>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {artists.map((artist) => (
                <div key={artist.award} className="bg-purple-950/30 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    <Music2 className="w-5 h-5 text-purple-400" />
                  </div>
                  <p className="text-white font-semibold">{artist.award}</p>
                  <p className="text-purple-300 text-sm mt-1">2024 Winner</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="flex flex-col justify-between py-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-400" />
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent">
                  Discover This Month&apos;s Rising Stars
                </span>
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Step into a world of musical excellence where innovation meets artistry. 
                  Our featured artists represent the pinnacle of contemporary music, 
                  pushing boundaries and setting new standards in the industry.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  With combined streams exceeding billions and multiple platinum records, 
                  these artists continue to shape the sound of tomorrow. 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group relative"
              onMouseEnter={() => handleMouseEnter(artist.id, artist.previewUrl)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative overflow-hidden rounded-xl bg-zinc-900 transition-all duration-500 ease-out">
                {/* Award Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium text-white">{artist.award}</span>
                  </div>
                </div>

                {/* Image Container */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-black transition-opacity duration-500 ease-out ${
                    hoveredArtist === artist.id ? 'opacity-40' : 'opacity-0'
                  }`} />
                </div>

                {/* Content Container */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-out">
                  {/* Artist Info */}
                  <div className={`transition-all duration-500 ease-out transform ${
                    hoveredArtist === artist.id ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{artist.name}</h3>
                    <p className="text-gray-300 mb-1">{artist.genre}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {isPlaying === artist.id && [...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className="w-1 h-4 bg-white animate-sound-wave"
                              style={{ animationDelay: `${i * 0.15}s` }}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-white">{artist.topSong}</span>
                      </div>
                      <button
                        onClick={(e) => togglePlay(artist.id, artist.previewUrl, e)}
                        className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-transform duration-300 hover:scale-105"
                      >
                        {isPlaying === artist.id ? 
                          <Pause className="w-6 h-6" /> : 
                          <Play className="w-6 h-6 translate-x-0.5" />
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio 
        ref={audioRef}
        onEnded={() => setIsPlaying(null)}
        onPause={() => setIsPlaying(null)}
      />

      <style jsx global>{`
        @keyframes soundWave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }

        .animate-sound-wave {
          animation: soundWave 1s ease-in-out infinite;
          transform-origin: bottom;
        }
      `}</style>
    </div>
  );
};

export default FeaturedArtists;