import axios from 'axios';

export function getUsersProducts() {
  return axios.get("https://localhost:5001/product/getUsersProducts/8")
}
export function removeUsersProduct(id){
  return axios.post("https://localhost:5001/product/removeUsersProduct/" +id)
}
export function searchProducts(chars){
  return axios.get("https://localhost:5001/product/searchProduct/"+chars)
}
