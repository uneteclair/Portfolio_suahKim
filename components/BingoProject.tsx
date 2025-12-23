import React, { useEffect, useState } from 'react';

// --- Icons (SVG Implementation to match user's lucide-react request without external dependencies) ---
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

const ArrowDown = (props: any) => (<IconWrapper {...props}><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></IconWrapper>);
const MessageCircle = (props: any) => (<IconWrapper {...props}><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></IconWrapper>);
const FileText = (props: any) => (<IconWrapper {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></IconWrapper>);
const PieChart = (props: any) => (<IconWrapper {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></IconWrapper>);
const RefreshCw = (props: any) => (<IconWrapper {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></IconWrapper>);
const Search = (props: any) => (<IconWrapper {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></IconWrapper>);

// --- Data Constants ---
const logos = [
  { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', darkBg: false },
  { name: 'Amazon', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', darkBg: true },
  { name: 'Spotify', src: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg', darkBg: true },
  { name: 'Microsoft', src: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', darkBg: false },
  { name: 'Toss', src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Toss_Logo_Primary.png', darkBg: false },
  { name: 'Line', src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg', darkBg: false },
  { name: 'Woowa', src: '', darkBg: false, color: '#2AC1BC', text: '배달의민족' }, 
  { name: 'Yanolja', src: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Yanolja_Corporate_Logo.svg', darkBg: false }, 
  { name: 'Kurly', src: '', darkBg: false, color: '#5F0080', text: 'Market Kurly' },
  { name: 'BankSalad', src: '', darkBg: false, color: '#1DB95F', text: 'BankSalad' },
  { name: 'OHouse', src: '', darkBg: false, color: '#35C5F0', text: '오늘의집' },
  { name: 'Zigbang', src: '', darkBg: false, color: '#FA880B', text: '직방' },
];

const painPointsSteps = [
  {
    title: '팀 회고 설계',
    description: '회고에 필요한 방법론과 질문을 직접 찾거나 템플릿을 만들어야 하기 때문에 고려해야 할 점이 너무 많아요',
    icon: <FileText size={20} />
  },
  {
    title: '회고 작성',
    description: '회고를 작성하려 할 때, 선택지가 많고 범위가 넓어 회고 작성이 부담스럽고 피곤해요',
    icon: <MessageCircle size={20} />
  },
  {
    title: '답변 취합 및 결과 도출',
    description: '팀원들의 답변을 일일이 취합 후 가공하여 결과를 도출하기에 시간과 수고가 많이 들어요',
    icon: <PieChart size={20} />
  },
  {
    title: '결과 적용',
    description: '회고 작성 후 변화가 없어 회고의 의미를 모르겠어요',
    icon: <RefreshCw size={20} />
  },
  {
    title: '회고 조회',
    description: '프로젝트마다 회고가 분산되어 있어 과거의 회고 기록을 찾기 어려워요',
    icon: <Search size={20} />
  },
];

// --- Sub-components ---
const LogoItem = ({ logo }: { logo: typeof logos[0] }) => {
  const [error, setError] = useState(false);
  if (error || !logo.src) {
    return (
      <span 
        className="text-lg font-medium transition-all duration-300 opacity-70 group-hover:opacity-100"
        style={{ color: logo.color || 'white' }}
      >
        {logo.text || logo.name}
      </span>
    );
  }
  return (
    <img 
      src={logo.src} 
      alt={logo.name} 
      className={`max-h-8 w-auto object-contain filter ${logo.darkBg ? 'invert' : 'grayscale invert'} group-hover:grayscale-0 group-hover:invert-0 transition-all duration-300 opacity-70 group-hover:opacity-100`}
      onError={() => setError(true)}
    />
  );
};

const LogoGrid: React.FC = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 opacity-90">
    {logos.map((logo, index) => (
      <div 
        key={index} 
        className="h-24 bg-[#141414] rounded-lg flex items-center justify-center border border-gray-800/50 hover:border-gray-600 transition-colors group px-8"
      >
        <LogoItem logo={logo} />
      </div>
    ))}
  </div>
);

const InterviewSection: React.FC = () => (
  <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#111]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16 border-l-2 border-red-600 pl-6">
        <h3 className="text-sm text-gray-400 font-light mb-2 tracking-wider uppercase">Targeted in-depth interviews</h3>
        <h2 className="text-3xl font-medium text-white leading-relaxed">타겟 심층 인터뷰</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <div className="bg-[#1a1a1a] text-white rounded-[2rem] p-10 border border-gray-800 shadow-2xl relative overflow-hidden group hover:border-gray-700 transition-colors duration-300">
          <div className="relative z-10 h-full flex flex-col">
            <h4 className="text-red-500 font-medium text-lg mb-4">Q.</h4>
            <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-gray-100">
              <span className="block mb-3">팀 회고를 진행하며</span>
              느꼈던 <span className="text-white font-medium border-b border-white/30 pb-1">어려움</span>은 무엇인가요?
            </h3>
            <div className="mt-auto space-y-8">
              <div>
                <p className="text-lg font-medium text-red-400 mb-2">회고 내용의 작성이 어려워요</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-600 h-full w-[51.9%] rounded-full shadow-[0_0_10px_rgba(220,38,38,0.3)]"></div>
                  </div>
                  <span className="text-2xl font-medium text-red-500">51.9%</span>
                </div>
              </div>
              <div className="opacity-80">
                  <p className="text-base font-medium text-gray-400 mb-2">회고 결과의 도출이 어려워요</p>
                  <div className="flex items-center gap-4">
                      <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-gray-600 h-full w-[26%] rounded-full"></div>
                      </div>
                      <span className="text-lg font-medium text-gray-500">26%</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1a1a1a] text-white rounded-[2rem] p-10 border border-gray-800 shadow-2xl relative overflow-hidden group hover:border-gray-700 transition-colors duration-300">
          <div className="relative z-10 h-full flex flex-col">
            <h4 className="text-red-500 font-medium text-lg mb-4">Q.</h4>
            <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-gray-100">
              <span className="block mb-3">팀 회고 서비스에서</span>
              <span className="text-white font-medium border-b border-white/30 pb-1">기대하는 것</span>은 무엇인가요?
            </h3>
            <div className="mt-auto space-y-8">
              <div>
                <p className="text-lg font-medium text-red-400 mb-2">의미있는 회고를 작성하고 싶어요</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-600 h-full w-[32.8%] rounded-full shadow-[0_0_10px_rgba(220,38,38,0.3)]"></div>
                  </div>
                  <span className="text-2xl font-medium text-red-500">32.8%</span>
                </div>
              </div>
              <div className="opacity-80">
                  <p className="text-base font-medium text-gray-400 mb-2">회고를 통해 객관적인 결과를 얻고 싶어요</p>
                  <div className="flex items-center gap-4">
                      <div className="flex-1 bg-gray-800 h-2 rounded-full overflow-hidden">
                          <div className="bg-gray-600 h-full w-[30%] rounded-full"></div>
                      </div>
                      <span className="text-lg font-medium text-gray-500">30%</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 p-8 bg-[#141414] border border-gray-800 rounded-2xl flex flex-col md:flex-row items-center justify-between">
         <div className="mb-8 md:mb-0 max-w-2xl">
             <p className="text-gray-500 text-xs tracking-widest uppercase mb-3">Key Finding</p>
             <h4 className="text-xl md:text-2xl text-gray-200 font-light leading-[2.0]">
                 <span className="block mb-2">회고 작성의 어려움은 <span className="font-medium text-white">회고가 잘 진행되게 만드는</span></span>
                 <span className="text-red-500 font-medium">회고 설계</span>가 제대로 <span className="text-red-500 font-medium">되지 않았기에</span> 발생합니다.
             </h4>
         </div>
         <div className="hidden md:block w-px h-16 bg-gray-800 mx-10"></div>
         <div className="text-right">
             <span className="block text-3xl font-medium text-red-600 tracking-tighter">Key Point</span>
         </div>
      </div>
    </div>
  </section>
);

const DefinitionCircle: React.FC = () => (
  <section className="py-24 bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden">
    <div className="relative group">
      <div className="w-[220px] h-[220px] md:w-[340px] md:h-[340px] bg-[#EA4335] rounded-full flex flex-col items-center justify-center text-center p-6 shadow-[0_0_80px_rgba(234,67,53,0.3)] transition-transform duration-700 group-hover:scale-105">
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">회고</h2>
        <div className="space-y-3 text-base md:text-lg text-white/90 font-medium tracking-wide leading-relaxed">
          <p>1. 뒤를 돌아다봄</p>
          <p>2. 지나간 일을<br/>돌이켜 생각함</p>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-red-500/10 rounded-full animate-spin-slow pointer-events-none"></div>
    </div>
    <div className="mt-16 text-center max-w-2xl px-6">
      <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 leading-normal">
          자신이 했던 일들을 복기하며<br className="md:hidden"/> 배울 점을 찾는 것
      </h3>
      <p className="text-gray-400 font-light text-lg leading-relaxed">
          자신의 업무가 더 좋은 성과로 이어질 수 있도록 준비하는 과정
      </p>
    </div>
    <div className="mt-16 flex gap-6 md:gap-16">
        {['유지할 점', '개선할 점', '실천할 점'].map((item, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#1a1a1a] border border-gray-800 rounded-full flex items-center justify-center mb-3 text-red-500 font-medium text-sm md:text-base shadow-lg group-hover:border-red-500/50 group-hover:bg-[#201010] transition-colors duration-300">
                    {item}
                </div>
            </div>
        ))}
    </div>
  </section>
);

const ConclusionSection: React.FC = () => (
  <section className="min-h-[60vh] flex items-center justify-center bg-[#0a0a0a] relative py-20">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent"></div>
    <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <span className="text-red-500 font-medium tracking-[0.3em] mb-6 block uppercase text-xs">Core Problem</span>
      <h2 className="text-2xl md:text-4xl font-medium leading-[2.2] mb-16 text-gray-100">
        <span className="block mb-4">회고의 중요성은 <span className="text-red-500 px-1">알고</span> 있는 사람들이</span>
        회고 설계가 <span className="text-red-500 px-1">어렵기</span> 때문에<br />
        <span className="text-gray-400 text-xl md:text-3xl block mt-12 font-light leading-[2.2]">
           <span className="block mb-3">실제 10개중 8개의 직장에서는</span>
           <strong className="text-white font-medium border-b border-red-600/50 pb-1">회고를 진행하고 있지 않습니다.</strong>
        </span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-16 opacity-80">
         {['Importance Awareness', 'Execution Difficulty', 'Actual Adoption'].map((label, idx) => (
           <div key={idx} className="bg-[#141414] p-6 rounded-lg border border-gray-800 w-full md:w-64 hover:border-gray-700 transition-colors">
              <div className={`${idx === 2 ? 'text-gray-400' : 'text-red-500'} text-2xl font-medium mb-2`}>{idx === 2 ? 'Low' : 'High'}</div>
              <div className="text-gray-500 text-xs tracking-wide uppercase">{label}</div>
           </div>
         ))}
      </div>
    </div>
  </section>
);

const PainPointsFlow: React.FC = () => (
  <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
         <span className="text-gray-500 text-xs tracking-[0.2em] uppercase block mb-3">Status Quo</span>
         <h3 className="text-3xl md:text-4xl font-medium text-white leading-normal">기존의 팀 회고</h3>
      </div>
      <div className="relative">
        <div className="absolute left-[20px] md:left-[40px] top-4 bottom-4 w-px bg-gradient-to-b from-red-600 via-red-900 to-gray-800/20"></div>
        <div className="space-y-12">
          {painPointsSteps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 relative pl-16 md:pl-24">
              <div className="absolute left-[14.5px] md:left-[34.5px] top-6 w-3 h-3 rounded-full bg-[#0a0a0a] border-2 border-red-600 z-10"></div>
              <div className="flex flex-col items-start gap-4 max-w-2xl w-full">
                  <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-red-500/50 bg-[#1a0505] text-red-500 text-sm font-medium shadow-[0_0_15px_rgba(220,38,38,0.1)]">
                      {step.title}
                  </div>
                  <div className="bg-[#141414] border border-gray-800 rounded-xl p-5 md:p-6 hover:border-gray-600 transition-all duration-300 hover:bg-[#1a1a1a] group w-full">
                      <div className="flex items-start gap-4">
                      <div className="text-gray-500 mt-1 group-hover:text-red-500 transition-colors opacity-50">
                          {step.icon}
                      </div>
                      <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed">{step.description}</p>
                      </div>
                  </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-[20px] md:left-[40px] w-px h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-20"></div>
      </div>
    </div>
  </section>
);

const SolutionSection: React.FC = () => (
  <section className="bg-[#0a0a0a] py-20 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-6 mb-24">
      <div className="border-l-2 border-red-600 pl-6 mb-8">
          <h3 className="text-sm text-gray-400 font-light mb-2 tracking-wider uppercase">Solution</h3>
          <h2 className="text-3xl font-medium text-white leading-relaxed">
            팀의 발전과 성장을 위한<br/>
            <span className="text-red-500">회고 아카이빙 서비스</span>
          </h2>
      </div>
    </div>

    <div className="space-y-32">
      {/* Feature 1 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
              <div className="text-red-500 text-7xl font-medium opacity-20 mb-[-30px] ml-[-8px] select-none">1</div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 relative z-10 leading-normal">
                  <span className="block mb-2">한 공간에서 관리하는</span>
                  <span className="text-red-500">프로젝트 아카이빙</span>
              </h3>
              <div className="space-y-4 relative z-10">
                  <div className="bg-[#141414] p-5 rounded-xl border border-gray-800">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">As-Is</span>
                      <p className="text-gray-400 font-light leading-relaxed">프로젝트마다 회고가 분산되어 있어<br/>과거의 회고 기록을 찾기 어려웠어요.</p>
                  </div>
                  <div className="bg-[#1a0505] p-5 rounded-xl border border-red-900/30">
                      <span className="text-xs font-medium text-red-500 uppercase tracking-wider block mb-1">To-Be</span>
                      <p className="text-white font-medium leading-relaxed">한 공간에서 여러 프로젝트를 관리하며,<br/>과거의 회고를 돌아보며 성장 정도를 파악해요.</p>
                  </div>
              </div>
              <ul className="mt-6 space-y-2 text-gray-400 font-light">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>직접 프로젝트 생성</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>사용자가 속한 프로젝트 리스트 조회</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>특정 프로젝트 초대 기능</li>
              </ul>
          </div>
          <div className="order-2 lg:order-2 w-full flex flex-col gap-8">
               <div className="relative w-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl bg-[#111] group">
                  <img src="https://github.com/uneteclair/my-images/blob/main/solution_2.png?raw=true" alt="Main Archive UI" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
               </div>
               <div className="relative w-full rounded-xl overflow-hidden border border-gray-800 shadow-xl bg-[#111] group">
                  <img src="https://github.com/uneteclair/my-images/blob/main/solution_5.png?raw=true" alt="Archive UI Detail" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]" />
               </div>
          </div>
      </div>

      {/* Feature 2 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="order-2 lg:order-1 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-red-500/5 blur-[80px] rounded-full pointer-events-none"></div>
              <img 
                  src="https://github.com/uneteclair/my-images/blob/main/solution_6.png?raw=true" 
                  alt="Methodology Recommendation UI" 
                  className="relative w-full rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] border border-gray-800 z-10" 
              />
          </div>
          <div className="order-1 lg:order-2">
              <div className="text-red-500 text-7xl font-medium opacity-20 mb-[-30px] ml-[-8px] select-none">2</div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 relative z-10 leading-normal">
                  <span className="block mb-2">팀 상황에 딱 맞는</span>
                  <span className="text-red-500">회고 방법론 추천</span>
              </h3>
              <div className="space-y-4 relative z-10">
                  <div className="bg-[#141414] p-5 rounded-xl border border-gray-800">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">As-Is</span>
                      <p className="text-gray-400 font-light leading-relaxed">방법론을 직접 찾거나 템플릿을 만들어야 해서<br/>고려해야 할 점이 너무 많았어요.</p>
                  </div>
                  <div className="bg-[#1a0505] p-5 rounded-xl border border-red-900/30">
                      <span className="text-xs font-medium text-red-500 uppercase tracking-wider block mb-1">To-Be</span>
                      <p className="text-white font-medium leading-relaxed">검증된 프레임워크(KPT, 4Ls 등)를 추천받고,<br/>팀원들에게 물어볼 세부 질문을 설정해요.</p>
                  </div>
              </div>
               <ul className="mt-6 space-y-2 text-gray-400 font-light">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>팀 상황별 적합한 방법론 추천</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>팀 맞춤형 세부 질문 설정</li>
              </ul>
          </div>
      </div>

      {/* Feature 3 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
              <div className="text-red-500 text-7xl font-medium opacity-20 mb-[-30px] ml-[-8px] select-none">3</div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 relative z-10 leading-normal">
                  <span className="block mb-2">가이드라인으로 쉬워지는</span>
                  <span className="text-red-500">회고 작성</span>
              </h3>
              <div className="space-y-4 relative z-10">
                  <div className="bg-[#141414] p-5 rounded-xl border border-gray-800">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">As-Is</span>
                      <p className="text-gray-400 font-light leading-relaxed">작성 시 선택지가 많고 범위가 넓어<br/>회고 작성이 부담스럽고 피곤했어요.</p>
                  </div>
                  <div className="bg-[#1a0505] p-5 rounded-xl border border-red-900/30">
                      <span className="text-xs font-medium text-red-500 uppercase tracking-wider block mb-1">To-Be</span>
                      <p className="text-white font-medium leading-relaxed">생성자가 만든 가이드라인을 제공받아<br/>회고 내용을 쉽고 빠르게 작성할 수 있어요.</p>
                  </div>
              </div>
               <ul className="mt-6 space-y-2 text-gray-400 font-light">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>팀 맞춤형 회고 가이드라인</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>팀 핵심 가치 키워드 선택</li>
              </ul>
          </div>
          <div className="order-2 lg:order-2 flex flex-col gap-6">
               <img src="https://github.com/uneteclair/my-images/blob/main/solution_7.png?raw=true" alt="UI 7" className="w-full rounded-xl border border-gray-800 shadow-xl" />
               <img src="https://github.com/uneteclair/my-images/blob/main/solution_8.png?raw=true" alt="UI 8" className="w-full rounded-xl border border-gray-800 shadow-xl" />
          </div>
      </div>

      {/* Feature 4 */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="order-2 lg:order-1 relative flex items-center justify-center">
              <div className="relative w-full flex items-center justify-center">
                  <div className="absolute inset-0 border border-dashed border-red-900/30 rounded-full animate-spin-slow pointer-events-none scale-110"></div>
                  <img src="https://github.com/uneteclair/my-images/blob/main/solution_9.png?raw=true" alt="UI 9" className="relative w-full rounded-xl shadow-2xl border border-gray-800 z-10" />
              </div>
          </div>
          <div className="order-1 lg:order-2">
              <div className="text-red-500 text-7xl font-medium opacity-20 mb-[-30px] ml-[-8px] select-none">4</div>
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-6 relative z-10 leading-normal">
                  <span className="block mb-2">한눈에 확인하는</span>
                  <span className="text-red-500">회고 결과 도출</span>
              </h3>
              <div className="space-y-4 relative z-10">
                  <div className="bg-[#141414] p-5 rounded-xl border border-gray-800">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-1">As-Is</span>
                      <p className="text-gray-400 font-light leading-relaxed">답변을 일일이 취합하고 가공하여<br/>결과를 도출하기에 시간과 수고가 많이 들었어요.</p>
                  </div>
                  <div className="bg-[#1a0505] p-5 rounded-xl border border-red-900/30">
                      <span className="text-xs font-medium text-red-500 uppercase tracking-wider block mb-1">To-Be</span>
                      <p className="text-white font-medium leading-relaxed">제출된 답변을 즉시 취합하여,<br/>의미있는 결과를 신속하게 도출해 볼 수 있어요.</p>
                  </div>
              </div>
               <ul className="mt-6 space-y-2 text-gray-400 font-light">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>자동 결과 취합 및 시각화</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>모든 팀원의 답변 한눈에 모아보기</li>
              </ul>
          </div>
      </div>
    </div>
  </section>
);

const BenefitSection: React.FC = () => (
  <div className="bg-[#0a0a0a] py-16">
    <div className="max-w-7xl mx-auto px-6 mb-16 border-b border-gray-900 pb-6">
      <h3 className="text-xl md:text-2xl font-medium text-white leading-normal">기대효과 <span className="text-gray-500 font-light ml-2">Benefit</span></h3>
    </div>
    <div className="space-y-24 max-w-7xl mx-auto px-6 pb-24">
      {/* Benefit 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[360px] w-full bg-[#111] rounded-3xl overflow-hidden flex items-center justify-center border border-gray-800/50 group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative w-40 h-40 bg-[#EA4335] rounded-full flex items-center justify-center animate-pulse-slow shadow-[0_0_60px_rgba(234,67,53,0.3)]">
                  <div className="w-12 h-12 bg-white rounded-full shadow-inner"></div>
              </div>
          </div>
          <div>
              <h4 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-normal">팀원과 팀의 균형</h4>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-[2.2] break-keep">
                  팀 회고를 진행하며 도출되는 <span className="text-white font-medium">유지할 점, 개선할 점, 실천할 점</span>을 바탕으로 팀원은 <span className="text-white font-medium border-b border-white/20">개인의 발전</span>을, 팀은 <span className="text-white font-medium border-b border-white/20">조직의 발전</span>을 경험하며 팀원도 팀도 성장의 균형을 이룹니다.
              </p>
          </div>
      </div>
      {/* Benefit 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
           <div className="lg:order-2 relative h-[360px] w-full bg-[#111] rounded-3xl overflow-hidden flex items-center justify-center border border-gray-800/50 group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative w-56 h-56 flex items-center justify-center animate-spin-slow-reverse">
                  <div className="absolute top-8 left-8 w-16 h-16 bg-[#EA4335] rounded-full opacity-90"></div>
                  <div className="absolute bottom-8 right-8 w-20 h-20 bg-[#EA4335] rounded-full opacity-90"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-[#EA4335] rounded-full shadow-lg z-10"></div>
                  <div className="absolute top-[70px] left-[70px] w-[120px] h-1 border-t-2 border-dashed border-red-400 transform rotate-45"></div>
              </div>
          </div>
          <div className="lg:order-1">
              <h4 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-normal">실패와 성공의 균형</h4>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-[2.2] break-keep">
                  팀 회고를 진행하며 도출되는 <span className="text-white font-medium">배운점, 느낀점</span>을 바탕으로 실패에서는 <span className="text-white font-medium border-b border-white/20">같은 실수를 반복하지 않을 교훈</span>을, 성공에서는 <span className="text-white font-medium border-b border-white/20">같은 성과를 낼 수 있을 노하우</span>를 얻으며 실패를 통해서도, 성공을 통해서도 <span className="text-white font-medium">성장의 균형</span>을 이룹니다.
              </p>
          </div>
      </div>
      {/* Benefit 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative h-[360px] w-full bg-[#111] rounded-3xl overflow-hidden flex items-center justify-center border border-gray-800/50 group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-700"></div>
              <div className="relative flex flex-col items-center gap-2 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="w-20 h-14 bg-[#EA4335] rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"></div>
                  <div className="w-28 h-16 bg-[#EA4335] rounded-[50%_50%_30%_70%/50%_40%_60%_50%] ml-3"></div>
                  <div className="w-24 h-16 bg-[#EA4335] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] -ml-1"></div>
              </div>
          </div>
          <div>
              <h4 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-normal">잘하기와 자라기의 균형</h4>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-[2.2] break-keep">
                  팀 회고를 진행하며 돌아보는 <span className="text-white font-medium">과정과 결과</span>를 바탕으로 팀이 다시 <span className="text-white font-medium border-b border-white/20">시작</span>하고 <span className="text-white font-medium border-b border-white/20">복기</span>할 수 있는 <span className="text-white font-medium">기회와 시간</span>을 얻으며 잘하기와 자라기 둘 다 놓치지 않는 <span className="text-white font-medium">성장의 균형</span>을 이룹니다.
              </p>
          </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---
const BingoProject: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => { 
    setIsVisible(true); 
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-500 selection:text-white overflow-x-hidden font-light">
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center mix-blend-difference">
        <div className="text-xs font-light text-gray-500">UX/UI PORTFOLIO</div>
        <a 
          href="#/" 
          onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} 
          className="text-[10px] font-bold text-white border border-white/20 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full hover:bg-white hover:text-black transition-all cursor-pointer pointer-events-auto"
        >BACK TO MAIN</a>
      </nav>

      <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2632&auto=format&fit=crop')] bg-cover bg-center opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} z-10 text-center max-w-5xl`}>
          <h2 className="text-red-500 font-medium mb-8 tracking-wider uppercase text-sm md:text-base">Problem Background</h2>
          <h1 className="text-3xl md:text-5xl font-medium mb-12 leading-tight">
            <span className="block mb-4 md:mb-6">이렇게 중요한 <span className="text-red-500">회고</span>,</span>
            여러분의 팀은 어떻게 <span className="text-red-500">진행</span>하고 계시나요?
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">How is your team conducting retrospectives?</p>
        </div>
        <div className="absolute bottom-10 animate-bounce"><ArrowDown className="text-gray-600" size={24} /></div>
      </section>

      <section className="py-20 bg-[#0a0a0a] border-t border-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gray-500 text-sm block mb-3 tracking-wide">문제 배경</span>
            <h3 className="text-3xl md:text-4xl font-medium leading-relaxed">이 혁신적인 기업들의 <span className="text-red-500 border-b border-red-500 pb-1">공통점</span>은 무엇일까요?</h3>
          </div>
          <LogoGrid />
          <div className="mt-16 text-center">
            <p className="text-2xl md:text-3xl font-light text-gray-300 leading-normal">
              바로 <span className="text-white font-medium bg-red-600/10 px-4 py-2 rounded-full border border-red-600/30">기업만의 회고 문화</span>를 가지고 있다는 것
            </p>
          </div>
        </div>
      </section>

      <DefinitionCircle />

      <section className="min-h-[70vh] flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden py-24">
         <div className="max-w-3xl mx-auto px-6 w-full z-10">
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <span className="text-gray-500 font-medium tracking-widest mb-6 block uppercase text-xs w-full text-center md:text-left">Status Quo</span>
              <h3 className="text-3xl md:text-4xl font-medium mb-16 leading-[1.6] w-full text-center md:text-left">
                <span className="block mb-3">직장 내</span>구체적인 피드백 현황
              </h3>
              <div className="space-y-12 w-full">
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <p className="text-lg font-medium text-gray-400">회고를 진행하고 있다</p>
                    <span className="text-2xl font-medium text-gray-500">24.1%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
                    <div className="bg-gray-600 h-full w-[24.1%] rounded-full"></div>
                  </div>
                </div>
                <div>
                   <div className="flex justify-between items-end mb-3">
                      <p className="text-lg font-medium text-red-500">회고를 진행하고 있지 않다</p>
                      <span className="text-2xl font-medium text-red-500">75.9%</span>
                   </div>
                  <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
                    <div className="bg-red-600 h-full w-[75.9%] rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)]"></div>
                  </div>
                </div>
              </div>
              <p className="mt-16 text-gray-600 text-[10px] font-light leading-relaxed w-full text-center md:text-left">
                (전국 만 19~59세 직장인 성인 남녀 1,000명 대상, 직장 내 근무평가 시스템 및 피드백 관련 조사, 2023, 트렌드모니터)
              </p>
            </div>
         </div>
      </section>

      <InterviewSection />
      <ConclusionSection />
      <PainPointsFlow />
      <SolutionSection />
      <BenefitSection />

      <footer className="py-16 text-center text-gray-600 text-xs border-t border-gray-900 mt-10">
        <p>© 2025 Suah Kim Designer Portfolio</p>
      </footer>
    </div>
  );
};

export default BingoProject;