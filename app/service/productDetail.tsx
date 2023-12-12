import { API_URL } from "../config";

export async function productDetail(slug:any) {
    const res = await fetch(API_URL + "product/detail?slug="+slug);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}