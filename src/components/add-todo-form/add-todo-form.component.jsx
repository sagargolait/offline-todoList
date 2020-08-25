import React from 'react'
import { connect } from 'react-redux'
import { setNewTodoText, addNewTodo } from '../../redux/todos/todos.actions'
import CustomButton from '../custom-button/custom-button.component'
import './add-todo-form.styles.css'

const AddTodoForm = ({ newTodoText, setNewTodoText, addNewTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    addNewTodo()
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <textarea
        type="text"
        className="add-todo-input"
        value={newTodoText}
        placeholder="Add todo"
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <CustomButton isAddTodo type="submit">
        Add todo
      </CustomButton>
    </form>
  )
}
const mapStateToProps = (state) => ({
  newTodoText: state.todos.newTodoText,
})
const mapDispatchToProps = (dispatch) => ({
  setNewTodoText: (value) => dispatch(setNewTodoText(value)),
  addNewTodo: () => dispatch(addNewTodo()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
