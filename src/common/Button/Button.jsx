import React from 'react'
import './Button.css'

function Button({ disabled = false, className, children, style, click }) {
  return (
    <button onClick={click} disabled={disabled} className={className} style={style}>{children}</button>
  )
}

export default Button
