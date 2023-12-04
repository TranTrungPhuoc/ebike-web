import Link from "next/link";
export function Service() {
  const serviceList = [
    {
      title: "Hỗ trợ 24/7",
      image: "phone.png",
      description:
        "Luôn lắng nghe ý kiến của khách hàng",
      link: 'blog/post.html'
    },
    {
      title: "Hợp tác cùng xe điện vui",
      image: "cooperate.png",
      description: "Chính sách hoa hồng ưu đãi hấp dẫn",
      link: 'blog/post.html'
    },
    {
      title: "Thu cũ đổi mới",
      image: "old_autumn_renewed.png",
      description: "Tiết kiệm chi phí, tối ưu trãi nghiệm",
      link: 'blog/post.html'
    },
  ];
  return (
    <div className="service bg-[#a1e611] py-4 md:py-8">
      <div className="container mx-auto">
        <div className="grid gap-y-8 gap-x-2 grid-cols-3 md:gap-y-2 md:items-center">
          {serviceList.map((e, i) => (
            <div key={i} className="col-span-1 text-center">
              <Link href={'/' + e.link}>
                <div className="icon mb-1 md:mb-5 px-4">
                  <img src={"/" + e.image} alt="" />
                </div>
                <h3 className="uppercase text-[#333] font-bold md:text-lg mb-1 md:mb-2.5 text-[8px]">
                  {e.title}
                </h3>
                <p className="text-[7px] md:text-xs">{e.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
