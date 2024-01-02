import { API_URL } from "../config";

export async function Delivery() {
    const res = await fetch(API_URL + "delivery/getList");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}