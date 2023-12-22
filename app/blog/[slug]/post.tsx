"use client";
import React, { useEffect, useState } from 'react';
import { ViewMore } from './viewMore';
import { Relative } from './relative';
import { postDetail } from '../../service/postDetail';
import { useParams } from 'next/navigation';
import Breadcrumbs from '../../components/Bredcrumb';
import { Pending } from '../../components/Pending';
export function Post() {
    const [isloading, setLoading] = useState(false);
    const params = useParams();
    const slug = params.slug.toString().replace(".html", "");
    const [data, setData] = useState<any>();
    useEffect(() => {
        postDetail(slug).then((items) => {
            setData(items.response[0]);
        });
        // productRelative(slug).then((items) => {
        //   setRelative(items.response[0].Products);
        // });
        setLoading(true);
    }, [slug]);
    return (
        <>
            {isloading === false ? (
                <Pending />
            ) : (
                <>
                    <Breadcrumbs bredcrumbs={data && data.bredcrumbs} />
                    <div className="store mt-4">
                        <div className="container mx-auto">
                            <h1 className="title md:mt-12 relative">
                                <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                                    {data && data["title"]}
                                </span>
                            </h1>
                            <div className="p-2 md:p-0 grid gap-4 grid-cols-12 mb-4 mx-4 md:mx-0 md:border-t md:border-[#333]">
                            {
                                data &&
                                data['content'] &&
                                <>
                                    <div className="col-span-12 md:col-span-9">
                                        <div className="content md:mt-10 text-[#666] md:px-4 leading-6 text-justify" dangerouslySetInnerHTML={{ __html: data && data.content }}></div>
                                        {/* <div className="border-y py-4 my-5 flex gap-2">
                                        <div className="basis-2/12 md:basis-1/12">
                                            <img src="/user.webp" alt="" width={100} className="rounded-full" />
                                        </div>
                                        <div className="basis-10/12 md:basis-11/12 text-[#666]">
                                            <div className="font-semibold">admin@gmail.com</div>
                                            <p className="text-xs italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                    </div> */}
                                    </div>
                                    <div className="col-span-12 md:col-span-3 index">
                                        <div className="hidden md:block md:mt-10 md:sticky md:top-20">
                                            <h4 className="uppercase font-semibold text-center text-lg mb-2 text-[#333]">Mục Lục</h4>
                                            <div className="mt-2 text-sm border border-[#6fa400] pt-4 p-2 bg-[#f5f5f5] rounded index" dangerouslySetInnerHTML={{ __html: data && data.index }}></div>
                                        </div>
                                    </div>
                                </>
                            }
                            </div>
                            <Relative />
                            <ViewMore />
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}