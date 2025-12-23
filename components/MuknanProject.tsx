import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#F5F5F1]">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 animate-[fadeIn_2s_ease-out]"
        style={{ 
          backgroundImage: 'url("https://github.com/uneteclair/my-images/blob/main/muknan-1.png?raw=true")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-black/5 z-10" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce opacity-30 text-neutral-800">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(1.05); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

const MuknanProject: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEEEEE] selection:bg-[#000033] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-4 flex justify-between items-center mix-blend-difference pointer-events-none">
        <div className="text-xs font-light text-white/50">PROJECT: MUKNAN</div>
        <a 
          href="#/" 
          onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} 
          className="text-[10px] font-bold text-white border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer pointer-events-auto"
        >BACK TO MAIN</a>
      </nav>

      <main>
        {/* 1. Hero Section (muknan-1) */}
        <Hero />
        
        {/* 2. First Full Image (muknan-2) */}
        <section className="w-full overflow-hidden bg-[#F5F5F1]">
          <img 
            src="https://github.com/uneteclair/my-images/blob/main/muknan-2.png?raw=true" 
            alt="Muknan Detail 2" 
            className="w-full h-auto block object-cover"
          />
        </section>

        {/* 3. Horizontal Grid: 3 images (muknan-3, 4, 5) */}
        <section className="w-full mt-[4px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4px]">
            <div className="aspect-[9/16] overflow-hidden bg-white">
              <img 
                src="https://github.com/uneteclair/my-images/blob/main/muknan-3.png?raw=true" 
                alt="Muknan Detail 3" 
                className="w-full h-full block object-cover object-center"
              />
            </div>
            <div className="aspect-[9/16] overflow-hidden bg-white">
              <img 
                src="https://github.com/uneteclair/my-images/blob/main/muknan-4.png?raw=true" 
                alt="Muknan Detail 4" 
                className="w-full h-full block object-cover object-center"
              />
            </div>
            <div className="aspect-[9/16] overflow-hidden bg-white">
              <img 
                src="https://github.com/uneteclair/my-images/blob/main/muknan-5.png?raw=true" 
                alt="Muknan Detail 5" 
                className="w-full h-full block object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* 4. Three vertical images stacked (muknan-6, 7, 8) - 4px gap */}
        <section className="w-full overflow-hidden flex flex-col gap-[4px] mt-[4px]">
          <img 
            src="https://github.com/uneteclair/my-images/blob/main/muknan-6.png?raw=true" 
            alt="Muknan Detail 6" 
            className="w-full h-auto block"
          />
          <img 
            src="https://github.com/uneteclair/my-images/blob/main/muknan-7.png?raw=true" 
            alt="Muknan Detail 7" 
            className="w-full h-auto block"
          />
          <img 
            src="https://github.com/uneteclair/my-images/blob/main/muknan-8.png?raw=true" 
            alt="Muknan Detail 8" 
            className="w-full h-auto block"
          />
        </section>

        {/* 5. Grid of 6 images: 2 rows of 3 images (muknan-9 to 14) - 4px gap */}
        <section className="w-full mt-[4px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[4px]">
            {[
              'https://github.com/uneteclair/my-images/blob/main/muknan-9.png?raw=true',
              'https://github.com/uneteclair/my-images/blob/main/muknan-10.png?raw=true',
              'https://github.com/uneteclair/my-images/blob/main/muknan-11.png?raw=true',
              'https://github.com/uneteclair/my-images/blob/main/muknan-12.png?raw=true',
              'https://github.com/uneteclair/my-images/blob/main/muknan-13.png?raw=true',
              'https://github.com/uneteclair/my-images/blob/main/muknan-14.png?raw=true'
            ].map((url, index) => (
              <div key={index} className="aspect-[9/16] overflow-hidden bg-white">
                <img 
                  src={url} 
                  alt={`Muknan Detail ${index + 9}`} 
                  className="w-full h-full block object-cover object-center"
                />
              </div>
            ))}
          </div>
        </section>

        {/* 6. Two vertical images stacked (muknan-15, 16) - NO gap */}
        <section className="w-full overflow-hidden flex flex-col gap-0 mt-[4px]">
          <img 
            src="https://github.com/uneteclair/my-images/blob/main/muknan-15.png?raw=true" 
            alt="Muknan Detail 15" 
            className="w-full h-auto block"
          />
          <img 
            src="https://github.com/uneteclair/my-images/blob/main/muknan-16.png?raw=true" 
            alt="Muknan Detail 16" 
            className="w-full h-auto block"
          />
        </section>
      </main>

      <footer className="py-20 text-center text-neutral-400 text-[10px] bg-neutral-100">
        &copy; 2025 Suah Kim Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default MuknanProject;