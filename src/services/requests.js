import { api } from "./api"

export async function getCategories(){
  return api.get("/categories")
}