"use client";
import React, { useState, useEffect } from "react";
export function Ads() {
    const [popup, setPopup] = useState(false);
    // const [close, setClose] = useState(true);
    const handleClick = () => setPopup(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setPopup(true);
        }, 15000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className={"relative " + (popup ? "" : "hidden")}>
            <div className="bg-ads"></div>
            <div className="img-ads">
                <img src="ads.jpeg" alt="" />
                <button type="button" onClick={() => handleClick()}>
                    <i className="fa fa-close"></i>
                </button>
            </div>
        </div>
    )
}