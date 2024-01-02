import { API_URL } from "../config";

export async function District(citycode: string) {
    const res = await fetch(API_URL + "site/getDistrict?citycode="+citycode);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}