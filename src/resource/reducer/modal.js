const status = {
	modal: null,
	in: false
}

export default (state = status, action) => {
	switch (action.type) {
		case 'CHANGEMODAL':
			return Object.assign({}, {
				modal: action.payload.modal,
				in: action.payload.in,
			})
		default:
			return state
	}
}
