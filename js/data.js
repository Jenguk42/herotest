

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
      { answer: 'a. 사회에 사소한 영향을 끼칠 수 있다. (예시: 1년에 해수면을 0.1mm 낮출 수 있음)', score: 1 },
      { answer: 'b. 개인에게 사소한 영향을 끼칠 수 있다. (예시: 상대방이 당근을 좋아하게 만들 수 있음)', score: 3 },
      { answer: 'c. 사회에 큰 영향을 끼칠 수 있다. (예시: 5분 뒤의 교통 정보를 예측할 수 있음)', score: 6 },
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
    desc: '공인 히어로 등록에 대한 더 자세한 사항은 NIS 홈페이지 또는 가까운 히어로 센터에서 확인할 수 있습니다.'
  },
  {
    name: 'A+',
    desc: '연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! '
  },
  {
    name: 'A',
    desc: '한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!'
  },
  {
    name: 'A-',
    desc: '상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.'
  },
  {
    name: 'B+',
    desc: '상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!'
  },
  {
    name: 'B',
    desc: '상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!'
  },
  {
    name: 'B-',
    desc: '연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!'
  },
  {
    name: 'C+',
    desc: '연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!'
  },
  {
    name: 'C',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: 'C-',
    desc: '깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!'
  },
  {
    name: 'D-',
    desc: '애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! '
  }
]
