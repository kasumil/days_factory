import React from 'react'
import { TabTrigger } from '../atoms/Tab/TabTrigger'
import { TabPanel } from '../atoms/Tab/TabPanel'

export function TabList({ tabData }) {
    return <div className="flex border-b mb-4">
        {tabData?.map((tab, index) => (
          <TabTrigger
            id={tab.id}
            index={index}
            aria-controls={`panel-${tab.id}`}
            key={`tabs-${index}`}
            role="tablist"
            tabs={tabData}  
            >
              {tab.label}
          </TabTrigger>
        ))}
      </div>
  }

export default TabList