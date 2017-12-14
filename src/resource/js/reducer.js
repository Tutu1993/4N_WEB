import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import isFetching from 'reducerDir/isFetching.js'
import modal from 'reducerDir/modal.js'

const reducers = combineReducers({
	routerReducer,
	isFetching,
	modal,
})

export default reducers
