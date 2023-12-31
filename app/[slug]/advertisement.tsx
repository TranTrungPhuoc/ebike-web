import Link from "next/link";
export function Advertisement(props: any) {
    return (
        <div className="col-span-12 md:col-span-3">
            <div className="mb-2">
                <Link href={"/blog/post.html"}>
                    <img
                        src="/quangcao.jpeg"
                        alt=""
                        width={300}
                        className="rounded w-full"
                    />
                </Link>
            </div>
            <div>
                <Link href={"/blog/post.html"}>
                    <img
                        src="/mau-banner-quang-cao-3.webp"
                        alt=""
                        width={300}
                        className="rounded w-full"
                    />
                </Link>
            </div>
        </div>
    )
}