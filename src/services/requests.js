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
export async function handleFavorite({ revenueId, userId }) {
  return await api.get(`/favorite/${revenueId}/${userId}`)
}