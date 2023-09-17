import { useState } from 'react';
import Image from 'next/image';
const TabProducts = (props: any) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white rounded mb-4">
                <Image
                    src={"/" + props.tabs[activeTab].content}
                    alt={props.tabs[activeTab].content}
                    width={500}
                    height={500}
                    layout="responsive"
                />
            </div>
            <div className="grid gap-4 grid-cols-4 product-library">
                {props.tabs.map((tab: any, index: any) => (
                    <div 
                        key={index}
                        className={`${activeTab === index
                            ? 'border-2 border-[#6fa400] opacity-100'
                            : 'border-2 border-white opacity-50'
                        } rounded-lg px-2 py-4 col-span-1 cursor-pointer`}
                        onClick={() => setActiveTab(index)}
                    >
                        <Image
                            src={"/" + tab.label}
                            alt={tab.label}
                            width={100}
                            height={100}
                            layout="responsive rounded"
                        />
                    </div>
                ))}
            </div>

        </div>
    );
};

export default TabProducts;




