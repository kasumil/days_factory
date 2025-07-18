import React from 'react'
import { TabPanel } from '../atoms/Tab/TabPanel'

function TabPanels({ tabData }) {
  return (
    <>
        {tabData?.map((tab, index) => (
          <TabPanel
            key={`tab-content-${index}`}
            id={tab.id}
          >
            {tab.content}
          </TabPanel>
        ))}
    </>
  )
}

export default TabPanels