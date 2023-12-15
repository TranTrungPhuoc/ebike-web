import { API_URL } from "../config";

export async function postNew(type:string) {
    const res = await fetch(API_URL + "post/new?type="+type);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}