import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import isFetching from 'reducerDir/isFetching.js'
import lastPage from 'reducerDir/lastPage.js'
import loader from 'reducerDir/loader.js'
import modal from 'reducerDir/modal.js'

const reducers = combineReducers({
	routerReducer,
	isFetching,
	lastPage,
	loader,
	modal,
})

export default reducers
