import { API_URL } from "../config";

export async function pinGetList() {
    const res = await fetch(API_URL + "pin/getList");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}