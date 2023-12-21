import { API_URL } from "../config";

export async function configSite() {
    const res = await fetch(API_URL + "site/getList");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}