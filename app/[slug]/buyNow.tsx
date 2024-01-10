"use client";
import { useRouter } from 'next/navigation';
import { useCart } from '../components/CartContext';
export function BuyNow(props: any) {
    const { dispatch } = useCart();
    const router = useRouter()
    const data = props.data;
    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: 
            {
                id: data._id,
                title: data.title,
                slug: data.slug,
                price: data.price,
                avatar: data.avatar,
                quantity: 1,
                color: [],
                pin: []
            } 
        });
        router.push('/cart');
    };
    return (
        <div className="buyNow mt-4 text-center">
            <button type="button" onClick={addToCart} className="w-full bg-[#6fa400] hover:bg-[#5a8600] p-2 font-semibold text-xl text-white rounded text-xs md:text-lg">
                MUA NGAY
            </button>
        </div>
    )
}