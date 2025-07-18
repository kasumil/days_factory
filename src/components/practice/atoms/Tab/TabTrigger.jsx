import { useEffect, useRef } from "react";
import useTabs from "../../../../hooks/useTabs";

export function TabTrigger({ id, index, tabs, children }) {
    const { activeId, setActiveId } = useTabs();
    const isActive = activeId === id;
    const buttonRef = useRef(null);

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        const nextIndex = (index + 1) % tabs.length;
        setActiveId(tabs[nextIndex].id);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (index - 1 + tabs.length) % tabs.length;
        setActiveId(tabs[prevIndex].id);
      }
    };

    useEffect(() => {
      if (isActive) {
        buttonRef.current?.focus();
      }
    }, [isActive]);
  
    return (
      <button
        ref={buttonRef}
        id={`tab-${id}`}
        aria-controls={`panel-${id}`}
        onClick={() => setActiveId(id)}
        className={`flex-1 p-2 text-center transition-all duration-200 ${
          isActive
            ? 'border-b-2 border-blue-500 font-bold text-blue-500'
            : 'text-gray-500 hover:text-blue-500'
        }`}
        role="tab"
        aria-selected={isActive}
        onKeyDown={handleKeyDown}
      >
        {children}
      </button>
    );
  }