"use client"
import React, { useEffect, useState } from 'react';
import { menuCategory } from '../service/menuCategory';
import { colorGetList } from '../service/colorGetList';
import { pinGetList } from '../service/pinGetList';
import { AsideCate } from '../[slug]/asideCate';
import Breadcrumbs from '../components/Bredcrumb';
import { MainSearch } from './mainSearch';
import { useSearchParams } from 'next/navigation';
import { Search } from '../service/searchProduct';
import Loading from '../feed/Loading';
export default function Page(props: any) {
    const [isLoading, setIsLoading] = useState(true);
    const searchParams = useSearchParams()
    const keySearch = searchParams.get('key')
    const bredcrumbs = [{ slug: '', title: 'Tìm kiếm' }];
    const [cate, setCate] = useState<any>();
    const [color, setColor] = useState<any>();
    const [pin, setPin] = useState<any>();
    const [search, setSearch] = useState<any>();
    useEffect(() => {
        menuCategory().then((data: any) => { setCate(data.response[0].childs) })
        colorGetList().then((data: any) => { setColor(data.response) })
        pinGetList().then((data: any) => { setPin(data.response) })
        Search(keySearch).then((data: any) => { setSearch(data.response) })
        setIsLoading(false);
    }, [keySearch])
    if (isLoading) return <Loading />;
    return (
        <main>
            <Breadcrumbs bredcrumbs={bredcrumbs && bredcrumbs} />
            <div className="category mt-4">
                <div className="container mx-auto">
                    <div className="grid gap-2 md:grid-cols-12">
                        <AsideCate asideCate={cate && cate} asideColor={color && color} asidePin={pin && pin} />
                        <MainSearch data={search && search} keySearch={keySearch} />
                    </div>
                </div>
            </div>
        </main>
    )
}