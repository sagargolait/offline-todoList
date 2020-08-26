import React from 'react'
import { connect } from 'react-redux'
import {
  addHashTagFilter,
  markTodoAsCompleted,
} from '../../redux/todos/todos.actions'
import CustomButton from '../custom-button/custom-button.component'
import { ReactComponent as AddTodoIcon } from '../../assets/check_circle_outline.svg'

import { ReactComponent as DoneIcon } from '../../assets/done.svg'
import './todo-item.styles.css'

const TodoItem = ({ todo, markTodoAsCompleted, addHashTagFilter }) => {
  return (
    <div key={todo.id} className="todo-item">
      <div className="todo-item__text">
        {todo.text.split(' ').map((word, index) =>
          word.startsWith('#') ? (
            <span
              key={index}
              onClick={() => addHashTagFilter(word)}
              className="hashtag"
            >
              {word}{' '}
            </span>
          ) : (
            <span key={index}>{word} </span>
          ),
        )}
      </div>
      <div className="mark-as-complete__button-container">
        {todo.status === 'incomplete' ? (
          <CustomButton
            isMarkAsComplete
            onClick={() => markTodoAsCompleted(todo.id)}
          >
            <AddTodoIcon />
          </CustomButton>
        ) : (
          <div className="status-done-label">
            <DoneIcon />
          </div>
        )}
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  addHashTagFilter: (word) => dispatch(addHashTagFilter(word)),
  markTodoAsCompleted: (todoId) => dispatch(markTodoAsCompleted(todoId)),
})

export default connect(null, mapDispatchToProps)(TodoItem)
