export const Types = {
  LOGIN_REQUEST: "users/LOGIN_REQUEST",
  LOGIN_SUCCESS: "users/LOGIN_SUCCESS",
  LOGIN_FAILURE: "users/LOGIN_FAILURE"
};

const INITIAL_STATE = {
  data: null,
  error: false,
  firstAccess: true,
  errorMessage: ""
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state
      };
    case Types.LOGIN_SUCCESS:
      return {
        data: action.payload.data,
        error: false,
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error
      };
    default:
      return state;
  }
}

export const Creators = {
  UserLoginRequest: (email, password) => ({
    type: Types.LOGIN_REQUEST,
    payload: { email, password }
  }),

  UserLoginSuccess: data => ({
    type: Types.LOGIN_SUCCESS,
    payload: { data }
  }),

  UserLoginFailure: error => ({
    type: Types.LOGIN_FAILURE,
    payload: { error }
  })
};