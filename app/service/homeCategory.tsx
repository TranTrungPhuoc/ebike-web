import { API_URL } from "../config";

export async function categoryHome() {
    const res = await fetch(API_URL + "category/home");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}