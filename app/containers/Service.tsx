// import Image from "next/image";

export function Service() {
  const serviceList = [
    {
      title: "Bảo hành/2 năm",
      image: "baohanh.png",
      description: "Homesheel quan tâm những điều nhỏ nhất",
    },
    {
      title: "Homesheel/hỗ trợ 24/7",
      image: "247.png",
      description:
        "Luôn lắng nghe ý kiến của khách hàng ngày càng hoàn thiện hơn",
    },
    {
      title: "Phân phối/Homesheel",
      image: "phanphoi.png",
      description: "Chính xác hoa hồng ưu đãi cực hấp dẫn cho quý đối tác",
    },
    {
      title: "Thu cũ/đổi mới",
      image: "congdong.png",
      description: "Giao lưu và kết nối cộng đồng Homesheel",
    },
  ];
  return (
    <div className="service bg-[#a1e611] py-12">
      <div className="container mx-auto">
        <div className="grid gap-y-8 gap-x-2 grid-cols-4 md:gap-y-2 md:items-center">
          {serviceList.map((e, i) => (
            <div key={i} className="col-span-2 md:col-span-1 text-center">
              <div className="icon mb-5">
                <img src={"/" + e.image} alt="" />
                {/* <Image
                  src={"/" + e.image}
                  alt={e.title}
                  width={100}
                  height={100}
                  layout="responsive"
                /> */}
              </div>
              <h3 className="uppercase text-[#333] font-bold text-lg mb-2.5">
                <span className="md:mr-1">{e.title.split("/")[0]}</span>
                <span>{e.title.split("/")[1]}</span>
              </h3>
              <p className="text-sm">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
