import React from 'react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    id: 'project-muknan',
    tags: ['Branding'],
    title: '묵난',
    description: '부산 조용한 곳에 자리잡은 한국화 작업실을 브랜딩했습니다. 사진을 직접 찍고 셀렉해 브랜드의 분위기를 형성하고 브랜드 방향성과 잘 어울리는 로고까지 제작하였습니다.',
    contribution: '기여도: 로고 및 브랜딩 90%',
    date: '2025.03',
    imageUrl: 'https://github.com/uneteclair/my-images/blob/main/Thumbnail-muknan.png?raw=true',
    link: '#/project-muknan'
  },
  {
    id: 'project-pard',
    tags: ['Branding'],
    title: 'IT연합동아리 PARD SNS 운영',
    description: 'IT연합동아리 PARD의 BX Designer로서 운영한 SNS 입니다. 게시물을 접할 타겟을 고려하여 적절한 콘텐츠 and 디자인을 제안합니다.',
    contribution: '기여도: 디자인 및 운영 100%',
    date: '2024.07',
    imageUrl: 'https://github.com/uneteclair/my-images/blob/main/Thumbnail-pard.png?raw=true',
    link: '#/project-pard'
  },
  {
    id: 'project-hisbeans',
    tags: ['Package'],
    title: 'Hisbeans Package Design',
    description: '히즈빈스 근로 장애인 스토리가 표현된 드립백 패키지 디자인을 제안합니다.',
    contribution: '기여도: 운영 40% 디자인 100%',
    date: '2023.09',
    imageUrl: 'https://github.com/uneteclair/my-images/blob/main/Thumbnail-hisbeans.png?raw=true',
    link: 'https://www.behance.net/gallery/240882129/Hisbeans%28%29-Drip-Bag-Coffee-Package-Design'
  },
  {
    id: 'project-stepby',
    tags: ['UX/UI', 'Branding'],
    title: 'Bingo',
    description: '팀의 잘하기와 자라기의 BALANCE를 맞춰줄 발전과 성장을 위한 팀 회고 아카이빙 서비스',
    contribution: '기여도: 기획 30% 디자인 90%',
    date: '2023.12',
    imageUrl: 'https://github.com/uneteclair/my-images/blob/main/Thumbnail-bingo.png?raw=true',
    link: '#/project-bingo'
  },
  {
    id: 'project-onmubang',
    tags: ['UX/UI', 'Branding'],
    title: 'All about Me',
    description: "LG전자 선행디자인연구소와의 산학 협력 프로젝트입니다. Z세대의 잠재 니즈를 기반으로 홈 디스플레이의 새로운 컨셉을 제안합니다.",
    contribution: '기여도: 기획 및 리서치 50% 브랜딩 100%',
    date: '2025.03',
    imageUrl: 'https://github.com/uneteclair/my-images/blob/main/Thumbnail-allaboutme.png?raw=true',
    link: 'https://www.behance.net/gallery/238492435/All about Me'
  },
  {
    id: 'project-wagglez',
    tags: ['Branding'],
    title: 'Newjeans[NJZ] Rebranding',
    description: 'NewJeans의 새로운 출발, NJZ를 시각적으로 정의한 브랜드 웹사이트입니다. 정체성의 전환을 디자인으로 담아냈습니다.',
    contribution: '기여도: 기획 및 디자인 100%',
    date: '2025.03',
    imageUrl: 'https://github.com/uneteclair/my-images/blob/main/Thumbnail-njz.png?raw=true',
    link: 'https://www.behance.net/gallery/240507935/Newjeans%28NJZ%29-New-Branding'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-10">
        <h2 className="font-handwriting text-[2.5rem] font-normal mb-16 inline-block">Featured Projects</h2>
        
        <div className="flex flex-col gap-24 scroll-mt-24">
          {projects.map((project) => (
            <article key={project.id} id={project.id} className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16 items-start scroll-mt-24">
              <div className="w-full aspect-[16/10] bg-[#eee] overflow-hidden group hover-target">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="pt-2.5">
                <div className="mb-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block bg-[#000033] text-white px-2.5 py-1 text-xs font-bold mr-1.5 align-middle">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-handwriting text-[3rem] font-normal my-5 leading-[1.1]">{project.title}</h3>
                <p className="text-[#333366] text-base mb-2 leading-[1.7] break-keep">
                  {project.description}
                </p>
                
                {project.date && (
                  <p className="text-[0.75rem] font-medium text-[#000033]/40 mb-4 tracking-tighter">
                    {project.date}
                  </p>
                )}
                
                {project.contribution && (
                  <div className="flex items-start gap-3 mb-10 p-4 bg-[#f9f9ff] rounded-lg transition-all duration-300 hover:shadow-sm">
                    <div className="shrink-0 mt-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#000033" stroke="#000033" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest text-[#000033]/40 mb-1">Project Contribution</span>
                      <p className="text-[0.85rem] font-bold text-[#000033] leading-tight">
                        {project.contribution.replace('기여도: ', '')}
                      </p>
                    </div>
                  </div>
                )}

                <a 
                  href={project.link || '#'} 
                  target={project.link && project.link.startsWith('http') ? "_blank" : "_self"}
                  rel={project.link && project.link.startsWith('http') ? "noopener noreferrer" : ""}
                  onClick={(e) => {
                    // Navigate internally if it's a hash link (including PARD)
                    if (project.link && project.link.startsWith('#')) {
                      e.preventDefault();
                      
                      // Handle scroll-to links correctly
                      if (project.link === '#' + project.id) {
                         const element = document.getElementById(project.id);
                         if (element) {
                           element.scrollIntoView({ behavior: 'smooth' });
                         }
                         return;
                      }

                      sessionStorage.setItem('mainScrollY', window.scrollY.toString());
                      window.location.hash = project.link;
                    }
                  }}
                  className="inline-block border border-[#000033] text-[#000033] px-10 py-3 font-bold text-[0.9rem] transition-colors duration-300 hover:bg-[#000033] hover:text-white bg-transparent hover-target cursor-pointer"
                >
                  VIEW PROJECT
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;