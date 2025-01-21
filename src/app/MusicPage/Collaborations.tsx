import React, { useState, useRef } from 'react';
import { Play, Pause, Globe, Music2, X, Users } from 'lucide-react';

// Define proper TypeScript interfaces
interface Featured {
  title: string;
  duration: string;
  audioUrl: string;
}

interface Collaboration {
  artist: string;
  song: string;
  year: number;
}

interface Artist {
  id: number;
  name: string;
  imgUrl: string;
  country: string;
  about: string;
  featured: Featured[];
  collaborations: Collaboration[];
}

interface ArtistCardProps {
  artist: Artist;
  onClick: (artist: Artist) => void;
}

interface ArtistDetailProps {
  artist: Artist;
  onClose: () => void;
}

const artistsData: Artist[] = [
  {
    id: 1,
    name: 'Travis Scott',
    imgUrl: '/images/artist1.jpg',
    country: 'United States',
    about: 'Jacques Bermon Webster II, known professionally as Travis Scott, is an American rapper, singer, songwriter, and record producer. Known for his auto-tuned style and psychedelic music, he has become one of hip-hop\'s most influential artists.',
    featured: [
      {
        title: 'Goosebumps',
        duration: '5:12',
        audioUrl: '/images/audio6.mp3'
      },
      {
        title: 'FE!N',
        duration: '4:23',
        audioUrl: '/images/audio7.mp3'
      }
    ],
    collaborations: [
      {
        artist: 'Kendrick Lamar',
        song: 'Goosebumps',
        year: 2017
      },
      {
        artist: 'Playboi Carti',
        song: 'FE!N',
        year: 2023
      }
    ]
  },
  {
    id: 2,
    name: 'Billie Eilish',
    imgUrl: '/images/artist2.jpg',
    country: 'United States',
    about: 'Billie Eilish Pirate Baird O\'Connell is an American singer-songwriter. Known for her ethereal vocal style and boundary-pushing pop music, she became the youngest artist to win all four major Grammy categories in one year.',
    featured: [
      {
        title: 'Lovely',
        duration: '4:05',
        audioUrl: '/images/audio8.mp3'
      },
      {
        title: 'What Was I Made For?',
        duration: '3:14',
        audioUrl: '/images/audio3.mp3'
      }
    ],
    collaborations: [
      {
        artist: 'Khalid',
        song: 'lovely',
        year: 2024
      },
      {
        artist: 'Billie Eilish',
        song: 'What Was I Made For?',
        year: 2023
      }
    ]
  },
  {
    id: 3,
    name: 'Kendrick Lamar',
    imgUrl: '/images/artist3.jpg',
    country: 'United States',
    about: 'Kendrick Lamar Duckworth is an American rapper, songwriter, and record producer. Widely regarded as one of the most influential rappers of his generation, he is known for his progressive musical styles and socially conscious songwriting.',
    featured: [
      {
        title: 'Not Like Us',
        duration: '3:03',
        audioUrl: '/images/audio9.mp3'
      },
      {
        title: 'tv off',
        duration: '3:39',
        audioUrl: '/images/audio10.mp3'
      }
    ],
    collaborations: [
      {
        artist: 'Baby Keem',
        song: 'family ties',
        year: 2023
      },
      {
        artist: 'SZA',
        song: 'All The Stars',
        year: 2023
      }
    ]
  },
  {
    id: 4,
    name: 'The Weeknd',
    imgUrl: '/images/artist5.jpg',
    country: 'Canada',
    about: 'Abel Makkonen Tesfaye, known professionally as The Weeknd, is a Canadian singer, songwriter, and record producer. His music explores alternative R&B, pop, and hip hop, drawing from dark wave and dream pop.',
    featured: [
      {
        title: 'Blinding Lights',
        duration: '3:20',
        audioUrl: '/images/audio11.mp3'
      },
      {
        title: 'Starboy',
        duration: '3:50',
        audioUrl: '/audio/audio12.mp3'
      }
    ],
    collaborations: [
      {
        artist: 'Travis Scott',
        song: 'K-POP',
        year: 2024
      },
      {
        artist: 'Doja Cat',
        song: 'You Right',
        year: 2023
      }
    ]
  },
  {
    id: 5,
    name: 'SZA',
    imgUrl: '/images/artist4.png',
    country: 'United States',
    about: 'Solána Imani Rowe, known professionally as SZA, is an American singer-songwriter. Her music incorporates elements of soul, R&B, pop, and indie rock, with introspective lyrics exploring themes of sexuality, abandonment, and nostalgia.',
    featured: [
      {
        title: 'Kill Bill',
        duration: '2:33',
        audioUrl: '/images/audio13.mp3'
      },
      {
        title: 'Good Days',
        duration: '4:39',
        audioUrl: '/images/audio14.mp3'
      }
    ],
    collaborations: [
      {
        artist: 'Drake',
        song: 'Slime You Out',
        year: 2023
      },
      {
        artist: 'Billie Eilish',
        song: 'Ghost in the Machine',
        year: 2023
      }
    ]
  },
  {
    id: 6,
    name: 'Adele',
    imgUrl: '/images/artist6.jpg',
    country: 'United Kingdom',
    about: 'Adele Laurie Blue Adkins is an English singer-songwriter. Known for her powerful voice and emotional ballads, she has become one of the world\'s best-selling music artists with numerous records and accolades.',
    featured: [
      {
        title: 'Easy On Me',
        duration: '3:44',
        audioUrl: '/images/audio15.mp3'
      },
      {
        title: 'Rolling in the Deep',
        duration: '3:48',
        audioUrl: '/images/audio16.mp3'
      }
    ],
    collaborations: [
      {
        artist: 'Skepta',
        song: 'Hello (Remix)',
        year: 2023
      },
      {
        artist: 'Chris Stapleton',
        song: 'Easy On Me',
        year: 2023
      }
    ]
  },
  {
    id: 7,
    name: 'Eminem',
    imgUrl: '/images/artist7.jpg',
    country: 'United States',
    about: 'Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer. Often cited as one of the greatest rappers of all time, he is credited with popularizing hip hop in Middle America.',
    featured: [
      {
        title: 'Lose Yourself',
        duration: '5:26',
        audioUrl: '/audio/lose-yourself.mp3'
      },
      {
        title: 'Not Afraid',
        duration: '4:08',
        audioUrl: '/audio/not-afraid.mp3'
      }
    ],
    collaborations: [
      {
        artist: 'Juice WRLD',
        song: 'Godzilla',
        year: 2023
      },
      {
        artist: 'Ed Sheeran',
        song: 'River',
        year: 2023
      }
    ]
  },
  {
    id: 8,
    name: 'Arijit Singh',
    imgUrl: '/images/artist8.jpg',
    country: 'India',
    about: 'Arijit Singh is an Indian playback singer and music composer. Known for his soulful voice and versatility, he has become one of the most successful and popular singers in Indian cinema history.',
    featured: [
      {
        title: 'Tum Hi Ho',
        duration: '4:22',
        audioUrl: '/audio/tum-hi-ho.mp3'
      },
      {
        title: 'Channa Mereya',
        duration: '4:49',
        audioUrl: '/audio/channa-mereya.mp3'
      }
    ],
    collaborations: [
      {
        artist: 'Shreya Ghoshal',
        song: 'Kalank',
        year: 2023
      },
      {
        artist: 'Pritam',
        song: 'Kesariya',
        year: 2023
      }
    ]
  }
];

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => (
  <div 
    onClick={() => onClick(artist)}
    className="group relative bg-gradient-to-br from-purple-900/20 to-black rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10"
  >
    <div className="h-96">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={artist.imgUrl}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="relative z-10 backdrop-blur-sm bg-black/30 p-4 rounded-xl transform transition-all duration-300">
          <h3 className="text-2xl font-bold text-white mb-0 transform transition-all duration-300 group-hover:-translate-y-2">
            {artist.name}
          </h3>
          <div className="flex items-center gap-2 text-purple-300 h-0 opacity-0 group-hover:h-6 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
            <Globe className="w-4 h-4" />
            <span>{artist.country}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface ArtistDetailProps {
  artist: Artist;
  onClose: () => void;
}

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrack, setCurrentTrack] = useState<Featured | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle modal close
  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentTrack(null);
    onClose();
  };

  // Prevent clicks inside the modal from closing it
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handlePlay = (track: Featured) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(track.audioUrl);
    }

    if (currentTrack?.title === track.title) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(track.audioUrl);
      audioRef.current.play();
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  // Clean up audio on unmount
  React.useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-8" 
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-7xl bg-gradient-to-br from-purple-900/20 to-black rounded-2xl overflow-hidden" 
        onClick={handleContentClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-black/50" />
        
        <button 
          onClick={handleClose}
          className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
          type="button"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          <div className="p-8">
            <div className="relative h-[630px] rounded-xl overflow-hidden group">
              <img
                src={artist.imgUrl}
                alt={artist.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            </div>
          </div>

          <div className="p-8 pr-12 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400">{artist.country}</span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">{artist.name}</h2>
              <p className="text-gray-300 leading-relaxed">{artist.about}</p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <Music2 className="w-5 h-5 text-purple-400" />
                Featured Tracks
              </h3>
              <div className="space-y-3">
                {artist.featured.map((track, index) => (
                  <div 
                    key={index}
                    onClick={() => handlePlay(track)}
                    className="group flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                  >
                    <button className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      {currentTrack?.title === track.title && isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white translate-x-0.5" />
                      )}
                    </button>
                    <div>
                      <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                        {track.title}
                      </div>
                      <div className="text-sm text-gray-400">{track.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-purple-400" />
                Recent Collaborations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {artist.collaborations.map((collab, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
                  >
                    <div className="text-purple-400 font-medium mb-1 group-hover:text-purple-300">{collab.artist}</div>
                    <div className="text-white group-hover:text-purple-100">{collab.song}</div>
                    <div className="text-sm text-gray-400 mt-1">{collab.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Collaboration: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <div className="min-h-screen bg-black py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent">
            Collaborations
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore the musical journey of chart-topping artists, from their signature hits to their latest collaborations. 
            Dive into a world of diverse talents and groundbreaking sounds that define contemporary music. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artistsData.map((artist) => (
            <ArtistCard 
              key={artist.id} 
              artist={artist} 
              onClick={setSelectedArtist}
            />
          ))}
        </div>
      </div>

      {selectedArtist && (
        <ArtistDetail 
          artist={selectedArtist} 
          onClose={() => setSelectedArtist(null)}
        />
      )}
    </div>
  );
};

export default Collaboration;