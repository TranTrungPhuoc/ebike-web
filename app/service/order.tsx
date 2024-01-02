import { API_URL } from "../config";
export async function Order(body: any) {
    const res = await fetch(API_URL + "order/insert", {
        method: "POST",
        headers: {
            Accept: "application/x-www-form-urlencoded",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}