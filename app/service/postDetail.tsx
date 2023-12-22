import { API_URL } from "../config";

export async function postDetail(slug:any) {
    const res = await fetch(API_URL + "post/getDetailSlug/"+slug);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}