import { useState } from 'react';
import { PopupCarousel } from '../components/PopupCarousel';

const TabProducts = (props: any) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const images = ['p1.jpeg','p2.jpeg','p5.jpeg'];
    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white rounded mb-4 cursor-pointer">
                <img src={"/" + props.tabs[activeTab].content} alt="" width={500} onClick={openPopup}/>
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
                        <img src={"/" + tab.label} alt="" width={100} className="rounded" />
                    </div>
                ))}
            </div>
            {isPopupOpen && <PopupCarousel images={images} onClose={closePopup} />}
        </div>
    );
};

export default TabProducts;




