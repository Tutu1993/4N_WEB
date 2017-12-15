const CHANGESTATE = 'CHANGESTATE'
const CHANGEMODAL = 'CHANGEMODAL'

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

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
				dispatch(updateState())
			} else if (getState().modal.modal === 'presse') {
				dispatch(modalToPresseOut())
				delay(300).then(() => {
					dispatch(modalToResetOut())
					dispatch(updateState())
				})
			} else if (getState().modal.modal === 'contact') {
				dispatch(modalToContactOut())
				delay(300).then(() => {
					dispatch(modalToResetOut())
					dispatch(modalToPresseIn())
					dispatch(updateState())
				})
			}
		}
    }
}

const toggleModalContact = () => {
    return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			if (getState().modal.modal === null) {
				dispatch(modalToContactIn())
				dispatch(updateState())
			} else if (getState().modal.modal === 'presse') {
				dispatch(modalToPresseOut())
				delay(300).then(() => {
					dispatch(modalToResetOut())
					dispatch(modalToContactIn())
					dispatch(updateState())
				})
			} else if (getState().modal.modal === 'contact') {
				dispatch(modalToContactOut())
				delay(300).then(() => {
					dispatch(modalToResetOut())
					dispatch(updateState())
				})
			}
		}
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
			delay(300).then(() => {
				dispatch(modalToResetOut())
				dispatch(updateState())
			})
		}
    }
}

export { toggleModalPresse, toggleModalContact, closeModal }
