import { API_URL } from "../config";

export async function categoryDetail(slug:any, page=1) {
    const res = await fetch(API_URL + "category/getItemsDetail/"+slug+"?page="+page);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}