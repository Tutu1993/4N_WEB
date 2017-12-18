import { delay } from 'vendorDir/function.js'
import updateState from 'actionDir/updateState.js'

const CHANGELOADER = 'CHANGELOADER'

const nextAllTure = () => {
	return {
		type: CHANGELOADER,
		payload: {
			state: 'toNext',
			loader: true,
			cover: true,
		}
	}
}

const nextTurnFalse = () => {
	return {
		type: CHANGELOADER,
		payload: {
			state: 'toNext',
			loader: false,
			cover: true,
		}
	}
}

const lastAllTure = () => {
	return {
		type: CHANGELOADER,
		payload: {
			state: 'toLast',
			loader: true,
			cover: true,
		}
	}
}

const lastTurnFalse = () => {
	return {
		type: CHANGELOADER,
		payload: {
			state: 'toLast',
			loader: false,
			cover: true,
		}
	}
}

const resetLoader = () => {
	return {
		type: CHANGELOADER,
		payload: {
			state: null,
			loader: false,
			cover: false,
		}
	}
}

const loaderToNext = () => {
	return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			dispatch(nextAllTure())
		}
		dispatch(updateState())
    }
}

const loaderToLast = () => {
	return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			dispatch(lastAllTure())
		}
		dispatch(updateState())
    }
}

const loaderToNull = () => {
	return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			if (getState().loader.state === 'toNext') {
				dispatch(nextTurnFalse())
			} else if (getState().loader.state === 'toLast') {
				dispatch(lastTurnFalse())
			}
			delay(1500).then(() => {
				dispatch(resetLoader())
				dispatch(updateState())
			})
		}
    }
}

export { loaderToNext, loaderToLast, loaderToNull }
