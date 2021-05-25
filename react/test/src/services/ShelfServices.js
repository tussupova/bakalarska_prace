import axios from "axios";
import { API_DEFAULT } from "../constants";

export function getUsersProducts() {
  return axios.get(API_DEFAULT + "/product/getUsersProducts", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
}
export function removeUsersProduct(id) {
  return axios.post(API_DEFAULT + "/product/removeUsersProduct/" + id, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
}
export function searchProducts(chars) {
  return axios.get(API_DEFAULT + "/product/searchProduct/", {
    params: {
      chars,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });
}
export function addToShelf({ productId, routineId }) {
  return axios.post(
    API_DEFAULT + "/product/addProduct",
    { productId, routineId },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    }
  );
}
