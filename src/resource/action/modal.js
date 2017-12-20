import { delay } from 'vendorDir/function.js'
import updateIsFetching from 'actionDir/isFetching.js'

const MODAL_CHANGE = 'MODAL_CHANGE'

const modalToPresseIn = () => {
	return {
		type: MODAL_CHANGE,
		payload: {
			modal: 'presse',
			in: true,
		}
	}
}

const modalToPresseOut = () => {
	return {
		type: MODAL_CHANGE,
		payload: {
			modal: 'presse',
			in: false,
		}
	}
}

const modalToContactIn = () => {
	return {
		type: MODAL_CHANGE,
		payload: {
			modal: 'contact',
			in: true,
		}
	}
}

const modalToContactOut = () => {
	return {
		type: MODAL_CHANGE,
		payload: {
			modal: 'contact',
			in: false,
		}
	}
}

const modalToResetOut = () => {
	return {
		type: MODAL_CHANGE,
		payload: {
			modal: null,
			in: false,
		}
	}
}

const toggleModalPresse = () => {
    return (dispatch, getState) => {
		dispatch(updateIsFetching())
		if (getState().isFetching) {
			if (getState().modal.modal === null) {
				dispatch(modalToPresseIn())
				dispatch(updateIsFetching())
			} else if (getState().modal.modal === 'presse') {
				dispatch(modalToPresseOut())
				delay(300).then(() => {
					dispatch(modalToResetOut())
					dispatch(updateIsFetching())
				})
			} else if (getState().modal.modal === 'contact') {
				dispatch(modalToContactOut())
				delay(300).then(() => {
					dispatch(modalToResetOut())
					dispatch(modalToPresseIn())
					dispatch(updateIsFetching())
				})
			}
		}
    }
}

const toggleModalContact = () => {
    return (dispatch, getState) => {
		dispatch(updateIsFetching())
		if (getState().isFetching) {
			if (getState().modal.modal === null) {
				dispatch(modalToContactIn())
				dispatch(updateIsFetching())
			} else if (getState().modal.modal === 'presse') {
				dispatch(modalToPresseOut())
				delay(300).then(() => {
					dispatch(modalToResetOut())
					dispatch(modalToContactIn())
					dispatch(updateIsFetching())
				})
			} else if (getState().modal.modal === 'contact') {
				dispatch(modalToContactOut())
				delay(300).then(() => {
					dispatch(modalToResetOut())
					dispatch(updateIsFetching())
				})
			}
		}
    }
}

const closeModal = () => {
    return (dispatch, getState) => {
		dispatch(updateIsFetching())
		if (getState().isFetching) {
			if (getState().modal.modal === 'presse') {
				dispatch(modalToPresseOut())
			} else if (getState().modal.modal === 'contact') {
				dispatch(modalToContactOut())
			}
			delay(300).then(() => {
				dispatch(modalToResetOut())
				dispatch(updateIsFetching())
			})
		}
    }
}

export { toggleModalPresse, toggleModalContact, closeModal }
