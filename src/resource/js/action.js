const CHANGESTATE = 'CHANGESTATE'
const CHANGEMODAL = 'CHANGEMODAL'

const updateState = () => {
	return {
		type: CHANGESTATE,
	}
}

const modalToPresseIn = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: 'presse',
			in: true
		}
	}
}

const modalToPresseOut = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: 'presse',
			in: false
		}
	}
}

const modalToContactIn = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: 'contact',
			in: true
		}
	}
}

const modalToContactOut = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: 'contact',
			in: false
		}
	}
}

const modalToResetOut = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: null,
			in: false
		}
	}
}

const toggleModalPresse = () => {
    return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			if (getState().modal.modal === null) {
				dispatch(modalToPresseIn())
			} else if (getState().modal.modal === 'presse') {
				dispatch(modalToPresseOut())
				setTimeout(() => {
					dispatch(modalToResetOut())
				}, 300)
			} else if (getState().modal.modal === 'contact') {
				dispatch(modalToContactOut())
				setTimeout(() => {
					dispatch(modalToResetOut())
					dispatch(modalToPresseIn())
				}, 50)
			}
		}
		dispatch(updateState())
    }
}

const toggleModalContact = () => {
    return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			if (getState().modal.modal === null) {
				dispatch(modalToContactIn())
			} else if (getState().modal.modal === 'presse') {
				dispatch(modalToPresseOut())
				setTimeout(() => {
					dispatch(modalToResetOut())
					dispatch(modalToContactIn())
				}, 50)
			} else if (getState().modal.modal === 'contact') {
				dispatch(modalToContactOut())
				dispatch(modalToResetOut())
			}
		}
		dispatch(updateState())
    }
}

const closeModal = () => {
    return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			if (getState().modal.modal === 'presse') {
				dispatch(modalToPresseOut())
			} else if (getState().modal.modal === 'contact') {
				dispatch(modalToContactOut())
			}
			setTimeout(() => {
				dispatch(modalToResetOut())
			}, 300)
		}
		dispatch(updateState())
    }
}

export { toggleModalPresse, toggleModalContact, closeModal }
