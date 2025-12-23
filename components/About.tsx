import React from 'react';
import { ResumeItem, SkillItem } from '../types';

const education: ResumeItem[] = [
  { year: '2020 - 2025', content: '한동대학교 ICT융합/UX Design 전공' }
];

const activities: ResumeItem[] = [
  { year: '2025', content: "부산 한국화 작업실 '묵난 작업실' BX디자이너" },
  { year: '2024', content: 'IT 연합동아리 ‘PARD’ 운영진 BX 디자이너' },
  { year: '2023', content: '‘VUE:RE’ 천연 화장품 플랫폼 UXUI 디자이너' },
  { year: '2023', content: 'IT 연합동아리 ‘PARD’ UXUI 디자이너' },
  { year: '2023', content: '강릉 ‘브루누벨 153’ 레스토랑 디자이너' },
  { year: '2023', content: '한동대학교 팀장 공동체 디자이너' },
  { year: '2022 - 2023', content: 'IT 연합동아리 ‘SODA’ 디자이너 및 부회장' },
  { year: '2022', content: '한동대학교 총학생회(with) 캠프 디자이너' },
  { year: '2022', content: '한동대학교 ‘사랑의 마라톤’ 디자이너' },
  { year: '2021', content: '우먼센스 실무 프로젝트' },
];

const awards: ResumeItem[] = [
  { year: '2023', content: 'IT 연합 동아리 ‘PARD’ 롱커톤 대상' },
  { year: '2023', content: 'IT 연합 동아리 ‘PARD’ 숏커톤 대상' },
  { year: '2023', content: 'The CEO 공모전 대상' },
  { year: '2023', content: 'Vietnam hackaton hgu x ftu 대상' },
];

const tools: SkillItem[] = [
  { name: 'AI (Midjourney, Google Labs-imagefx/flow/whisk, Chat GPT etc.)', percentage: 80 },
  { name: 'Figma', percentage: 95 },
  { name: 'Adobe Photoshop', percentage: 80 },
  { name: 'Adobe Illustrator', percentage: 60 },
  { name: 'Adobe After Effect', percentage: 60 },
];

const ResumeSection: React.FC<{ title: string; items?: ResumeItem[]; simpleList?: string[]; skills?: SkillItem[] }> = ({ title, items, simpleList, skills }) => (
  <div className="mb-16 last:mb-0">
    <h3 className="text-3xl mb-6 font-handwriting">{title}</h3>
    <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-y-4">
      {items && items.map((item, idx) => (
        <React.Fragment key={idx}>
          <div className="font-extrabold text-base font-sans">{item.year}</div>
          <div className="text-base text-[#000033] break-keep">{item.content}</div>
        </React.Fragment>
      ))}
      {simpleList && simpleList.map((item, idx) => (
        <div key={idx} className="col-span-2 text-base text-[#000033] break-keep mb-2">
          {item}
        </div>
      ))}
      {skills && skills.map((skill, idx) => (
        <div key={idx} className="col-span-2 text-base text-[#000033] break-keep mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span className="flex-1 min-w-[200px]">{skill.name}</span>
            <div className="w-full sm:w-32 h-1.5 bg-[#eee] rounded-full overflow-hidden shrink-0">
                <div className="h-full bg-[#000033] rounded-full transition-all duration-1000" style={{ width: `${skill.percentage}%` }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 mt-24">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-10 md:gap-20">
        {/* Left: Profile & Intro */}
        <div className="flex flex-col">
          <div className="mb-10">
            <img 
              src="https://github.com/uneteclair/my-images/blob/main/%E1%84%83%E1%85%B5%E1%84%80%E1%85%B3%E1%84%85%E1%85%B5%20%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%91%E1%85%B5%E1%86%AF.jpg?raw=true" 
              alt="Kim Suah Profile" 
              className="w-[300px] h-[400px] bg-[#f4f4f4] object-cover rounded-none filter-none shadow-xl" 
            />
          </div>
          
          <h2 className="text-[2.2rem] md:text-[3.5rem] leading-[1.2] mb-8 font-handwriting">
            사람을 끄는<br />
            매력적인<br />
            디자이너<br />
            김수아입니다
          </h2>
          
          <div className="text-base text-[#000033] leading-[1.8] max-w-[95%] mb-8 space-y-4">
            <p>제가 말하는 매력은 두 가지를 의미합니다.</p>
            <p>
              첫 번째는 <strong>이유있는 결정</strong>입니다. 프로젝트를 시작하면 저는 겉으로 드러난 요구보다 왜 이 문제가 발생했는지를 먼저 묻습니다. 질문을 거듭하며 사용자의 숨겨진 불편과 팀이 미처 언어화하지 못한 고민을 찾아내고, 그 본질에 닿은 뒤에야 디자인을 시작합니다. 이 과정에서 사람들의 리듬과 망설임을 읽어내는 것이 결과물의 완성도를 결정한다고 믿습니다.
            </p>
            <p>
              두 번째는 <strong>끌림</strong>입니다. 저는 디자인을 <strong>끌림의 순간</strong>을 만드는 일이라고 생각합니다. 소비자의 스토리를 담은 키워드를 찾아 스토리를 만들고 시선이 머무를 수 있는 순간을 만들기 위해 노력합니다. 그 한순간을 만들기 위해 저는 언제나 변화의 흐름을 가장 먼저 살피고 브랜드가 지닌 고유한 결을 찾아 부드럽게 다듬습니다.
            </p>
            <p>그래서 제 작업에는 늘 팀의 온기, 대화의 흔적, 그리고 끌림의 순간이 담겨있습니다.</p>
            <p>저는 <strong>사람을 끄는 매력적인 디자이너, 김수아</strong>입니다.</p>
          </div>

          <div className="mb-5">
            <a 
              href="https://www.behance.net/e519b9f7" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-block font-bold text-[0.9rem] text-[#000033] border-b border-[#000033] hover:opacity-60 transition-opacity"
            >
              Behance ↗
            </a>
          </div>
        </div>

        {/* Right: Resume */}
        <div className="flex flex-col">
          <ResumeSection title="Education" items={education} />
          <ResumeSection title="Activities" items={activities} />
          <ResumeSection title="Awards" items={awards} />
          <ResumeSection title="Tools" skills={tools} />
        </div>
      </div>
    </section>
  );
};

export default About;