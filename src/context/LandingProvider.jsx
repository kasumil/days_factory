import { AuthContext, LandingContext } from "./index";

const LandingProvider = ({children}) => {
  return (
  <LandingContext.Provider value={{}}>
    {children}
  </LandingContext.Provider>
  )
}

export default LandingProvider;