import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/RootReducer'
import { thunk } from 'redux-thunk'
import initialStore from "./initialStore";


export default function configureStore(initialState = initialStore) {
	return createStore(
		rootReducer,
		applyMiddleware(thunk)
	)
}