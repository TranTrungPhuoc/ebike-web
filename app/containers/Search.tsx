"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
export function Search() {
    const [key, setKey] = useState('')
    const router = useRouter();
    const handleChange = (event:any) => setKey(event.target.value)
    const handleSubmit = (event:any) => {
        event.preventDefault();
        if(key!=''){
            router.push('/search?key='+key);
            return false;
        }
    }
    return (
        <div className="col-span-12 order-2 lg:order-1 md:col-span-5 align-center md:pl-8">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="input-group flex bg-white">
                    <input type="text" onChange={handleChange} className="form-control block focus:outline-none text-[#333] italic text-sm" placeholder="Bạn muốn tìm gì?" />
                    <button className="btn px-4 py-2" type="submit">
                        <i className="fa-solid fa-magnifying-glass hover:text-[#6fa400]"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}