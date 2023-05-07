import React from 'react'

const PrimaryButton = ({className, children, onClick, disabled, title}) => {
  return (
    <button title={title} disabled={disabled} onClick={onClick} className={`rounded-full bg-primary text-white px-6 py-3 hover:bg-lightPrimary hover:border-lightPrimary ${className}`}>{children}</button>
  )
}

export default PrimaryButton