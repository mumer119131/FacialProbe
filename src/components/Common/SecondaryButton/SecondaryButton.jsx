import React from 'react'

const SecondaryButton = ({className, children, onClick, disabled, title}) => {
  return (
    <button title={title} disabled={disabled} onClick={onClick} className={`rounded-full border-primary border text-primary px-6 py-3 hover:bg-lightPrimary hover:border-lightPrimary ${className}`}>{children}</button>
  )
}

export default SecondaryButton