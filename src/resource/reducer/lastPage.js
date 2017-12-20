export default (state = '', action) => {
	switch (action.type) {
		case 'LASTPAGE_CHANGE':
			return action.payload.lastPage
		default:
			return state
	}
}
