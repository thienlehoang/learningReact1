const userAPI = "http://localhost:4000/api/v1/user";
const pizzaAPI = "http://localhost:4000/api/v1/pizza";
const cartAPI = "http://localhost:4000/api/v1/cart";

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

//cart

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

export const updateCart = async (listUpdate) => {
  try {
    const response = await fetch(cartAPI + "/update", {
      method: "PATCH",
      body: JSON.stringify({
        cartList: [...listUpdate],
      }),
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
