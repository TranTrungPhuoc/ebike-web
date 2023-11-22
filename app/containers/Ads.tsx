"use client";
import React, { useState } from "react";
export function Ads() {
    const [close, setClose] = useState(false);
    const handleClick = () => setClose(true);
    return (
        <div className={close?"hidden":""}>
            <div className="bg-ads"></div>
            <div className="img-ads">
                <img src="ads.jpeg" alt="" />
                <button type="button" onClick={()=>handleClick()}>
                    <i className="fa fa-close"></i>
                </button>
            </div>
        </div>
    )
}