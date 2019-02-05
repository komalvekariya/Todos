import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import VisibilityFilter from '../reducers/VisibilityFilter'
import { toggleTodo } from "../actions";
const mapStateToProps = state => ({
    todos: state.todos,
    
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)