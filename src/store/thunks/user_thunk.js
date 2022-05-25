import { logout, login } from "../user_slice";

export const user_login = (data, navigate) => (dispatch) => {
  dispatch({ type: login, payload: { user: data } });
  navigate("/information-form");
};

export const user_logout = (navigate) => (dispatch) => {
  dispatch({ type: logout });
  navigate("/");
};
