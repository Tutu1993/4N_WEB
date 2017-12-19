import { delay } from 'vendorDir/function.js'
import updateState from 'actionDir/updateState.js'

const CHANGELOADER = 'CHANGELOADER'

const loaderToNextIn = date => {
	return {
		type: CHANGELOADER,
		payload: {
			loader: date,
			in: true,
		}
	}
}

const loaderToNextOut = date => {
	return {
		type: CHANGELOADER,
		payload: {
			loader: date,
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

const loaderToNext = date => {
	return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			dispatch(loaderToNextIn(date))
		}
		dispatch(updateState())
    }
}

const loaderToReset = date => {
	return (dispatch, getState) => {
		dispatch(updateState())
		if (getState().isFetching) {
			dispatch(loaderToNextOut(date))
			delay(800).then(() => {
				dispatch(loaderToResetOut())
				dispatch(updateState())
			})
		}
    }
}

export { loaderToNext, loaderToReset }
