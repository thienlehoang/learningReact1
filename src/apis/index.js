const userAPI = "http://localhost:4000/api/v1/user";
const pizzaAPI = "http://localhost:4000/api/v1/pizza";
const cartAPI = "http://localhost:4000/api/v1/cart";

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
export const signIn = async ({ email, password }) => {
  const response = await fetch(`${userAPI}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const signUp = async (formSignup) => {
  const response = await fetch(`${userAPI}/signup`, {
    method: "POST",
    body: JSON.stringify(formSignup),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const logout = async () => {
  const response = await fetch(`http://localhost:4000/api/v1/user/logout`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  const data = await response.json();
  return data;
};

//CART
export const getCart = async () => {
  try {
    const response = await fetch(cartAPI, {
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

export const addToCart = async (pizza) =>{
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
}

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
    const response = await fetch(cartAPI, {
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

export const addToLikeList = async (pizza) =>{
  const data = await handleAPI({
    url: cartAPI + "/addToLikeList",
    method: "POST",
    body: JSON.stringify(pizza),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  return data;
}

export const updateLikeList = async (listUpdate) => {
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
