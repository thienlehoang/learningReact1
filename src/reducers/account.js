export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "login": {
      localStorage.setItem("accessToken", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.data));
      return { ...action.payload.data, isLogined: true };
    }
    case "signup": {
      localStorage.setItem("accessToken", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.data));
      return { ...action.payload.data, isLogined: true };
    }
    case "logout": {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      return {};
    }
    default:
      return state;
  }
};
export default userReducer;
