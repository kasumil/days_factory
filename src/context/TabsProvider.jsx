import React, { useState } from 'react'
import { TabsContext } from '.'

function TabsProvider({ initialActiveId, children }) {
  const [activeId, setActiveId] = useState(initialActiveId);


  return (
    <TabsContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </TabsContext.Provider>
  )
}

export default TabsProvider