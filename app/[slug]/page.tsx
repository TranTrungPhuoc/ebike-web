"use client";
import { useParams } from "next/navigation";
import { Category } from "./category";
import { Product } from "./product";
function Page() {
    const params = useParams();
    const isPage = params.slug.includes('.html') ?'product' :'category';
    return (<main>{ isPage == 'category' ? <Category /> : <Product /> }</main>);
}

Page.getInitialProps = async (ctx: any) => { return {}; };

export default Page;