import { API_URL } from "../config";

export async function productHome() {
    const res = await fetch(API_URL + "product/home");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}