import { delay } from 'vendorDir/function.js'
import updateIsFetching from 'actionDir/isFetching.js'

const LOADER_CHANGE = 'LOADER_CHANGE'

const loaderToNextIn = date => {
	return {
		type: LOADER_CHANGE,
		payload: {
			loader: date,
			in: true,
		}
	}
}

const loaderToNextOut = date => {
	return {
		type: LOADER_CHANGE,
		payload: {
			loader: date,
			in: false,
		}
	}
}

const loaderToResetOut = () => {
	return {
		type: LOADER_CHANGE,
		payload: {
			loader: null,
			in: false,
		}
	}
}

const loaderToNext = date => {
	return (dispatch, getState) => {
		dispatch(updateIsFetching())
		if (getState().isFetching) {
			dispatch(loaderToNextIn(date))
		}
		dispatch(updateIsFetching())
    }
}

const loaderToReset = date => {
	return (dispatch, getState) => {
		dispatch(updateIsFetching())
		if (getState().isFetching) {
			dispatch(loaderToNextOut(date))
			delay(800).then(() => {
				dispatch(loaderToResetOut())
				dispatch(updateIsFetching())
			})
		}
    }
}

export { loaderToNext, loaderToReset }
