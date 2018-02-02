function todo(state, action) {

   switch (action.type) {
		 case 'ADD_TODO' : {
 			return{
 					id : action.id,
 					text : action.text,
 					complated : false
 				}
 		}
		case 'TOGGLE_TODO': {
         if(state.id !== action.id){
					 return state
				 }
				 return {
					 ...state,
					 complated : !state.complated
				 }
		}
   	default:
   		return state
   }

}

export default function todos(state = [], action){
	switch (action.type){
		case 'ADD_TODO' : {
			return [
				todo(state, action),
				...state
			]
		}
		case 'TOGGLE_TODO': {
			return state.map( item => todo(item, action))
		}
		default : {
      return state
		}
	}
}
