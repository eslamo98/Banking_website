import React from 'react'

const Button = ({margin, text, href}) => {
  return (
    <button className={`bg-orange-500 duration-300 cursor-pointer transition-colors font-bold py-4 px-7 rounded-[16px] hover:bg-orange-600 `}
    style={{marginTop: margin+"rem"}}
    >
        <a href={href}>
            {text}
        </a>
    </button>
  )
}

export default Button