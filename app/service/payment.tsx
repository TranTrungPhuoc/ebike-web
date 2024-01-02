import { API_URL } from "../config";

export async function Payment() {
    const res = await fetch(API_URL + "payment/getList");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}