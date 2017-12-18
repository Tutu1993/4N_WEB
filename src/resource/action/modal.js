import { delay } from 'vendorDir/function.js'
import updateState from 'actionDir/updateState.js'

const CHANGEMODAL = 'CHANGEMODAL'

const modalToPresseIn = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: 'presse',
			in: true,
		}
	}
}

const modalToPresseOut = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: 'presse',
			in: false,
		}
	}
}

const modalToContactIn = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: 'contact',
			in: true,
		}
	}
}

const modalToContactOut = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: 'contact',
			in: false,
		}
	}
}

const modalToResetOut = () => {
	return {
		type: CHANGEMODAL,
		payload: {
			modal: null,
			in: false,
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
