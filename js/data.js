const qnaList = [
  {
    q: '1. 능력의 강도 또는 크기를 최대한 객관적으로 표현한다면?',
    a: [
      { answer: 'a. 남들은 알아차리지 못하지만 나는 느낄 수 있다. (예시: 전류의 흐름이 남들보다 세밀하게 느껴짐)', score: 2 },
      { answer: 'b. 미약하더라도 분명한 변화를 이끌어낼 수 있다. (예시: 약한 정전기를 일으킬 수 있음)', score: 4 },
      { answer: 'c. 주위의 눈길을 끌 정도로 강한 편이다. (예시: 꺼진 가로등을 잠깐 켜둘 수 있음)', score: 6 },
      { answer: 'd. 비교적 규모가 큰 변화를 일으킬 수 있다. (예시: 건물 한 채에 공급할 수 있을 만큼의 전류를 발생할 수 있음)', score: 8 },
      { answer: 'e. 나의 능력은 위 예시들에 국한시킬 수 없을 만큼 강하거나, 강도와는 별개로 무척 높은 사회적 영향력을 지녔다.', score: 10 }
    ]
  },
  {
    q: '2. 능력의 영향력을 최대한 객관적으로 표현한다면?',
    a: [
      { answer: 'a. 사회에 사소한 영향을 끼칠 수 있다. (예시: 5분 뒤의 교통 정보를 예측할 수 있음)', score: 1 },
      { answer: 'b. 개인에게 사소한 영향을 끼칠 수 있다. (예시: 상대방이 당근을 좋아하게 만들 수 있음)', score: 3 },
      { answer: 'c. 사회에 큰 영향을 끼칠 수 있다. (예시: 1년에 해수면을 0.1mm 낮출 수 있음)', score: 6 },
      { answer: 'd. 개인에게 큰 영향을 끼칠 수 있다. (예시: 상대방을 명확히 이해할 수 있음)', score: 8 },
      { answer: 'e. 정치, 경제, 군사적 방면에서 사회에 큰 영향을 끼칠 수 있다. (예시: 상대방을 세뇌할 수 있음)', score: 10 },
    ]
  },
  {
    q: '3. 능력 사용의 제약에 대한 표현으로 가장 알맞은 사항을 고른다면?',
    a: [
      { answer: 'a. 매우 한정된 상황에서만 사용할 수 있다. (예시: 오후 1시 10분에만 발동 가능)', score: 1 },
      { answer: 'b. 개인적인 노력으로 극복할 수 있는 제약을 가지고 있다. (예시: 심리적으로 안정된 상황에서만 발동 가능)', score: 2 },
      { answer: 'c. 제약의 규모가 비교적 작거나 시공간적 한정성이 적다. (예시: 오후 1시 10분을 제외한 시각에만 발동 가능)', score: 3 },
      { answer: 'd. 능력의 강도 및 영향력이 높지 않으나 제약이 없어 언제 어디서나 사용이 가능하다.', score: 4 },
      { answer: 'e. 제약이 없거나 능력의 강도 및 사회적 영향력을 고려한다면 충분히 용인할 수 있는 수준이다.', score: 5 },
    ]
  },
  {
    q: '4. 능력 사용의 범위에 대한 표현으로 가장 알맞은 사항을 고른다면?',
    a: [
      { answer: 'a. 매우 작은 규모 내의 무생물에게만 적용이 가능하다. (예시: 콩알 반쪽 크기의 사물에 한하여 적용 가능)', score: 1 },
      { answer: 'b. 광범위한 규모 내의 무생물에게만 적용이 가능하다. (예시: 방 한 칸 안의 사물에 한하여 적용 가능)', score: 2 },
      { answer: 'c. 사람을 포함하지 않은 생물을 대상으로 적용이 가능하다.', score: 3 },
      { answer: 'd. 사람을 포함한 생물을 대상으로 적용이 가능하다.', score: 4 },
      { answer: 'e. 능력의 강도 및 사회적 영향력을 고려한다면 충분히 용인할 수 있는 수준의 범위이다.', score: 5 }
    ]
  },
  {
    q: '5. 본인의 능력에 대한 개인적인 생각으로 가장 알맞은 사항을 고른다면?',
    a: [
      { answer: 'a. 나의 능력은 별로 쓸모가 없는 것 같다.', score: 1 },
      { answer: 'b. 나의 능력은 일상의 소소한 즐거움이다.', score: 3 },
      { answer: 'd. 나의 능력은 분명히 쓸모가 있지만, 타인을 다치게 할 수 있거나 사회적으로 논란이 될 수 있기 때문에 사용하기가 꺼려진다.', score: 4 },
      { answer: 'e. 나는 나의 능력을 믿는다. 따라서 지체 없이 사용할 수 있다.', score: 5 },
      { answer: 'c. 잘 모르겠다.', score: 2 }
    ]
  }
]

