import { delay } from 'vendorDir/function.js'
import updateState from 'actionDir/updateState.js'

const CHANGELOADER = 'CHANGELOADER'

const loaderToCurrentIn = () => {
	return {
		type: CHANGELOADER,
		payload: {
			loader: 'toCurrent',
			in: true,
		}
	}
}

const loaderToCurrentOut = () => {
	return {
		type: CHANGELOADER,
		payload: {
			loader: 'toCurrent',
			in: false,
		}
	}
}

const loaderToNextIn = () => {
	return {
		type: CHANGELOADER,
		payload: {
			loader: 'toNext',
			in: true,
		}
	}
}

const loaderToNextOut = () => {
	return {
		type: CHANGELOADER,
		payload: {
			loader: 'toNext',
			in: false,
		}
	}
}

const loaderToLastIn = () => {
	return {
		type: CHANGELOADER,
		payload: {
			loader: 'toLast',
			in: true,
		}
	}
}

const loaderToLastOut = () => {
	return {
		type: CHANGELOADER,
		payload: {
			loader: 'toLast',
			in: false,
		}
	}
}

const loaderToResetOut = () => {
	return {
		type: CHANGELOADER,
		payload: {
			loader: null,
			in: false,
		}
	}
}

const loaderToCurrent = () => {
	return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			dispatch(loaderToCurrentIn())
		}
		dispatch(updateState())
    }
}

const loaderToNext = () => {
	return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			dispatch(loaderToNextIn())
		}
		dispatch(updateState())
    }
}

const loaderToLast = () => {
	return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			dispatch(loaderToLastIn())
		}
		dispatch(updateState())
    }
}

const loaderToReset = () => {
	return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			if (getState().loader.loader === 'toCurrent') {
				dispatch(loaderToCurrentOut())
			} else if (getState().loader.loader === 'toNext') {
				dispatch(loaderToNextOut())
			} else if (getState().loader.loader === 'toLast') {
				dispatch(loaderToLastOut())
			}
			delay(800).then(() => {
				dispatch(loaderToResetOut())
				dispatch(updateState())
			})
		}
    }
}

export { loaderToCurrent, loaderToNext, loaderToLast, loaderToReset }
