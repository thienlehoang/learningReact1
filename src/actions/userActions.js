import * as api from "../apis";
export const signIn = (formSignIn) => async (dispatch) => {
  try {
    const res = await api.signIn(formSignIn);
    if (res.status === "Error") {
      // Handle error response
      return { error: res.message };
    } else {
      dispatch({
        type: "login",
        payload: res,
      });
      return { success: true, user: res.data };
    }
  } catch (error) {
    console.log(error);
    return { error: "An error occurred during sign in" };
  }
};

export const signUp = (formSignUp) => async (dispatch) => {
  try {
    const res = await api.signUp(formSignUp);
    if (res.status == "Error") {
      return { error: res.message };
    } else {
      dispatch({
        type: "signup",
        payload: res,
      });
      return {
        success: true,
        user: res.data,
      };
    }
  } catch (error) {
    return { error: "An error occurred during sign up" };
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await api.logout();
    dispatch({
      type: "logout",
      payload: res,
    });
    if (res.status == "Error") {
      return { error: res.message };
    } else {
      return { success: true, user:{} };
    }
  } catch (error) {
    return { error: "An error occurred during logout" };
  }
};
