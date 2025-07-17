import React from 'react'
import Card from '../../components/practice/orgnaisms/Card';

function Day4() {
    const cardData = [
        {
          id: 1,
          icon: "check",
          title: "알림 도착",
          description: "오늘은 맑고 화창합니다. 외출 시 우산은 필요 없어요!",
          buttonLabel: "자세히 보기",
          variant: "primary",
        },
        {
          id: 2,
          icon: "warning",
          title: "시스템 점검",
          description: "내일 새벽 2시부터 4시까지 서버 점검이 있습니다.",
          buttonLabel: "공지 확인",
          variant: "secondary",
        },
      ];
      
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
        {cardData.map((card) => (
            <Card key={card.id} {...card} />
        ))}
    </div>
  )
}

export default Day4