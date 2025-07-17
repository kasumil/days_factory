import { useState } from "react";
import { AlertContext } from "./index";

const AlertProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  
  const handleShowAlert = (message, type) => {
    setIsOpen(true);
  }

  const handleCloseAlert = () => {
    setIsOpen(false);
  }

  const value = {
    isOpen,
    handleShowAlert,
    handleCloseAlert
  };

  return (
  <AlertContext.Provider value={value}>
    {children}
  </AlertContext.Provider>
  )
}

export default AlertProvider;