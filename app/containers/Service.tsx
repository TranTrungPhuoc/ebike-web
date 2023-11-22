import Link from "next/link";
export function Service() {
  const serviceList = [
    {
      title: "Bảo hành/2 năm",
      image: "baohanh.png",
      description: "Homesheel quan tâm những điều nhỏ nhất",
      link: 'blog/post.html'
    },
    {
      title: "Homesheel/hỗ trợ 24/7",
      image: "247.png",
      description:
        "Luôn lắng nghe ý kiến của khách hàng", //ngày càng hoàn thiện hơn
      link: 'blog/post.html'
    },
    {
      title: "Phân phối/Homesheel",
      image: "phanphoi.png",
      description: "Chính xác hoa hồng ưu đãi cực hấp dẫn", //cho quý đối tác,
      link: 'blog/post.html'
    },
    {
      title: "Thu cũ/đổi mới",
      image: "congdong.png",
      description: "Giao lưu và kết nối cộng đồng Homesheel",
      link: 'blog/post.html'
    },
  ];
  return (
    <div className="service bg-[#a1e611] py-4 md:py-8">
      <div className="container mx-auto">
        <div className="grid gap-y-8 gap-x-2 grid-cols-4 md:gap-y-2 md:items-center">
          {serviceList.map((e, i) => (
            <div key={i} className="col-span-1 text-center">
              <Link href={'/' + e.link}>
                <div className="icon mb-1 md:mb-5 px-4">
                  <img src={"/" + e.image} alt="" />
                </div>
                <h3 className="uppercase text-[#333] font-bold md:text-lg mb-1 md:mb-2.5 text-[8px]">
                  <span className="md:mr-1">{e.title.split("/")[0]}</span>
                  <span>{e.title.split("/")[1]}</span>
                </h3>
                <p className="text-[8px] md:text-xs">{e.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
