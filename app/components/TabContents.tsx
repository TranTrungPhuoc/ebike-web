import { useState } from 'react';
// import Image from 'next/image';
const TabContents = (props: any) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="content">
            <div className="grid grid-cols-3 product-library relative product-content">
                {props.tabs.map((tab: any, index: any) => (
                    <div 
                        key={index}
                        className={`${activeTab === index
                            ? 'border-t-2 border-[#6fa400] opacity-100'
                            : 'border-t-2 border-white opacity-50'
                        } p-2 col-span-1 cursor-pointer uppercase text-[#6fa400] text-center font-semibold`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className="bg-white text-[#666] rounded mb-4 mt-4" dangerouslySetInnerHTML={{ __html: props.tabs[activeTab].content }}></div>
        </div>
    );
};

export default TabContents;