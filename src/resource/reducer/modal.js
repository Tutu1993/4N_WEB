export default (state = null, action) => {
	switch (action.type) {
		case 'PRESSE':
			return 'presse'
		case 'CONTACT':
			return 'contact'
		case 'RESET':
			return null
		default:
			return state
	}
}
