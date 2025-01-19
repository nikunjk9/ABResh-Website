import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Shuffle, Repeat, Clock, Music2 } from 'lucide-react';

interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  coverArt: string;
  audioUrl: string;
}

interface Playlist {
  title: string;
  coverArt: string;
  songs: Song[];
}

const playlists: Playlist[] = [
  {
    title: "Popular Hits",
    coverArt: "/images/imga.jpg",
    songs: [
        {
            id: 1,
            title: "MY EYES",
            artist: "Travis Scott",
            album: "UTOPIA",
            duration: "4:15",
            coverArt: "/images/imga2.jpg",
            audioUrl: '/images/audio2.mp3'
        },
      {
        id: 2,
        title: "I Will Follow ",
        artist: "Dotan",
        album: "City Life",
        duration: "4:20",
        coverArt: "/images/imga3.jpg",
        audioUrl: '/images/audio4.mp3'
      }
    ]
  },
  {
    title: "New Releases",
    coverArt: "/images/imga.jpg",
    songs: [
      {
        id: 3,
        title: "What Was I Made For? ",
        artist: "Billie Eilish",
        album: "Single",
        duration: "4:15",
        coverArt: "/images/imga4.jpg",
        audioUrl: '/images/audio3.mp3'
      },
      {
        id: 4,
        title: "Let the World Burn",
        artist: "Chris Grey",
        album: "Neon Nights",
        duration: "4:15",
        coverArt: "/images/imga.jpg",
        audioUrl: '/images/audio1.mp3'
      }
    ]
  }
];

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Playback error:', error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentSong]);

  const handlePlay = (song: Song) => {
    if (isLoading) return;
    if (currentSong?.id === song.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || isLoading) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * duration;
  };

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-900/20 via-black to-black">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 2xl:px-28">
        <div className="mb-12 text-center relative">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 relative z-10">
            <span className="bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent filter drop-shadow-[0_5px_15px_rgba(168,85,247,0.4)]">
              Music Library
            </span>
          </h2>
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full transform -translate-y-1/2 z-0" />
          <p className="text-gray-300 text-xl max-w-2xl mx-auto relative z-10">
            Discover and play from our curated collection
          </p>
        </div>

        {/* Main Content Grid */}
        <div className={`grid gap-6 transition-all duration-500 ${currentSong ? 'grid-cols-3' : 'grid-cols-1'}`}>
          {/* Playlists Section */}
          <div className={`${currentSong ? 'col-span-2' : 'col-span-1'}`}>
            <div className="space-y-6 pb-24">
              {playlists.map((playlist) => (
                <div key={playlist.title} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/20 transition-all duration-500">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                    <Music2 className="w-5 h-5 text-purple-400" />
                    {playlist.title}
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full table-fixed">
                      <thead>
                        <tr className="text-gray-400 text-sm border-b border-white/10">
                          <th className="pb-4 text-left font-medium w-12">#</th>
                          <th className="pb-4 text-left font-medium ">Title</th>
                          <th className="pb-4 text-left font-medium hidden md:table-cell ">Album</th>
                          <th className="pb-4 text-left font-medium hidden lg:table-cell w-24">
                            <Clock className="w-4 h-4" />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {playlist.songs.map((song, index) => (
                          <tr 
                            key={song.id}
                            onClick={() => handlePlay(song)}
                            className={`group text-white/80 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer ${currentSong?.id === song.id ? 'bg-purple-500/20' : ''}`}
                          >
                            <td className="py-4 pl-4">
                              <div className="relative w-4 h-4">
                                {currentSong?.id === song.id && isPlaying ? (
                                  <div className="flex space-x-0.5">
                                    {[1, 2, 3].map((bar) => (
                                      <div
                                        key={bar}
                                        className="w-1 bg-purple-400 animate-music-bar"
                                        style={{
                                          animationDelay: `${bar * 0.2}s`,
                                          height: '16px'
                                        }}
                                      />
                                    ))}
                                  </div>
                                ) : (
                                  <>
                                    <span className="group-hover:hidden">{index + 1}</span>
                                    <Play className="w-4 h-4 hidden group-hover:block text-purple-400" />
                                  </>
                                )}
                              </div>
                            </td>
                            <td className="py-4">
                              <div className="flex items-center gap-3 pr-4">
                                <div className="relative w-12 h-12 rounded-md overflow-hidden group flex-shrink-0">
                                  <img 
                                    src={song.coverArt} 
                                    alt={song.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                  />
                                </div>
                                <div className="min-w-0">
                                  <div className={`font-medium truncate ${currentSong?.id === song.id ? 'text-purple-400' : 'text-white'}`}>
                                    {song.title}
                                  </div>
                                  <div className="text-sm text-gray-400 truncate">{song.artist}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 text-gray-400 hidden md:table-cell truncate">{song.album}</td>
                            <td className="py-4 text-gray-400 hidden lg:table-cell">{song.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Now Playing Card */}
          {currentSong && (
            <div className="animate-slide-in">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-purple-500/10  top-4">
                <div className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-6 shadow-2xl shadow-purple-500/10">
                    <img 
                      src={currentSong.coverArt}
                      alt={currentSong.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                {/* <div className='grid grid-cols-2'> */}
                    <h3 className="text-2xl font-semibold text-white mb-2">{currentSong.title}</h3>
                    <p className="text-lg text-gray-400 mb-1">{currentSong.artist}</p>
                    <p className="text-sm text-gray-500 xl:mb-[106px] 2xl:mb-[92px] text-center">{currentSong.album}</p>
                {/* </div>  */}
                </div>

                {/* <div className="flex mb-10 space-x-1 mt-6 justify-center">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 ].map((bar) => (
                                      <div
                                        key={bar}
                                        className="w-2 bg-purple-400 animate-music-bar"
                                        style={{
                                          animationDelay: `${bar * 0.2}s`,
                                          height: '26px'
                                        }}
                                      />
                                    ))}
                                  </div> */}

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Player */}
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-black/70 backdrop-blur-xl border-t border-purple-500/20 p-4 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden">
                <img 
                  src={currentSong.coverArt} 
                  alt={currentSong.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-medium text-white">{currentSong.title}</div>
                <div className="text-sm text-gray-400">{currentSong.artist}</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 flex-1 max-w-2xl">
              <div className="flex items-center gap-6">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Shuffle className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipBack className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  disabled={isLoading}
                  className="w-10 h-10 rounded-full bg-purple-500 hover:bg-purple-400 flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 disabled:opacity-50"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white translate-x-0.5" />
                  )}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipForward className="w-6 h-6" />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Repeat className="w-5 h-5" />
                </button>
              </div>
              
              <div className="w-full flex items-center gap-2 text-xs text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden cursor-pointer group" onClick={handleProgressClick}>
                  <div 
                    className="h-full bg-purple-500 group-hover:bg-purple-400 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 min-w-[150px]">
              <Volume2 className="w-5 h-5 text-gray-400" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full accent-purple-500"
              />
            </div>
          </div>
        </div>
      )}

      <audio
        ref={audioRef}
        src={currentSong?.audioUrl}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
            setProgress((audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100);
          }
        }}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setError('Failed to load audio');
          setIsLoading(false);
          setIsPlaying(false);
        }}
      />

      {/* Error Message */}
      {error && (
        <div className="fixed top-4 right-4 bg-red-500/90 text-white px-4 py-2 rounded-lg shadow-lg">
          {error}
        </div>
      )}

<style jsx global>{`
        @keyframes musicBar {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        
        .animate-music-bar {
          animation: musicBar 1s ease-in-out infinite;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MusicPlayer;