// ------------------------------------
// Constants
// ------------------------------------
export const ACTION = 'imagizer::action'

// ------------------------------------
// Actions
// ------------------------------------
export const action = (data) => (dispatch) => {
  dispatch({ type: ACTION, payload: data })
}

export const actions = {
  action
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ACTION]: (state, { payload }) => {
    return {
      ...state
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {

}

export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
