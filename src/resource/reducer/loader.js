const status = {
	loader: null,
	in: false,
}

export default (state = status, action) => {
	switch (action.type) {
		case 'LOADER_CHANGE':
			return Object.assign({}, {
				loader: action.payload.loader,
				in: action.payload.in,
			})
		default:
			return state
	}
}
