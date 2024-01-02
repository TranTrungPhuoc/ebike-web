"use client";
import { setLocalStorageItem, getLocalStorageItem } from '../feed/localStorage';
import { useRouter } from 'next/navigation';
export function BuyNow(props: any) {
    const router = useRouter()
    const data = props.data;
    const handleClick = () => {
        const oldData = getLocalStorageItem('carts');
        const objInsert = {
            id: 1,
            title: data.title,
            slug: data.slug,
            avatar: data.avatar,
            price: data.price,
            qty: 1
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
        <div className="buyNow mt-4 text-center">
            <button type="button" onClick={handleClick} className="w-full bg-[#6fa400] hover:bg-[#5a8600] p-2 font-semibold text-xl text-white rounded text-xs md:text-lg">
                MUA NGAY
            </button>
        </div>
    )
}