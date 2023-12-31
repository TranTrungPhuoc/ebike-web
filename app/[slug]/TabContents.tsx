"use client";
import { useState } from 'react';
const TabContents = (props: any) => {
    const detail = props.data;
    const [activeTab, setActiveTab] = useState(0);
    const tabsDataContent = [];
    if (detail['content']) { tabsDataContent.push({ label: "Mô tả sản phẩm", content: detail['content'] }); }
    if (detail['video']) { tabsDataContent.push({ label: "Video", content: detail['video'] }) }
    if (detail['realImage']) { tabsDataContent.push({ label: "Hình ảnh", content: detail['realImage'] }) }
    return (
        tabsDataContent.length > 0 &&
        <div className="col-span-12 order-2 lg:order-1 md:col-span-8">
            <div className="content">
                <div className="grid grid-cols-3 product-library relative product-content">
                    {tabsDataContent.map((tab: any, index: any) => (
                        <div
                            key={index}
                            className={`${activeTab === index
                                ? 'border-t-2 border-[#6fa400] opacity-100'
                                : 'border-t-2 border-white opacity-50'
                                } py-2 col-span-1 cursor-pointer uppercase text-[#6fa400] text-xs md:text-base text-center font-semibold`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </div>
                    ))}
                </div>
                <input type="checkbox" id="more" />
                <div className="bg-white text-[#666] rounded mb-4 mt-4 h-[400px] overflow-hidden" dangerouslySetInnerHTML={{ __html: tabsDataContent[activeTab].content }}></div>
                <div className="text-center relative readmore">
                    <label htmlFor="more" className="border inline-block py-2 px-8 rounded hover:bg-[#6fa400] hover:text-white"></label>
                </div>
            </div>
        </div>
    );
};

export default TabContents;