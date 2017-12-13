const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const PRESSE = 'PRESSE'
const CONTACT = 'CONTACT'
const RESET = 'RESET'

const add = () => {
	return {
		type: INCREMENT
	}
}
const del = () => {
	return {
		type: DECREMENT
	}
}
const addIfOdd = () => {
    return (dispatch, getState) => {
        if (getState().counter % 2 == 0) {
            return
        }
        dispatch(add())
    }
}

const modalToPresse = () => {
	return {
		type: PRESSE
	}
}

const modalToContact = () => {
	return {
		type: CONTACT
	}
}

const modalToReset = () => {
	return {
		type: RESET
	}
}

export { add, del, addIfOdd }

export { modalToPresse, modalToContact, modalToReset }
