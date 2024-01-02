import { API_URL } from "../config";

export async function Wards(districtcode: string) {
    const res = await fetch(API_URL + "site/getWards?districtcode="+districtcode);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
}