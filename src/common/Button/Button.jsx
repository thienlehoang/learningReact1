import React from 'react'
import './Button.css'

function Button({disabled=false,className,children,style}) {
  return (
    <button disabled={disabled} className={className} style={style}>{children}</button>
  )
}

export default Button
