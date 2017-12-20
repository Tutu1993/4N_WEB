export default (state = null, action) => {
	switch (action.type) {
		case 'CHANGELASTPAGE':
			return action.payload.lastPage
		default:
			return state
	}
}
