import * as api from "../apis";

export const getLikeList = () => async (dispatch) => {
  try {
    const res = await api.getLikeList();
    if(res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "getLikeList",
      payload: res.data[0].cartList,
    });
    return {
      success: true,
      data: res.data[0].cartList,
    }
  } catch (error) {
    console.log(error);
  }
};

export const addToLikeList = (pizza) => async (dispatch) => {
  try {
    const res = await api.addToLikeList(pizza);
    if(res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "addToLikeList",
      payload: res.data.cartList,
    })
    return {
      success: true,
      data: res.data.cartList,
    }
  } catch (error) {
    console.log(error);
  }
}

