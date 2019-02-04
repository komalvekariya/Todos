import {combineReducers} from 'redux'
import todos from './todos'
import VisibilityFilter from './VisibilityFilter'

export default combineReducers({
    todos,
    VisibilityFilter
})