import axios from 'axios';

export function getUsersProducts() {
  return axios.get("https://localhost:5001/product/getUsersProducts", {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
export function removeUsersProduct(id){
  return axios.post("https://localhost:5001/product/removeUsersProduct/" +id, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
export function searchProducts(chars){
  return axios.get("https://localhost:5001/product/searchProduct/", {
    params:{
      chars,
    },
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
export function addToShelf({productId, routineId}){
  return axios.post("https://localhost:5001/product/addProduct", {productId, routineId}, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
  })
}
