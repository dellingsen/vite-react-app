/**
 * Reducers are called from Actions, and are responsible for updating the application state.
 */

const initialState = {
	groups: []
}

export function groupReducer(state = initialState, action) {
	console.log("GroupReducer state:")
	console.log(state)
	console.log(state.groups)
	console.log(action.type)

	switch (action.type) {
		case "INIT_GROUPS":
			return {
				state, groups: action.payload,
			};
		case "ADD_GROUP":
			return {
				...state,
				groups: [
					...state.groups,
					action.payload
				],
			};
		case "REMOVE_GROUP":
			return {
				...state,
				groups: state.groups.filter(
					(group) => group.id !==
						action.payload),
			};
		case "TOGGLE_GROUP":
			return {
				...state,
				groups: state.groups.map((group) =>
					group.id === action.payload
						? {
							...group,
							completed:
								!group.completed
						}
						: group
				),
			};
		default:
			return state;
	}
}