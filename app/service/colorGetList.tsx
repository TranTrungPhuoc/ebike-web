import { API_URL } from "../config";

export async function colorGetList() {
    const res = await fetch(API_URL + "color/getList");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}