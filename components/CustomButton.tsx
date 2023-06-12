


import React from 'react'
import { CustomButtonProps } from '@/R-types'

const CustomButton = ({title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
   <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}` } >
    <span className={`flex-1`}>
        {title}
    </span>
   </button>
  )
}

export default CustomButton