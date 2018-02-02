export default function todos(state = [], action){
	switch (action.type){
		case 'ADD_TODO' : {
			return [
				{
					id : action.id,
					text : action.text,
					complated : false
				},
				...state
			]
		}
		case 'TOGGLE_TODO': {
			return state.map( item =>
				 item.id === action.id
				 ? {
					 ...item,
					 complated : !item.complated
				 } : item
			)
		}
		default : {
      return state
		}
	}
}
