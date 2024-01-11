import Link from "next/link";
import { libraryDetail } from "../service/libraryDetail";
export async function Advertisement(props: any) {
    const advertisment = await libraryDetail('advertisment');
    return (
        <div className="col-span-12 md:col-span-3">
            {
                advertisment && 
                advertisment.response.data.map((e:any,i:any)=>
                    <div className="mb-2">
                        <Link href={"/" + e.link}>
                            <img
                                src={e.avatar}
                                alt=""
                                width={300}
                                className="rounded w-full"
                            />
                        </Link>
                    </div>
                )
            }
        </div>
    )
}