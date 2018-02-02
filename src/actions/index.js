export const addTodo = text => ({
	text : text,
	type : 'ADD_TODO',
	id : Date.now()
})

export const toggleTodo = id => ({
	 type : "TOGGLE_TODO",
	 id : id
})

export const setFilter = filter => ({
	type : "SET_FILTER",
	filter 
})
