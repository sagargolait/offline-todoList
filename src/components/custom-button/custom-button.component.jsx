import React from 'react'
import './custom-button.styles.css'

const CustomButton = ({
  onClick,
  children,
  isReset,
  isHashLabel,
  isAddTodo,
  isMarkAsComplete,
  disabled,
}) => (
  <button
    disabled={disabled}
    className={`custom-button ${isReset ? `reset-button` : ``} ${
      isHashLabel ? `hash-label` : ``
    } ${isAddTodo ? `add-todo-button` : ``} ${
      isMarkAsComplete ? `mark-as-complete` : ``
    }`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default CustomButton
