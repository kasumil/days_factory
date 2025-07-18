import React from 'react';
import TabsProvider from '../../../context/TabsProvider';
import TabList from '../molecules/TabList';
import TabsPanels from '../molecules/TabsPanels';


export function Tabs({ tabData }) {
  const defalutId = tabData?.[0]?.id || "";
  return (
    <TabsProvider initialActiveId={defalutId}>
      <div className="w-full max-w-md mx-auto flex-col">
        <TabList tabData={tabData} />
        <TabsPanels tabData={tabData} />
      </div>
   </TabsProvider>
  );
}