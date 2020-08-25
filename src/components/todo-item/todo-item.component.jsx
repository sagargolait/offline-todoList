import React from 'react'
import { connect } from 'react-redux'
import {
  addHashTagFilter,
  markTodoAsCompleted,
} from '../../redux/todos/todos.actions'
import './todo-item.styles.css'

const TodoItem = ({ todo, markTodoAsCompleted, addHashTagFilter }) => {
  return (
    <div key={todo.id} className="todo-item">
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
      {todo.status === 'incomplete' ? (
        <button onClick={() => markTodoAsCompleted(todo.id)}>
          Mark as complete
        </button>
      ) : null}
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  addHashTagFilter: (word) => dispatch(addHashTagFilter(word)),
  markTodoAsCompleted: (todoId) => dispatch(markTodoAsCompleted(todoId)),
})

export default connect(null, mapDispatchToProps)(TodoItem)
