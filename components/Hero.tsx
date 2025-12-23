import React from 'react';

const Hero: React.FC = () => {
  const scrollToProject = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Calculate offset for sticky header or better positioning
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header id="hero" className="min-h-screen py-10 flex items-center relative box-border">
      <div className="absolute top-8 left-10 font-bold text-lg font-sans">
        2025 Suah Kim Portfolio
      </div>

      <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-[3.5fr_6.5fr] h-full items-center gap-10 lg:gap-0 pt-24">
        {/* Left Column */}
        <div className="flex flex-col justify-center h-full gap-8">
          <div className="flex flex-col gap-5 md:flex-row lg:flex-col md:justify-between lg:justify-start flex-wrap">
            
            {/* 0. 묵난 */}
            <a 
              href="#project-muknan" 
              onClick={(e) => scrollToProject(e, 'project-muknan')}
              className="hover-target group opacity-100 hover:opacity-60 transition-opacity block w-full md:w-[45%] lg:w-full"
            >
              <div className="mb-1">
                <span className="inline-block bg-[#000033] text-white px-2 py-0.5 text-[10px] font-bold mr-1 align-middle">Branding</span>
              </div>
              <h3 className="font-sans text-xl font-extrabold my-0.5 leading-tight">묵난</h3>
              <p className="text-xs text-[#333366] font-medium break-keep leading-relaxed">한국화 작업실 브랜딩</p>
            </a>

            {/* 1. PARD */}
            <a 
              href="#project-pard" 
              onClick={(e) => scrollToProject(e, 'project-pard')}
              className="hover-target group opacity-100 hover:opacity-60 transition-opacity block w-full md:w-[45%] lg:w-full"
            >
              <div className="mb-1">
                <span className="inline-block bg-[#000033] text-white px-2 py-0.5 text-[10px] font-bold mr-1 align-middle">Branding</span>
              </div>
              <h3 className="font-sans text-xl font-extrabold my-0.5 leading-tight">IT연합동아리 PARD SNS 운영</h3>
              <p className="text-xs text-[#333366] font-medium break-keep leading-relaxed">SNS 콘텐츠 디자인 및 운영</p>
            </a>

            {/* 2. Hisbeans */}
            <a 
              href="#project-hisbeans" 
              onClick={(e) => scrollToProject(e, 'project-hisbeans')}
              className="hover-target group opacity-100 hover:opacity-60 transition-opacity block w-full md:w-[45%] lg:w-full"
            >
              <div className="mb-1">
                <span className="inline-block bg-[#000033] text-white px-2 py-0.5 text-[10px] font-bold mr-1 align-middle">Package</span>
              </div>
              <h3 className="font-sans text-xl font-extrabold my-0.5 leading-tight">Hisbeans Package Design</h3>
              <p className="text-xs text-[#333366] font-medium">드립백 패키지 리디자인</p>
            </a>

            {/* 3. Bingo */}
            <a 
              href="#project-stepby" 
              onClick={(e) => scrollToProject(e, 'project-stepby')}
              className="hover-target group opacity-100 hover:opacity-60 transition-opacity block w-full md:w-[45%] lg:w-full"
            >
              <div className="mb-1">
                <span className="inline-block bg-[#000033] text-white px-2 py-0.5 text-[10px] font-bold mr-1 align-middle">UX/UI</span>
                <span className="inline-block bg-[#000033] text-white px-2 py-0.5 text-[10px] font-bold mr-1 align-middle">Branding</span>
              </div>
              <h3 className="font-sans text-xl font-extrabold my-0.5 leading-tight">Bingo</h3>
              <p className="text-xs text-[#333366] font-medium break-keep leading-relaxed">회고 아카이빙 서비스</p>
            </a>

            {/* 4. All about Me */}
            <a 
              href="#project-onmubang" 
              onClick={(e) => scrollToProject(e, 'project-onmubang')}
              className="hover-target group opacity-100 hover:opacity-60 transition-opacity block w-full md:w-[45%] lg:w-full"
            >
              <div className="mb-1">
                <span className="inline-block bg-[#000033] text-white px-2 py-0.5 text-[10px] font-bold mr-1 align-middle">UX/UI</span>
                <span className="inline-block bg-[#000033] text-white px-2 py-0.5 text-[10px] font-bold mr-1 align-middle">Branding</span>
              </div>
              <h3 className="font-sans text-xl font-extrabold my-0.5 leading-tight">All about Me</h3>
              <p className="text-xs text-[#333366] font-medium">LG전자 산학 협력 프로젝트</p>
            </a>

            {/* 5. Newjeans Rebranding */}
            <a 
              href="#project-wagglez" 
              onClick={(e) => scrollToProject(e, 'project-wagglez')}
              className="hover-target group opacity-100 hover:opacity-60 transition-opacity block w-full md:w-[45%] lg:w-full"
            >
              <div className="mb-1">
                <span className="inline-block bg-[#000033] text-white px-2 py-0.5 text-[10px] font-bold mr-1 align-middle">Branding</span>
              </div>
              <h3 className="font-sans text-xl font-extrabold my-0.5 leading-tight">Newjeans[NJZ] Rebranding</h3>
              <p className="text-xs text-[#333366] font-medium">NewJeans 리브랜딩 프로젝트</p>
            </a>
          </div>

          <div className="mt-4 lg:mt-6">
            <h4 className="text-base font-extrabold mb-1">Contact Me !</h4>
            <p className="text-[#333366] leading-relaxed text-xs">uneteclair@gmail.com</p>
            <p className="text-[#333366] leading-relaxed text-xs">010-8484-6326</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-end justify-center text-right">
          <span className="font-sans text-[1.1rem] font-light text-[#333366] mb-5 block">
            AI로 단 하루만에 만든 디자이너 김수아의 포트폴리오를 소개합니다.
          </span>
          <h1 className="font-handwriting text-[3.5rem] md:text-[5rem] lg:text-[7rem] leading-[1.1] break-keep -tracking-[2px]">
            사람을 끄는<br />
            매력적인<br />
            디자이너<br />
            김수아입니다
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Hero;