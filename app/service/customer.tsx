import { API_URL } from "../config";
export async function Customer(body: any) {
    const res = await fetch(API_URL + "customer/insert", {
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