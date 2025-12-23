import React, { useState, useEffect } from 'react';

// --- Icons (SVG Implementation to match user's lucide-react request) ---
const IconWrapper = ({ children, size = 24, className = "" }: { children: React.ReactNode; size?: number; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {children}
  </svg>
);

const ChevronDown = (props: any) => (<IconWrapper {...props}><path d="m6 9 6 6 6-6"/></IconWrapper>);
const Menu = (props: any) => (<IconWrapper {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></IconWrapper>);
const PlusSquare = (props: any) => (<IconWrapper {...props}><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="M8 12h8"/></IconWrapper>);
const Plus = (props: any) => (<IconWrapper {...props}><path d="M12 5v14"/><path d="M5 12h14"/></IconWrapper>);
const Grid = (props: any) => (<IconWrapper {...props}><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></IconWrapper>);
const Bookmark = (props: any) => (<IconWrapper {...props}><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></IconWrapper>);
const UserSquare2 = (props: any) => (<IconWrapper {...props}><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></IconWrapper>);

// --- Types ---
interface Post {
  id: string;
  imageUrl: string;
  linkUrl?: string;
  likes: number;
  comments: number;
  type: 'image' | 'video' | 'carousel';
}

interface UserProfile {
  username: string;
  name: string;
  bio: string[];
  postsCount: number;
  followersCount: number;
  followingCount: number;
  avatarUrl: string;
  hasNote: boolean;
  noteText?: string;
}

// --- Constants & Data ---
const PARD_AVATAR = "https://raw.githubusercontent.com/uneteclair/my-images/main/pard%20logo.png";
const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/official_pard_?igsh=cXRsbDU3N3VjZ2Iw";

const SPECIFIC_IMAGES = [
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B336.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B335.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B334.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B333.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B332.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B331.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B330.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B329.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B328.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B327.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B326.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B325.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B324.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B323.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B322.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B321.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B320.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B319.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B318.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B317.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B316.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B315.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B314.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B313.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B312.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B311.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B310.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B39.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B38.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B37.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B36.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B35.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B34.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B33.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B32.jpg?raw=true",
  "https://github.com/uneteclair/my-images/blob/main/%E1%84%91%E1%85%A1%E1%84%83%E1%85%B31.jpg?raw=true"
];

const SPECIFIC_LINKS: Record<number, string> = {
  0: "https://www.instagram.com/p/DESHdcHzdc3/",
  1: "https://www.instagram.com/p/DEPoOq-zkfu/",
  2: "https://www.instagram.com/p/DENBRbfPQ3n/",
  3: "https://www.instagram.com/p/DECthZ4ygD6/",
  4: "https://www.instagram.com/p/DECtb44yRnv/",
  5: "https://www.instagram.com/p/DECtXzrSVSV/",
  6: "https://www.instagram.com/p/DD9wJHJzmEe/",
  7: "https://www.instagram.com/p/DD4mKg3vWIH/",
  8: "https://www.instagram.com/p/DDyyW0uvcrp/",
  9: "https://www.instagram.com/p/DDpKaLvBCrO/",
  10: "https://www.instagram.com/p/DDe2N8zyHTw/",
  11: "https://www.instagram.com/p/DDUlyBgT7OX/",
  12: "https://www.instagram.com/p/DDJ_JgITl2f/",
  13: "https://www.instagram.com/p/DDCb_lfvrfj/",
  14: "https://www.instagram.com/p/DC9VF0jP7Y4/",
  15: "https://www.instagram.com/p/DC1rPA6hM-a/",
  16: "https://www.instagram.com/p/DCzETOaTNGO/",
  17: "https://www.instagram.com/p/DCor6q6vbEV/",
  18: "https://www.instagram.com/p/DCjsTdHBJfq/",
  19: "https://www.instagram.com/p/DCefMnYSdjl/",
  20: "https://www.instagram.com/p/DB5Rxo2yEsP/",
  21: "https://www.instagram.com/p/DBqt8M1yYmG/",
  22: "https://www.instagram.com/p/DBqt5HryXYt/",
  23: "https://www.instagram.com/p/DBqt1gLSPKH/",
  24: "https://www.instagram.com/p/DBjIhqsvQ2-/",
  25: "https://www.instagram.com/p/DBRKeBmz8G2/",
  26: "https://www.instagram.com/p/DBJeawLSSDO/",
  27: "https://www.instagram.com/p/DA8XkReTk_e/",
  28: "https://www.instagram.com/p/DAyUK07yhx_/",
  29: "https://www.instagram.com/p/DAn93MiSoWM/",
  30: "https://www.instagram.com/p/DAiwMCSSyte/",
  31: "https://www.instagram.com/p/DAOEulmzu5I/",
  32: "https://www.instagram.com/p/DAD5wOpyLoG/",
  33: "https://www.instagram.com/p/C-p5Qn3T0M1/",
  34: "https://www.instagram.com/p/C-p5Lp3zBsg/",
  35: "https://www.instagram.com/p/C-p5J4tz61Z/"
};

const USER_PROFILE: UserProfile = {
  username: "official_pard_",
  name: "PARD 파드",
  bio: [
    "Pay it forward를 실천하는",
    "🌊 포항시 IT 협업 동아리 🌊",
    "Design | Develop | Plan"
  ],
  postsCount: 152,
  followersCount: 486,
  followingCount: 45,
  avatarUrl: PARD_AVATAR,
  hasNote: false,
  noteText: ""
};

const POSTS_DATA: Post[] = Array.from({ length: 36 }).map((_, i) => ({
  id: `post-${i}`,
  imageUrl: SPECIFIC_IMAGES[i],
  linkUrl: SPECIFIC_LINKS[i],
  likes: Math.floor(Math.random() * 500) + 10,
  comments: Math.floor(Math.random() * 50),
  type: i % 7 === 0 ? 'carousel' : 'image'
}));

const ProfileHeader: React.FC<{ username: string }> = ({ username }) => (
  <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-ig-border h-[44px] flex items-center justify-between px-4">
    <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 active:opacity-60 transition-opacity">
      <h1 className="text-xl font-bold tracking-tight text-white">{username}</h1>
      <ChevronDown size={16} strokeWidth={2.5} className="text-white" />
      <div className="w-2 h-2 bg-red-600 rounded-full ml-1 mb-2"></div>
    </a>
    <div className="flex items-center gap-6 text-white">
      <PlusSquare size={26} strokeWidth={2} />
      <Menu size={28} strokeWidth={2} />
    </div>
  </header>
);

const ProfileInfo: React.FC<{ profile: UserProfile }> = ({ profile }) => (
  <section className="px-4 py-4 pb-2 text-white">
    <div className="flex items-center mb-4">
      <div className="relative mr-6 shrink-0">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-gradient-to-tr from-gray-800 to-gray-700 relative group cursor-pointer">
          <div className="w-full h-full rounded-full border-2 border-black overflow-hidden bg-black flex items-center justify-center">
            <img src={profile.avatarUrl} alt={profile.username} className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 bg-ig-text text-black rounded-full border-2 border-black p-0.5">
            <Plus size={14} strokeWidth={4} />
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-around items-center">
        <div className="flex flex-col items-center cursor-pointer active:opacity-70 transition-opacity">
          <span className="font-semibold text-lg sm:text-xl leading-4">{profile.postsCount}</span>
          <span className="text-sm text-white/90 mt-1">posts</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer active:opacity-70 transition-opacity">
          <span className="font-semibold text-lg sm:text-xl leading-4">{profile.followersCount}</span>
          <span className="text-sm text-white/90 mt-1">followers</span>
        </div>
        <div className="flex flex-col items-center cursor-pointer active:opacity-70 transition-opacity">
          <span className="font-semibold text-lg sm:text-xl leading-4">{profile.followingCount}</span>
          <span className="text-sm text-white/90 mt-1">following</span>
        </div>
      </div>
    </div>
    <div className="mt-3 px-1">
      <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-block active:opacity-60 transition-opacity">
        <h2 className="font-bold text-sm tracking-wide">{profile.name}</h2>
      </a>
      <div className="text-sm mt-1 leading-snug text-gray-100 whitespace-pre-line">
        {profile.bio.map((line, idx) => <p key={idx} className="mb-0.5">{line}</p>)}
        <p className="text-ig-gray mt-1">피드를 누르면 실제 게시물로 연결됩니다!</p>
      </div>
    </div>
    <div className="flex gap-2 mt-5 text-sm font-semibold">
      <button className="flex-1 bg-ig-button hover:bg-[#262626] py-1.5 rounded-lg text-white transition-colors">Edit profile</button>
      <button className="flex-1 bg-ig-button hover:bg-[#262626] py-1.5 rounded-lg text-white transition-colors">Share profile</button>
    </div>
  </section>
);

const PhotoGrid: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <div className="mt-4">
    <div className="flex justify-around border-t border-ig-border">
      <button className="flex-1 flex justify-center py-3 border-b-2 border-white text-white"><Grid size={24} /></button>
      <button className="flex-1 flex justify-center py-3 text-ig-gray hover:text-white transition-colors"><Bookmark size={24} /></button>
      <button className="flex-1 flex justify-center py-3 text-ig-gray hover:text-white transition-colors"><UserSquare2 size={24} /></button>
    </div>
    <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
      {posts.map((post) => (
        <a key={post.id} href={post.linkUrl} target="_blank" rel="noopener noreferrer" className="relative aspect-square group cursor-pointer overflow-hidden bg-gray-900 block">
          <img src={post.imageUrl} alt="Project" className="w-full h-full object-cover group-hover:opacity-90 transition-opacity" loading="lazy" />
          {post.type === 'carousel' && (
            <div className="absolute top-2 right-2">
              <svg aria-label="Carousel" className="text-white drop-shadow-md" fill="currentColor" height="12" viewBox="0 0 48 48" width="12"><path d="M34.8 29h-28c-1.1 0-2 .9-2 2s.9 2 2 2h28c1.1 0 2-.9 2-2s-.9-2-2-2zm0-22h-28c-1.1 0-2 .9-2 2s.9 2 2 2h28c1.1 0 2-.9 2-2s-.9-2-2-2zm4 22h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2c1.1 0 2-.9 2-2s-.9-2-2-2zm4-22h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2c1.1 0 2-.9 2-2s-.9-2-2-2z"></path></svg>
            </div>
          )}
        </a>
      ))}
    </div>
  </div>
);

const PardSnsProject: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#333]">
       <nav className="fixed top-0 left-0 w-full z-[100] px-4 py-2 flex justify-end items-center pointer-events-none">
        <a 
          href="#/" 
          onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} 
          className="text-[10px] font-bold text-white border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer pointer-events-auto"
        >BACK TO MAIN</a>
      </nav>

      <main className="min-h-screen bg-black md:max-w-[470px] md:mx-auto md:border-x md:border-ig-border shadow-2xl relative font-sans">
        <ProfileHeader username={USER_PROFILE.username} />
        <div className="overflow-y-auto h-[calc(100vh-44px)] no-scrollbar pb-10">
          <ProfileInfo profile={USER_PROFILE} />
          <PhotoGrid posts={POSTS_DATA} />
          <div className="py-12 text-center text-[10px] text-ig-gray border-t border-ig-border mt-10">
             <p>© 2025 PARD Portfolio - Kim Suah</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PardSnsProject;