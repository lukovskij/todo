import { combineReducers } from 'redux';
import todo from './todo';
import filter from './filter';

const allReducers = combineReducers({
	todo : todo,
	filter : filter
})

// const allReducers = reducers => {
// 	return (state = {}, action) => (
// 		Object.keys(reducers).reduce(
// 			(nextState, key) =>{
// 				nextState[key] = reducers[key](state[key], action);
//
// 				return nextState
// 			},
// 			{}
// 		)
// 	)
// }
export default allReducers;
