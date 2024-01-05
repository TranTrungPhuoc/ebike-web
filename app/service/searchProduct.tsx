import { API_URL } from "../config";

export async function Search(key:any) {
    const res = await fetch(API_URL + "product/search?key="+key);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}