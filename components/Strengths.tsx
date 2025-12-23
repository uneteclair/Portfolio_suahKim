import React from 'react';
import { StrengthItem } from '../types';

const strengthData: StrengthItem[] = [
  {
    id: 's1',
    num: '01',
    title: '기술 변화를 빠르게 쫓는 사람',
    desc: `2025년 졸업전시 프로젝트를 진행하며 AI 기술의 빠른 발전을 인지하고 이를 적극적으로 활용했습니다.
Midjourney, Google labs 등 다양한 AI 툴을 학습하고 광고 영상 및 브랜딩 영상 제작에 적용하여 기억에 남는 고퀄리티 프로젝트를 완성했습니다. 새로운 기술을 디자인 산출물에 빠르게 접목하는 실행력이 저의 강점입니다.`
  },
  {
    id: 's2',
    num: '02',
    title: '소통으로 갈등을 성과로 이끈 사람',
    desc: `IT 연합 동아리 PARD의 해커톤에서 4명의 개발자, 1명의 기획자와 협업했습니다. 각자의 관점 차이로 인해 진행이 더디고 논쟁이 잦았지만 저는 팀 빌딩 활동과 개인적인 대화를 통해 라포를 쌓고 끈끈한 팀워크를 형성하는 데 주도적으로 기여했습니다.
그 결과, 내부 갈등을 극복하고 최종 "대상"을 수상하는 성과를 이루어냈습니다.`
  },
  {
    id: 's3',
    num: '03',
    title: 'UX를 BX로 연결한 사람',
    desc: `IT 연합 동아리 PARD 초기, 불명확했던 방향성을 BX 디자이너로서 주도적으로 재정립했습니다. 학회의 UX를 고려한 하나의 확고한 브랜딩 방향성을 정립하고 이를 모든 포스터 및 디자인에 일관되게 적용했습니다.
그 결과, 현재는 한동대학교 학생들이 유사한 스타일만 봐도 PARD를 떠올릴 만큼 인지도가 확립되었으며 이는 신규 기수 면접에서도 확인된 객관적인 성과입니다.`
  }
];

const Strengths: React.FC = () => {
  return (
    <section id="strengths" className="py-32 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="font-handwriting text-[2.5rem] font-normal mb-16 inline-block">My Strengths</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {strengthData.map((item) => (
            <div key={item.id} className="flex flex-col hover-target">
              <div className="font-handwriting text-[4rem] text-[#000033] mb-2.5 leading-none">{item.num}</div>
              <h3 className="font-sans text-[1.3rem] font-extrabold mb-5 break-keep">{item.title}</h3>
              <div className="text-base text-[#333366] leading-[1.6] break-keep">
                {item.desc.split('\n').map((line, index) => (
                  <p key={index} className="mb-3 last:mb-0">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;