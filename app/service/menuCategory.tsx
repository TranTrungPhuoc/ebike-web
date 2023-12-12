import { API_URL } from "../config";

export async function menuCategory() {
    const res = await fetch(API_URL + "category/menuCategory");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}