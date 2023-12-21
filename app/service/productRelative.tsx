import { API_URL } from "../config";

export async function productRelative(slug:string) {
    const res = await fetch(API_URL + "product/getRelative/"+slug);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}