import * as api from "../apis";

export const getLikeList = () => async (dispatch) => {
  try {
    dispatch({
      type: "loading",
      payload: true,
    });
    const res = await api.getLikeList();
    dispatch({
      type: "loading",
      payload: false,
    });
    if(res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "getLikeList",
      payload: res.data[0].likeList,
    });
    return {
      success: true,
      data: res.data[0].likeList,
    }
  } catch (error) {
    console.log(error);
  }
};

export const addToLikeList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "loading",
      payload: true,
    });
    const res = await api.addToLikeList(id);
    dispatch({
      type: "loading",
      payload: false,
    });
    if(res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "addToLikeList",
      payload: res.data.likeList,
    })
    return {
      success: true,
      data: res.data.likeList,
    }
  } catch (error) {
    console.log(error);
  }
}

export const deleteFromLikeList = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "loading",
      payload: true,
    });
    const res = await api.deleteLikeList(id);
    dispatch({
      type: "loading",
      payload: false,
    });
    if(res.status === "Error") {
      return { error: res.message };
    }
    dispatch({
      type: "deletelikelist",
      payload: res.data.likeList,
    })
    return {
      success: true,
      data: res.data.likeList,
    }
  } catch (error) {
    console.log(error);
  }
}

