import * as api from "../apis";

export const getAllPizza = (query) => async (dispatch) => {
  try {
    dispatch({
      type: "loading",
      payload: true,
    });
    const res = await api.getAllPizza(query);
    dispatch({
      type: "loading",
      payload: false,
    });
    if (res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "getAll",
      payload: res.data,
    });
    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = (pizza) => async (dispatch) => {
  try {
    const res = await api.addToCart(pizza);
    if (res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "addToCart",
      payload: res.data.cartList,
    });
    return {
      success: true,
      data: res.data.cartList,
    };
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = (listUpdate) => async (dispatch) => {
  try {
    const res = await api.updateCart(listUpdate);
    if (res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "updateCart",
      payload: res.data.cartList,
    });
    return {
      success: true,
      data: res.data.cartList,
    };
  } catch (error) {
    console.log(error);
  }
};
