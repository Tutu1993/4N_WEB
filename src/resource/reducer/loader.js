const status = {
	state: null,
	loader: false,
	cover: false,
}

export default (state = status, action) => {
	switch (action.type) {
		case 'CHANGELOADER':
			return Object.assign({}, {
				state: action.payload.state,
				loader: action.payload.loader,
				cover: action.payload.cover,
			})
		default:
			return state
	}
}
