import React from 'react'
import './custom-button.styles.css'

const CustomButton = ({
  onClick,
  children,
  isReset,
  isHashLabel,
  isAddTodo,
}) => (
  <button
    className={`custom-button ${isReset ? `reset-button` : ``} ${
      isHashLabel ? `hash-label` : ``
    } ${isAddTodo ? `add-todo-button` : ``}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default CustomButton
