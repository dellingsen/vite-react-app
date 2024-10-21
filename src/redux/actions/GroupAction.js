
/**
 * Actions are dispatched from a component.
 */

import initialStore from "../store/groupsStore";

export function initializeGroupData() {
  // Used to preload static app data
  return dispatch => {
    dispatch({
      type: "INIT_GROUPS", payload: initialStore.groups,
    });
  }
}

export function addGroupAction(group) {
  // Could save group to database here before updating state
  return dispatch => {
    dispatch({
      type: "ADD_GROUP", payload: group,
    });
  }
}

export function removeGroupAction(id) {
  // Could delete group from database here before updating state
  return dispatch => {
    dispatch({
      type: "REMOVE_GROUP", payload: id,
    });
  }
}

export function toggleGroupAction(id) {
  // Could update group status in database here before updating state
  return dispatch => {
    dispatch({
      type: "TOGGLE_GROUP", payload: id,
    });
  }
}
