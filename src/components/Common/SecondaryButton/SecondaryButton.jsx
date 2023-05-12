import React from 'react'

const SecondaryButton = ({className, children, onClick, disabled, title}) => {
  return (
    // <button title={title} disabled={disabled} onClick={onClick} className="button-85 px-2 rounded-md font-medium h-10 min-w-[8rem]" role="button">Button 85</button>
    <button className="glow-on-hover border-2 px-6 h-12" type="button">Learn More.</button>
    // <button title={title} disabled={disabled} onClick={onClick} className={`rounded-full border-primary border text-primary px-6 py-2 hover:bg-lightPrimary hover:border-lightPrimary ${className}`}>{children}</button>
  )
}

export default SecondaryButton