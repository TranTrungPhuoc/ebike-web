"use client";
import { useState } from "react";
import { setLocalStorageItem, getLocalStorageItem } from '../feed/localStorage';
import { useRouter } from 'next/navigation';
export function AddToCart(props: any) {
    const [qty, setQty] = useState(1)
    const router = useRouter()
    const data = props.data;
    const updateQty = (event: any) => {
        setQty(parseInt(event.target.value))
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        const oldData = getLocalStorageItem('carts');
        const objInsert = {
            id: 1,
            title: data.title,
            slug: data.slug,
            avatar: data.avatar,
            price: data.price,
            qty
        };
        let newData = [];
        if (oldData) {
            const findElementById = (slug: string) => { return oldData.find((item:any) => item.slug === slug); };
            const foundElement = findElementById(data.slug);
            if (!foundElement){
                const count = oldData.length;
                objInsert['id'] = count + 1;
                oldData.push(objInsert)
            }
            newData = oldData;
        } else { newData = [objInsert]; }
        setLocalStorageItem("carts", newData);
        router.push('/cart');
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="addToCart flex mt-4 items-center">
                <span>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        name="number"
                        onChange={(event)=>updateQty(event)}
                        defaultValue={1}
                        className="mr-2 md:p-1 border border-gray-300 hover:bg-white text-center rounded focus:ring focus:ring-blue-200 focus:border-blue-500 w-24"
                    />
                </span>
                <span>
                    <button
                        type="submit"
                        className="bg-[#6fa400] hover:bg-[#5a8600] px-6 py-2 text-white rounded text-xs md:text-base">
                        THÊM VÀO GIỎ <i className="fa fa-shopping-cart"></i>
                    </button>
                </span>
            </div>
        </form>
    )
}