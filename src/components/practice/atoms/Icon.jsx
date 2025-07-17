import React from 'react'
import { FaRegCheckSquare } from "react-icons/fa";
import { CiWarning } from "react-icons/ci";

function Icon({ icon = "check" }) {

    const checkType = (icon) => {
        switch(icon) {
            case "check":
                return <FaRegCheckSquare />
            case "warning":
                return <CiWarning />
            default:
                return null
        }
    }

  return (
    <div className="text-3xl text-blue-500">
        {checkType(icon)}
    </div>
  )
}

export default Icon