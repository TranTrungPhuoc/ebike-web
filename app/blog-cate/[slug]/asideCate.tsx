import Link from 'next/link'
export function AsideCate(props: any) {
    const asideCate = props.aside
    return (
        <div className="mb-4 sticky top-16 bg-white">
            <h2 className="font-semibold text-lg text-[#333]">Danh Mục</h2>
            <ul className="border p-4 rounded text-sm leading-7 bg-[#f6f6f6]">
                <li>
                    <Link className="hover:text-[#6fa400]" href={"/" + asideCate.slug}>{asideCate.title}</Link>
                    <ul className="ml-4 list-disc">
                        {
                            asideCate.childs.map((a: any, ai: any) =>
                                <li key={ai}><Link className="hover:text-[#6fa400]" href={"/" + a.slug}>{a.title}</Link></li>
                            )
                        }
                    </ul>
                </li>
            </ul>
        </div>
    )
}