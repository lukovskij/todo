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
		default : {
      return state
		}
	}
}
