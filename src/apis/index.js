const userAPI = "http://localhost:4000/api/v1/user";
const pizzaAPI = "http://localhost:4000/api/v1/pizza";
const cartAPI = "http://localhost:4000/api/v1/cart";
const likelistAPI = "http://localhost:4000/api/v1/likelist";

const handleAPI = async (item) => {
  const { url, method, body, headers } = item;
  try {
    const response = await fetch(url, {
      method,
      body,
      headers,
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

export const getAllPizza = async ({sort, search, page, itemPerPage}) =>{
  const response = await handleAPI({
    url: `${pizzaAPI}/pizzaList?search=${search}&sort=${sort}&limit=${itemPerPage}&page=${page}`,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}

export const signIn = async ({ email, password }) => {
  const response = await handleAPI({
    url: `${userAPI}/login`,
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  return response
};

export const signUp = async (formSignup) => {
  const response = await handleAPI({
    url: `${userAPI}/signup`,
    method: "POST",
    body: JSON.stringify(formSignup),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const logout = async () => {
  const response = await handleAPI({
    url: `${userAPI}/logout`,
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  return response;
};

//CART
export const getCart = async () => {
  const data = await handleAPI({
    url: cartAPI,
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  return data;
};

export const addToCart = async (pizza) => {
  const data = await handleAPI({
    url: cartAPI + "/addToCart",
    method: "POST",
    body: JSON.stringify(pizza),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  return data;
};

export const updateCart = async (listUpdate) => {
  const data = await handleAPI({
    url: cartAPI + "/update",
    method: "PATCH",
    body: JSON.stringify({
      cartList: listUpdate,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  return data;
};

// Likelist
export const getLikeList = async () => {
  try {
    const response = await fetch(likelistAPI, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addToLikeList = async (id) => {
  const data = await handleAPI({
    url: likelistAPI + "/addToLikeList",
    method: "POST",
    body: JSON.stringify({
      pizzaId: id
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  return data;
};

export const deleteLikeList = async (id) => {
  const data = await handleAPI({
    url: likelistAPI + `/delete/${id}`,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  return data;
};
