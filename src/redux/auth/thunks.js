import { authCheck } from "./";

export const authChecker = (email, password) => {
  return async (dispatch) => {
    dispatch(authCheck);
  };
};
