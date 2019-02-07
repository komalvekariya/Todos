import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from "../actions";
 
const mapStateToProps = state => ({
    todos: state.todos,
    visibilityFilter:state.visibilityFilter

})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    setVisibility: filter => dispatch({ type: 'SET_VISIBILITY_FILTER', filter })
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList) 