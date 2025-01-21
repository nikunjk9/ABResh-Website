import React, { useState, useMemo, useRef } from 'react';
import { Music2, Play, Pause, Share2, Volume2 } from 'lucide-react';

interface MusicItem {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string;
  artist: string;
  duration: string;
  audioUrl: string;
}

// Add type for stats
interface StatItem {
  value: string;
  label: string;
}

// Add type for genre
type Genre = 'Electronic' | 'Ambient' | 'Synthwave' | 'Progressive' | 'Fusion' | 'Rock';

// Add the sample data back with proper typing
const genres: Genre[] = ['Electronic', 'Ambient', 'Synthwave', 'Progressive', 'Fusion', 'Rock'];

const stats: StatItem[] = [
  { value: '50+', label: 'Tracks Released' },
  { value: '2M+', label: 'Total Streams' },
  { value: '150K', label: 'Monthly Listeners' }
];

// Update StatItem component with proper typing
const StatItem = React.memo(({ value, label }: StatItem) => (
  <div className="text-center lg:text-left">
    <p className="text-2xl lg:text-4xl font-bold text-white mb-1">{value}</p>
    <p className="text-indigo-200 text-sm">{label}</p>
  </div>
));

// Update GenreItem component with proper typing
const GenreItem = React.memo(({ name }: { name: Genre }) => (
  <div className="flex items-center gap-2 text-indigo-200 hover:text-white transition-colors duration-300 group">
    <Music2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
    <span className="text-sm font-medium">{name}</span>
  </div>
));

