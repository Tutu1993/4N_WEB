export default (state = false, action) => {
	switch (action.type) {
		case 'CHANGESTATE':
			return !state
		default:
			return state
	}
}
