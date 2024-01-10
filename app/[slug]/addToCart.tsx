"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useCart } from '../components/CartContext';
export function AddToCart(props: any) {
    const router = useRouter()
    const [color, setColor] = useState<any>([]);
    const [pin, setPin] = useState<any>([]);
    const { dispatch } = useCart();
    const [qty, setQty] = useState(1)
    const updateQty = (event: any) => setQty((event.target.value>0)?parseInt(event.target.value):1);
    const addToCart = () => {
        if(props.data.color.length > 0){ if(color.length == 0) { alert('Vui lòng chọn Màu!'); return false; } }
        if(props.data.pin.length > 0){ if(pin.length == 0) { alert('Vui lòng chọn Pin!'); return false; } }
        dispatch({ type: 'ADD_TO_CART', payload: 
            {
                id: props.data._id,
                title: props.data.title,
                slug: props.data.slug,
                price: props.data.price,
                avatar: props.data.avatar,
                quantity: qty,
                color,
                pin
            } 
        });
        router.push('/cart');
    };
    const handleCheckboxChangeColor = (event: any) => {
        if (event.target.checked) {
            setColor((prevItems: any) => [...prevItems, event.target.value]);
        } else {
            const updatedColorItems = color.filter((item: any) => item !== event.target.value);
            setColor(updatedColorItems);
        }
    };
    const handleCheckboxChangePin = (event: any) => {
        if (event.target.checked) {
            setPin((prevItems: any) => [...prevItems, event.target.value]);
        } else {
            const updatedPinItems = pin.filter((item: any) => item !== event.target.value);
            setPin(updatedPinItems);
        }
    };
    return (
        <>
            <div className="mt-4 text-sm">
                {
                    props.data && props.data.color.length > 0 &&
                    <div className="mb-4 items-center border p-1 bg-[whitesmoke] rounded">
                        <div className="text-[#919191] mb-2 text-xs font-bold">
                            Màu sắc:
                        </div>
                        <div className="grid gap-1 grid-cols-7">
                            {
                                props.data.color.map((c: any, ci: any) =>
                                    <div key={ci} className={"bg-[#fff] hover:bg-[#fff] text-[#919191] p-2 rounded hover:text-[#000] cursor-pointer text-[12px] " + (c.title.split(' ').length > 2 ? "col-span-3" : "col-span-2")}>
                                        <input type="checkbox" name="color" id={"color_" + ci} defaultChecked={c.check} defaultValue={c.title} onChange={handleCheckboxChangeColor} />
                                        <label htmlFor={"color_" + ci} className="ml-1">{c.title}</label>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
                {
                    props.data && props.data.pin.length > 0 &&
                    <div className="items-center border p-1 bg-[whitesmoke] rounded">
                        <div className="text-[#919191] mb-2 text-xs font-bold">
                            Pin:
                        </div>
                        <div className="grid gap-1 grid-cols-3">
                            {
                                props.data.pin.map((p: any, pi: any) =>
                                    <div key={pi} className="col-span-1 bg-[#fff] hover:bg-[#fff] text-[#919191] p-2 rounded hover:text-[#000] cursor-pointer text-[12px]">
                                        <input type="checkbox" name="pin" id={"pin_" + pi} defaultChecked={p.check} defaultValue={p.title} onChange={handleCheckboxChangePin} />
                                        <label htmlFor={"pin_" + pi} className="ml-1">{p.title}</label>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
            </div>
            <div className="addToCart flex mt-4 items-center">
                <span>
                    <input
                        type="text"
                        min="1"
                        max="100"
                        name="number"
                        onChange={(event) => updateQty(event)}
                        defaultValue={1}
                        className="mr-2 md:p-1 border border-gray-300 hover:bg-white text-center rounded focus:ring focus:ring-blue-200 focus:border-blue-500 w-24"
                    />
                </span>
                <span>
                    <button
                        type="button"
                        className="bg-[#6fa400] hover:bg-[#5a8600] px-6 py-2 text-white rounded text-xs md:text-base"
                        onClick={addToCart}
                    >
                        THÊM VÀO GIỎ <i className="fa fa-shopping-cart"></i>
                    </button>
                </span>
            </div>
        </>
    )
}