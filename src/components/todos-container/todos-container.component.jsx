import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../todo-item/todo-item.component'
const TodosContainer = ({ filteredTodos, markComplete }) => (
  <div>
    <div className="todos-container">
      {filteredTodos &&
        filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  </div>
)
const mapStateToProps = (state) => ({
  filteredTodos: state.todos.filteredTodos,
})

export default connect(mapStateToProps)(TodosContainer)