const infoList = [
  {
    name: 'S+',
    desc: '<p>현재 대한민국 내 공식 인증된 S+급 히어로는 총 6인이며, 이는 공인 히어로 상위 0.41%, 대한민국 전체 인구 중 0.0000001%에 해당하는 확률입니다. S+급 유명 인사로는 예지 능력을 활용하여 협회를 지휘하는 NIS 협회장 정태현 원사와 치유 능력으로 전세계 의료계에 꿈을 불어넣었던 1대 히어로 대표 故 백선 원사 등이 있습니다.</p><p>대한민국의 모든 S+급 히어로는 업무 보수의 평균 금액으로 월 누적 2천만원 이상의 수입을 벌어들입니다. 분기별 수수로 50% 환급 및 NIS 가맹점 최대 50% 캐시백을 포함한 여러가지 상세 혜택이 준비되어 있으며, 대한민국을 대표하는 자리에서 동료 히어로들을 위하여 협회를 이끌어 나갈 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 센터에서 확인하세요.</p>'
  },
  {
    name: 'A+',
    desc: '<p>현재 대한민국 내 공식 인증된 A+급 히어로는 총 13인이며, 이는 공인 히어로 상위 1.30%, 대한민국 전체 인구 중 0.0000002%에 해당하는 확률입니다. A+급 유명 인사로는 신체강화계 능력을 활용하여 분쟁 지역의 최전방에서 국제 평화를 지키는 주선희 중사 등이 있습니다.</p><p>대한민국의 모든 A+급 히어로는 업무 보수의 평균 금액으로 월 누적 1천 5백만원 이상의 수입을 벌어들입니다. 분기별 수수로 40% 환급 및 NIS 가맹점 최대 40% 캐시백을 포함한 여러가지 상세 혜택이 준비되어 있으며, 최상위 등급 능력자로서 협회 내의 동료들을 통솔하거나 공익을 위한 뜻을 펼칠 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 복지센터에서 확인하세요.</p>'
  },
  {
    name: 'A',
    desc: '<p>현재 대한민국 내 공식 인증된 A급 히어로는 총 19인이며, 이는 공인 히어로 상위 2.60%, 대한민국 전체 인구 중 0.0000003%에 해당하는 확률입니다. A급 유명 인사로는 감각계 능력을 활용하여 간첩 행위를 미연에 방지하고 대한민국의 안전을 지키는 국가안보실장 서정규 원사 등이 있습니다.</p><p>대한민국의 모든 A급 히어로는 업무 보수의 평균 금액으로 월 누적 1천 5백만원 이상의 수입을 벌어들입니다. 분기별 수수로 40% 환급 및 NIS 가맹점 최대 40% 캐시백을 포함한 여러가지 상세 혜택이 준비되어 있으며, 최상위 등급 능력자로서 협회 내의 동료들을 통솔하거나 공익을 위한 대의를 펼칠 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 복지센터에서 확인하세요.</p>'
  },
  {
    name: 'A-',
    desc: '<p>현재 대한민국 내 공식 인증된 A-급 히어로는 총 27인이며, 이는 공인 히어로 상위 4.45%, 대한민국 전체 인구 중 0.0000005%에 해당하는 확률입니다. A-급 유명 인사로는 의료계 능력으로 분쟁 지역에서 활발한 활동을 펼치고 있는 UNESCAP 소속 의료인 주민경 원사 등이 있습니다.</p><p>대한민국의 모든 A-급 히어로는 업무 보수의 평균 금액으로 월 누적 1천 3백만원 이상의 수입을 벌어들입니다. 분기별 수수로 40% 환급 및 NIS 가맹점 최대 40% 캐시백을 포함한 여러가지 상세 혜택이 준비되어 있으며, 최상위 등급 능력자로서 협회 내의 동료들을 통솔하거나 공익을 위한 대의를 펼칠 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 복지센터에서 확인하세요.</p>'
  },
  {
    name: 'B+',
    desc: '<p>현재 대한민국 내 공식 인증된 B+급 히어로는 총 32인이며, 이는 공인 히어로 상위 6.64%, 대한민국 전체 인구 중 0.0000006%에 해당하는 확률입니다. B+급 유명 인사로는 정신계 능력을 임상심리학 연구에 활용하여 2019년 노벨 의학상을 수상한 김찬 원사 등이 있습니다.</p><p>대한민국의 모든 B+급 히어로는 업무 보수의 평균 금액으로 월 평균 1천만원 이상의 수입을 확보하며, 분기별 수수로 30% 환급 및 NIS 가맹점 최대 30% 캐시백을 포함한 여러가지 상세 혜택을 누림과 함께 상위 등급 능력자로서 히어로 관련 법률 제정에 참여하고 공익을 위해 헌신할 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 센터에서 확인하세요.</p>'
  },
  {
    name: 'B',
    desc: '<p>현재 대한민국 내 공식 인증된 B급 히어로는 총 41인이며, 이는 공인 히어로 상위 9.45%, 대한민국 전체 인구 중 0.0000007%에 해당하는 확률입니다. B급 유명 인사로는 심성계 능력을 물리우주론 연구에 활용하여 2015년 노벨 물리학상을 수상한 유석찬 원사 등이 있습니다.</p><p>대한민국의 모든 B+급 히어로는 업무 보수의 평균 금액으로 월 평균 1천만원 이상의 수입을 확보하며, 분기별 수수로 30% 환급 및 NIS 가맹점 최대 30% 캐시백을 포함한 여러가지 상세 혜택을 누림과 함께 상위 등급 능력자로서 히어로 관련 법률 제정에 참여하고 공익을 위해 헌신할 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 센터에서 확인하세요.</p>'
  },
  {
    name: 'B-',
    desc: '<p>현재 대한민국 내 공식 인증된 B-급 히어로는 총 55인이며, 이는 공인 히어로 상위 13.22%, 대한민국 전체 인구 중 0.000001%에 해당하는 확률입니다. B-급 유명 인사로는 동물계 능력을 활용하여 야생영장류학의 분야를 개척한 침팬지 연구소장 김진희 중사 등이 있습니다.</p><p>대한민국의 모든 B-급 히어로는 업무 보수의 평균 금액으로 월 평균 1천만원 이상의 수입을 확보하며, 분기별 수수로 30% 환급 및 NIS 가맹점 최대 30% 캐시백을 포함한 여러가지 상세 혜택을 누림과 함께 상위 등급 능력자로서 히어로 관련 법률 제정에 참여하고 공익을 위해 헌신할 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 센터에서 확인하세요.</p>'
  },
  {
    name: 'C+',
    desc: '<p>현재 대한민국 내 공식 인증된 C+급 히어로는 총 83인이며, 이는 공인 히어로 상위 18.90%, 대한민국 전체 인구 중 0.000002%에 해당하는 확률입니다. C+급 유명 인사로는 신체강화계 능력을 활용하여 대한민국 e스포츠의 위상을 드높이는 프로게이머 이상혁 하사 등이 있습니다.</p><p>대한민국의 모든 C+급 히어로는 해결하는 업무 건수 당 평균 40만원의 보수를 지급 받고, 월 평균 600만원의 수입을 확보합니다. 분기별 수수로 20% 환급 및 NIS 가맹점 최대 30% 포인트 적립을 포함한 여러가지 상세 혜택이 준비되어 있으며, 협회의 일원으로서 동료들과 함께 성장하고 히어로의 미래를 개척해나갈 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 센터에서 확인하세요.</p>'
  },
  {
    name: 'C',
    desc: '<p>현재 대한민국 내 공식 인증된 C급 히어로는 총 102인이며, 이는 공인 히어로 상위 25.89%, 대한민국 전체 인구 중 0.0000002%에 해당하는 확률입니다. C급 유명인사로는 물질계 능력을 활용하여 다채로운 예술 세계를 표현하며 히어로 협회의 홍보대사를 맡고 있는 조형 예술가 허영우 하사 등이 있습니다.<p><p>대한민국의 모든 C급 히어로는 해결하는 업무 건수 당 평균 40만원의 보수를 지급 받고, 월 평균 600만원의 수입을 확보합니다. 분기별 수수로 20% 환급 및 NIS 가맹점 최대 30% 포인트 적립을 포함한 여러가지 상세 혜택이 준비되어 있으며, 협회의 일원으로서 동료들과 함께 성장하고 히어로의 미래를 개척해나갈 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 센터에서 확인하세요.</p>'
  },
  {
    name: 'C-',
    desc: '<p>현재 대한민국 내 공식 인증된 C-급 히어로는 총 156인이며, 이는 공인 히어로 상위 36.57%, 대한민국 전체 인구 중 0.0000003%에 해당하는 확률입니다. C-급 유명 인사로는 논증계 능력을 활용하여 대중들의 사랑을 받으며 히어로 협회의 홍보대사를 맡고 있는 방송인 유재성 하사 등이 있습니다.<p><p>대한민국의 모든 C-급 히어로는 해결하는 업무 건수 당 평균 40만원의 보수를 지급 받고, 월 평균 600만원의 수입을 확보합니다. 분기별 수수로 20% 환급 및 NIS 가맹점 최대 30% 포인트 적립을 포함한 여러가지 상세 혜택이 준비되어 있으며, 협회의 일원으로서 동료들과 함께 성장하고 히어로의 미래를 개척해나갈 기회를 얻을 수 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 센터에서 확인하세요.</p>'
  },
  {
    name: 'D-',
    desc: '<p>현재 대한민국 내 공식 인증된 D-급 히어로는 총 926인이며, 이는 공인 히어로 중 63.42%, 대한민국 전체 인구 중 0.00001%에 해당하는 확률입니다.</p><p>대한민국의 모든 D-급 히어로는 해결하는 업무 건수 당 평균 25만원의 보수를 지급 받고, 월 평균 400만원의 수입을 확보합니다. 분기별 수수로 10% 환급 및 NIS 가맹점 최대 20% 포인트 적립을 포함한 여러가지 상세 혜택이 준비되어 있으며, 협회의 일원으로서 국가를 위해 이바지할 기회를 얻을 수 있습니다.</p><p>D-급 히어로의 복지는 2017년의 전면 개편 이후 비약적으로 개선되었습니다. NIS는 신체강화 계열 히어로들을 협회 소속 경호 직원으로 우선 채용하는 등 등록증 보유자에 한한 관공서 채용 비율을 점차적으로 늘리고 있습니다.</p><p>NIS는 신규 히어로의 가입을 진심으로 환영합니다. 공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 센터에서 확인하세요.</p>'
  }
]
