import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./BlackFriday.css"
import Bow from "../../../assets/images/giftTag3.webp"



const TimeCounter = ({ targetDate,background }) => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;
        let timeLeft = {};

        if (difference > 0) {
            const totalSeconds = Math.floor(difference / 1000);
            const days = Math.floor(totalSeconds / (3600 * 24));
            const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;

            timeLeft = {
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0'),
            };
        } else {
            // Offer expired
            return null;
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    if (!timeLeft) {
        return <div className="text-danger">Offer has expired!</div>;
    }

    return (
        <Link to="/blackfriday" className='bf-counter'>
            <div className="bf-card">
                <div className="bf-card-inner">

                    <div className="bf-card-front" style={{background:background}}>
                <img src={Bow} className='bowGift' alt='Gift Bow'/>

                        <div className="d-flex justify-content-center digital-clock">
                            <h1 className='mb-2 mt-0  text-white'>Offer Ends in</h1>
                            <div className='d-flex flex-row justify-content-center clock-container'>
                                <div className="countdown-item">
                                    <div className="item-box">
                                        <div className="number">{timeLeft.days}</div>
                                        <div className="label">Days</div>
                                    </div>
                                </div>
                                <div className="countdown-item">
                                    <div className="item-box">
                                        <div className="number">{timeLeft.hours}</div>
                                        <div className="label">Hrs</div>
                                    </div>
                                </div>
                                <div className="countdown-item">
                                    <div className="item-box">
                                        <div className="number">{timeLeft.minutes}</div>
                                        <div className="label">Mins</div>
                                    </div>
                                </div>
                                <div className="countdown-item">
                                    <div className="item-box">
                                        <div className="number">{timeLeft.seconds}</div>
                                        <div className="label">Secs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bf-card-back" style={{background:background}}>
                <img src={Bow} className='bowGift' alt='Gift Bow'/>

                    <div className="d-flex justify-content-center digital-clock">
                            <h1 className='mb-2 mt-0  text-white'>HURRY UP!</h1>
                            <div className='my-2 p-2 border border-white rounded-3'>See Offers</div>
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    );
};

export default TimeCounter;
