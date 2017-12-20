export default (state = false, action) => {
	switch (action.type) {
		case 'ISFETCHING_CHANGE':
			return !state
		default:
			return state
	}
}
