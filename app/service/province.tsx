import { API_URL } from "../config";

export async function Province() {
    const res = await fetch(API_URL + "site/getProvince");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}