import { api } from "./api";

export async function getCategories() {
  return await api.get("/categories");
}

export async function getRevenuesByCategories(categoryId) {
  return await api.get(`/category/${categoryId}`);
}

export async function getRevenues() {
  return await api.get("/revenues");
}
export async function getFavoriteRevenues(){
  return await api.get("/revenues/favorites")
}
export async function getMyRevenues(){
  return await api.get("/revenues/personal")
}
export async function handleFavorite(revenueId) {
  return await api.get(`/favorite?revenueId=${revenueId}`);
}
export async function addFavorite(revenueId){
  return await api.post(`/favorite/add?revenueId=${revenueId}`); 
}
export async function removeFavorite(revenueId){
  return await api.delete(`/favorite/remove?revenueId=${revenueId}`); 
}