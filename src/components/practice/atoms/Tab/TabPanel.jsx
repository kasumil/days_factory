import useTabs from '../../../../hooks/useTabs';

export function TabPanel({ id, children }) {
  const { activeId } = useTabs();
  if (activeId !== id) return null;

  return (
    <div
      role="tabpanel"
      id={`panel-${id}`}
      aria-labelledby={`tab-${id}`}
      aria-hidden={activeId !== id}
      tabIndex={activeId === id ? 0 : -1}
      className="p-4 border rounded-md bg-white shadow"
    >
      {children}
    </div>
  );
}
