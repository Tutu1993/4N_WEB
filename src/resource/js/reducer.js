import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from 'reducerDir/counter.js'
import modal from 'reducerDir/modal.js'

const reducers = combineReducers({
	routerReducer,
	counter,
	modal
})

export default reducers
