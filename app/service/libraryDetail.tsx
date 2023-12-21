import { API_URL } from "../config";

export async function libraryDetail(slug:any) {
    const res = await fetch(API_URL + "library/getDetail?type="+slug);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}