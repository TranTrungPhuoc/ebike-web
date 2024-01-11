import { API_URL } from "../config";

export async function StoreList() {
    const res = await fetch(API_URL + "store/getList");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}