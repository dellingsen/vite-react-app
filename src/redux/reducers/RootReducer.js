import { combineReducers } from 'redux'
import { groupReducer } from './GroupReducer'

export default combineReducers(
	{
		groupsState: groupReducer,
	}
)