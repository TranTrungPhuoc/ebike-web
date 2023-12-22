"use client";
import { useParams } from "next/navigation";
import { Category } from "./category";
import { Post } from "./post";
function Page() {
    const params = useParams();
    const isPage = params.slug.includes('.html') ?'post' :'category';
    return (<main>{ isPage == 'category' ? <Category /> : <Post /> }</main>);
}
Page.getInitialProps = async (ctx: any) => { return {}; };
export default Page;