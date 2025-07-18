import React from 'react';
import { Tabs } from '../../components/practice/orgnaisms/Tabs';

function Day7() {
  const tabData = [
    { id: 'profile', label: '공지사항', content: '📢 오늘의 공지: 점검이 예정되어 있습니다.' },
    { id: 'settings', label: '문의내역', content: '📨 최근 문의: 배송 문의 (답변 완료)' },
    { id: 'myInfo', label: '내 정보', content: '👤 이름: 송수호 | 이메일: suho@example.com' },
  ];

  return (
    <Tabs tabData={tabData} />
  );
}

export default Day7;
