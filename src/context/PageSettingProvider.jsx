import { PageSettingContext } from "./index";

const PageSettingProvider = ({children}) => {
  return (
  <PageSettingContext.Provider value={{}}>
    {children}
  </PageSettingContext.Provider>
  )
}

export default PageSettingProvider;