import { Suspense } from 'react'

import { Category } from "./category";
import { Product } from "./product";
import { categoryDetail } from '../service/categoryDetail';
import { productDetail } from "../service/productDetail";

import { Metadata, ResolvingMetadata } from 'next'
import Loading from '../feed/Loading';

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug
    const slug_rm_html = slug.toString().replace(".html", "");

    let detail: any;

    if(!slug.includes('.html')){
        const _categoryDetail = await categoryDetail(slug);
        detail = _categoryDetail.response.listData;
    }else{
        const _productDetail = await productDetail(slug_rm_html)
        detail = _productDetail.response[0];
    }

    return {
        title: detail.title,
    }
}

export default async function Page({ params }: Props) {
    const slug = params.slug
    const slug_rm_html = slug.toString().replace(".html", "");
    const isPage = (!slug.includes('.html')) ? 'cate' : 'pro';
    return (
        <Suspense fallback={<Loading />}>
            { isPage == 'cate' ? <Category slug={slug}/> : <Product slug={slug_rm_html}/> }
        </Suspense>
    );
}