import { useState } from 'react';
import { PopupCarousel } from '../components/PopupCarousel';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const TabProducts = (props: any) => {
    // const [activeTab, setActiveTab] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(true);
    };
    const closePopup = () => {
        setIsPopupOpen(false);
    };
    const [thumbsSwiper, setThumbsSwiper] = useState<any>();
    
    return (
        <div className="max-w-lg mx-auto mainProduct">
            <div className="bg-white rounded mb-2 cursor-pointer">
                <Swiper
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                >
                    {
                        props.tabs &&
                        props.tabs.map((e:any, i:any)=>(
                            <SwiperSlide key={i}>
                                <img src={e} alt="" onClick={openPopup} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="product-library">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {
                        props.tabs &&
                        props.tabs.map((e:any, i:any)=>(
                            <SwiperSlide key={i}>
                                <img src={e} alt="" />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            {isPopupOpen && <PopupCarousel images={props.tabs && props.tabs} onClose={closePopup} />}
        </div>
    );
};

export default TabProducts;




