import React from 'react'
import { color } from '../utils/utils'
function Button({name}) {
  return (
    <div className={`${color.border}`}>
         {name}
    </div>
  )
}

export default Button