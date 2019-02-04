import {connect} from 'react-redux'
import TodoList from '../components/TodoList'

const mapStateToProps=state=>({
    todos:state.todos
})

const mapDispatchToProps =dispatch=>({
    toggleTodo:is=>dispatch({type:
    'TOGGLE_TODO',id})
})

export default connect (mapDispatchToProps,mapStateToProps)(TodoList)