"use client";
import { useState } from 'react';
const TabContents = (props: any) => {
    const [showContent, setShowContent] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const handeShowClick = () => {
        setShowContent(!showContent)
    }
    return (
        <div className="content">
            <div className="grid grid-cols-3 product-library relative product-content">
                {props.tabs.map((tab: any, index: any) => (
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
            <div className={"bg-white text-[#666] rounded mb-4 mt-4" + (!showContent?' h-[500px] overflow-hidden': '')} dangerouslySetInnerHTML={{ __html: props.tabs[activeTab].content }}></div>
            <div className={"text-center relative" + (!showContent?' readmore': '')}>
                <button type='button' className='border py-2 px-8 rounded hover:bg-[#6fa400] hover:text-white' onClick={() => handeShowClick()}>
                    { (!showContent?'Xem Thêm': 'Rút Gọn') }
                </button>
            </div>
        </div>
    );
};

export default TabContents;