const ActionButton = React.memo(({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) => (
  <button className="group inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white/10 hover:bg-white/20 
    text-white rounded-lg transition-all duration-300 w-full hover:scale-[1.02] active:scale-[0.98]">
    <Icon className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
    <span className="font-medium">{children}</span>
  </button>
));

const MusicCard = React.memo(({ 
  item, 
  size = 'small',
  currentTrack,
  onPlay,
  isPlaying
}: { 
  item: MusicItem;
  size?: 'small' | 'large';
  currentTrack: MusicItem | null;
  onPlay: (track: MusicItem) => void;
  isPlaying: boolean;
}) => {
  const isCurrentTrack = currentTrack?.id === item.id;
  
  const sizeClasses = useMemo(() => 
    size === 'large' ? 'p-6 lg:p-8 text-xl lg:text-2xl' : 'p-4 lg:p-6 text-lg lg:text-xl',
    [size]
  );
  
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-square hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent 
        opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
      
      <div className={`
        absolute inset-x-0 bottom-0 ${sizeClasses}
        flex flex-col transform translate-y-full group-hover:translate-y-0
        transition-transform duration-500 ease-out
      `}>
        <span className="inline-block text-indigo-300 text-sm font-medium mb-2 
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500
          opacity-0 group-hover:opacity-100">
          {item.category}
        </span>
        
        <h3 className="text-white font-bold mb-2
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75
          opacity-0 group-hover:opacity-100 line-clamp-2">
          {item.title}
        </h3>

        <p className="text-white/70 text-sm mb-1
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-75
          opacity-0 group-hover:opacity-100">
          {item.artist} • {item.duration}
        </p>
        
        <p className={`text-white/90 ${size === 'large' ? 'text-base lg:text-lg' : 'text-sm'} mb-4
          transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-100
          opacity-0 group-hover:opacity-100 line-clamp-2`}>
          {item.description}
        </p>

        <button 
          onClick={() => onPlay(item)}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
            transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 delay-150
            opacity-0 group-hover:opacity-100 w-full
            ${isCurrentTrack && isPlaying 
              ? 'bg-indigo-600/20 hover:bg-indigo-700/20' 
              : 'bg-purple-500/20 hover:bg-purple-700/20'} text-white`}
        >
          {isCurrentTrack && isPlaying ? (
            <>
              <Pause className="w-4 h-4" />
              <span className="whitespace-nowrap">Now Playing</span>
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              <span className="whitespace-nowrap">Play Track</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
});

// Sample data
const musicItems = [
  {
    id: 1,
    image: '/images/imga3.jpg',
    title: "Neon Dreams",
    description: "A journey through neon-lit soundscapes and electronic rhythms",
    category: "Electronic",
    artist: "Digital Drift",
    duration: "4:35",
    audioUrl: "/images/audio4.mp3"
  },
  {
    id: 2,
    image: '/images/imga2.jpg',
    title: "Midnight Wave",
    description: "Ambient melodies meet future garage beats",
    category: "Ambient",
    artist: "Sonic Wave",
    duration: "5:42",
    audioUrl: "/images/audio2.mp3"
  },
  {
    id: 3,
    image: '/images/imga5.jpg',
    title: "Digital Horizon",
    description: "High-energy synthwave with retro-futuristic vibes",
    category: "Synthwave",
    artist: "Tech Pulse",
    duration: "6:15",
    audioUrl: "/images/audio5.mp3"
  },
  {
    id: 4,
    image: '/images/imga4.jpg',
    title: "Crystal Dreams",
    description: "Progressive electronic journey with ethereal soundscapes",
    category: "Progressive",
    artist: "Echo Engine",
    duration: "7:20",
    audioUrl: "/images/audio3.mp3"
  },
  {
    id: 5,
    image: '/images/imga.jpg',
    title: "Neural Dance",
    description: "Where artificial intelligence meets organic rhythm",
    category: "Fusion",
    artist: "Digital Orchestra",
    duration: "5:55",
    audioUrl: "/images/audio1.mp3"
  }
] as const;

const OurMusic = () => {
  const [currentTrack, setCurrentTrack] = useState<MusicItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = (track: MusicItem) => {
    if (currentTrack?.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
      } else {
        audioRef.current?.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      if (audioRef.current) {
        audioRef.current.src = track.audioUrl;
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative bg-purple-950 py-16 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          {/* Left Column */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <span className="inline-block text-base font-semibold text-indigo-300 mb-2 lg:mb-4 tracking-wider 
                transform hover:translate-x-2 transition-transform cursor-default">
                OUR MUSIC PORTFOLIO
              </span>
              <h2 className="text-6xl md:text-7xl lg:text-[92px] font-bold text-white leading-tight">
                Digital
                <span className="block bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
                  Soundscape
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:gap-8">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                Explore our collection of electronic music that pushes boundaries and creates 
                immersive sonic experiences. Each track is crafted with precision, passion, 
                and a vision for the future of sound.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {genres.map((genre) => (
                  <GenreItem key={genre} name={genre} />
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <ActionButton icon={Play}>Listen to Latest Releases</ActionButton>
              <ActionButton icon={Share2}>Share Your Favorite Tracks</ActionButton>
            </div>
          </div>
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4">
            <MusicCard 
              item={musicItems[0]} 
              currentTrack={currentTrack}
              onPlay={handlePlay}
              isPlaying={isPlaying}
            />
            <MusicCard 
              item={musicItems[1]}
              currentTrack={currentTrack}
              onPlay={handlePlay}
              isPlaying={isPlaying}
            />
          </div>
          <div className="md:col-span-6">
            <MusicCard 
              item={musicItems[2]} 
              size="large"
              currentTrack={currentTrack}
              onPlay={handlePlay}
              isPlaying={isPlaying}
            />
          </div>
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4">
            <MusicCard 
              item={musicItems[3]}
              currentTrack={currentTrack}
              onPlay={handlePlay}
              isPlaying={isPlaying}
            />
            <MusicCard 
              item={musicItems[4]}
              currentTrack={currentTrack}
              onPlay={handlePlay}
              isPlaying={isPlaying}
            />
          </div>
        </div>

        <audio 
          ref={audioRef}
          onEnded={() => setIsPlaying(false)}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
      </div>
    </section>
  );
};

export default OurMusic;