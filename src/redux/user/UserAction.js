import { toast } from "react-toastify";
import { loginUser, postUser, updatePassword } from "../../utils/axiosHelper";
import {
  loginSuccess,
  registerSuccess,
  requestFailed,
  requestPending,
  requestSuccess,
} from "./UserSlice";

export const registerAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const { data } = await postUser(form);
    const { status, message } = data;
    status === "success"
      ? dispatch(registerSuccess({ status, message })) && toast[status](message)
      : dispatch(requestFailed({ status, message })) && toast[status](message);
  } catch (error) {
    dispatch(requestFailed(error));
  }
};

export const loginAction = (form) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const { data } = await loginUser(form);

    const { status, message, user } = data;
    status === "success"
      ? dispatch(loginSuccess(user)) && toast[status](message)
      : dispatch(requestFailed({ status, message })) && toast[status](message);
  } catch (error) {
    dispatch(requestFailed(error));
  }
};
