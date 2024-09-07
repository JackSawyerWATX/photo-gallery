// src/components/Introduction.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import cascade from "../images/cascadehead_oregon_viewpoint_hero.jpg";


const Introduction = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/gallery');
    };

    return (
        <>
            <div className="introduction">
                <div className="text">
                    <h2>
                        Things I can't say in words,
                        I express with photos.
                    </h2>

                    <p>
                        These places are grab my imagination, <br />
                        And the places my imagination escapes to.
                    </p>
                        <br />
                    <button onClick={handleClick} className="explore-button">
                        Explore Now
                    </button>
                </div>
                <div className="image">
                    <img src={cascade} width={650} height={450} alt="Introduction" />
                </div>
            </div>
            {/* <div className="buy-plans">
                <h2>Buy Plans and Subscriptions</h2>
                <p>
                    Unlock premium features and exclusive
                    content with our subscription
                    plans.
                </p>
                <div className="subscription-options">
                    Placeholder content for subscription options
                    <div className="subscription-option">
                        <h3>Basic Plan</h3>
                        <p>Access to a limited set of features</p>
                        <p>$9.99/month</p>
                        <button className="subscribe-button">
                            Subscribe
                        </button>
                    </div>
                    <div className="subscription-option">
                        <h3>Pro Plan</h3>
                        <p>
                            Full access to all features
                            and exclusive content
                        </p>
                        <p>$19.99/month</p>
                        <button className="subscribe-button">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Introduction;
