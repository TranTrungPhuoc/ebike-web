import { API_URL } from "../config";

export async function categoryDetailPost(slug:any) {
    const res = await fetch(API_URL + "category/getItemsDetailPost/"+slug);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}