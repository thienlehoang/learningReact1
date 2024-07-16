import * as api from "../apis";

export const getCart = () => async (dispatch) => {
  try {
    const res = await api.getCart();
    if(res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "getCart",
      payload: res.data[0].cartList,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = (listUpdate)=> async(dispatch) => {
  try {
    const res = await api.updateCart(listUpdate);
    if(res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "updateCart",
      payload: res.data.cartList,
    });
  } catch (error) {
    console.log(error);
  }
} 
