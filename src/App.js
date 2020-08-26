import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as ResetIcon } from './assets/reset.svg'
import HashFiltersContainer from './components/hash-filters-container/hash-filters-container.component'
import TodosContainer from './components/todos-container/todos-container.component'
import AddTodoForm from './components/add-todo-form/add-todo-form.component'
import CustomButton from './components/custom-button/custom-button.component'
import {
  setFilteredTodos,
  clearState,
  addHashTagFilter,
} from './redux/todos/todos.actions'
import './App.css'

const App = ({ todos, hashTagFilters, setFilteredTodos, clearState }) => {
  useEffect(() => {
    let filteredTodosList = hashTagFilters.reduce((acc, cur) => {
      return acc.filter((item) => item.hashTags.includes(cur))
    }, todos)
    setFilteredTodos(filteredTodosList)
  }, [todos, hashTagFilters, setFilteredTodos])

  return (
    <div className="app">
      <div className="app__container">
        <h1 className="app__heading">TO-DO APP</h1>
        <div className="reset-button__container">
          <CustomButton isReset onClick={clearState}>
            Reset
            <ResetIcon />
          </CustomButton>
        </div>
        <HashFiltersContainer />
        <AddTodoForm />
        <TodosContainer />
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  todos: state.todos.todos,
  filteredTodos: state.todos.filteredTodos,
  hashTagFilters: state.todos.hashTagFilters,
})
const mapDispatchToProps = (dispatch) => ({
  addHashTagFilter: (hashTagFilter) =>
    dispatch(addHashTagFilter(hashTagFilter)),
  setFilteredTodos: (filteredTodos) =>
    dispatch(setFilteredTodos(filteredTodos)),
  clearState: () => dispatch(clearState()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
