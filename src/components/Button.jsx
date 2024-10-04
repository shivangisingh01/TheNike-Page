import React from 'react'

const Button = ({label, iconURL, backgroundColor, borderColor , textColor}) => {
  return (
    <button className={`flex 
        ${backgroundColor ? backgroundColor : "bg-coral-red"}
       justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none`}>
        {label}
        { iconURL && <img src={iconURL} alt="" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button